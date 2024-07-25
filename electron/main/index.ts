import { app, BrowserWindow, shell, ipcMain } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import os from 'node:os'
import { update } from './update'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

process.env.APP_ROOT = path.join(__dirname, '../..')

export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')
export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
    ? path.join(process.env.APP_ROOT, 'public')
    : RENDERER_DIST

// Disable GPU Acceleration for Windows 7
if (os.release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
}

let win: BrowserWindow | null = null
const preload = path.join(__dirname, '../preload/index.mjs')
const indexHtml = path.join(RENDERER_DIST, 'index.html')

async function createWindow() {
    win = new BrowserWindow({
        title: 'Main window',
        icon: path.join(process.env.VITE_PUBLIC, '../../build/favicon.ico'),
        show: false,
        autoHideMenuBar: true,
        fullscreen: true,
        webPreferences: {
            preload,
            // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
            // nodeIntegration: true,
            // contextIsolation: false,
            // Consider using contextBridge.exposeInMainWorld
        },
    })

    if (VITE_DEV_SERVER_URL) {
        win.loadURL(VITE_DEV_SERVER_URL)
        win.webContents.openDevTools()
    } else {
        win.loadFile(indexHtml)
    }

    // Test actively push message to the Electron-Renderer
    win.webContents.on('did-finish-load', () => {
        win?.webContents.send('main-process-message', new Date().toLocaleString())
    })

    // Make all links open with the browser, not with the application
    win.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:')) shell.openExternal(url)
        return { action: 'deny' }
    })

    // Auto update
    update(win)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    win = null
    if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
    if (win) {
        // Focus on the main window if the user tried to open another
        if (win.isMinimized()) win.restore()
        win.focus()
    }
})

app.on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows()
    if (allWindows.length) {
        allWindows[0].focus()
    } else {
        createWindow()
    }
})

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
    const childWindow = new BrowserWindow({
        webPreferences: {
            preload,
            nodeIntegration: true,
            contextIsolation: false,
        },
    })

    if (VITE_DEV_SERVER_URL) {
        childWindow.loadURL(`${VITE_DEV_SERVER_URL}#${arg}`)
    } else {
        childWindow.loadFile(indexHtml, { hash: arg })
    }
})


import { dialog } from 'electron';
import puppeteer from 'puppeteer';
import fs from 'fs';

interface FormData {
    [key: string]: string | boolean;
}

const labelMapping: { [key: string]: string } = {
    'DisciplinasReqPsicologia': 'Psicologia',
    'DisciplinasReqTerapiaOcupacional': 'Terapia Ocupacional',
    'DisciplinasReqFisioterapia': 'Fisioterapia',
    'DisciplinasReqMusicoterapia': 'Musicoterapia',
    'DisciplinasReqFonoaudiologia': 'Fonoaudiologia',
    'DisciplinasReqNeuropsicologia': 'Neuropsicologia',
    'DisciplinasReqPsicomotricidade': 'Psicomotricidade',

    'AcompanhamentosProPsicologia': 'Psicologia',
    'AcompanhamentosProFonoaudiologia': 'Fonoaudiologia',
    'AcompanhamentosProTerapiaOcupacional': 'Terapia Ocupacional',
    'AcompanhamentosProFisioterapia': 'Fisioterapia',
    'AcompanhamentosProNeuropsicologia': 'Neuropsicologia',
    'AcompanhamentosProPsicomotricidade': 'Psicomotricidade',
    'AcompanhamentosProMusicoterapia': 'Musicoterapia',
    'AcompanhamentosProNutricionista': 'Nutricionista',
    'AcompanhamentosProAvaliaçãoNeuropsicológica': 'Avaliação Neuropsicológica',
    'AcompanhamentosProGeneticista': 'Geneticista',
    'AcompanhamentosProPsiquiatra': 'Psiquiatra',
    'AcompanhamentosProDentista': 'Dentista',
};

ipcMain.handle('generate-pdf', async (_event, formData: FormData) => {
    console.log('Handler de PDF registrado'); // Adicione este log
    try {
        const htmlTemplate = fs.readFileSync(
            path.join(__dirname, '../../public/template.html'), 'utf-8'
        );

        const radioGroups = ['Radio1'];

        radioGroups.forEach(group => {
            Object.keys(formData).forEach(key => {
                if (key.startsWith(group)) {
                    formData[key] = formData[key] ? 'checked' : '';
                }
            });
        });

        // Construir strings de disciplinas e atividades
        let disciplinasContent = '';
        let acompanhamentosContent = '';

        for (const [key, value] of Object.entries(formData)) {
            if (key.startsWith('DisciplinasReq') && value) {
                const disciplinaName = labelMapping[key] || key.replace('DisciplinasReq', '');
                disciplinasContent += `<li>${disciplinaName}</li>`;
            }
            if (key.startsWith('AcompanhamentosPro') && value) {
                const acompanhamentosName = labelMapping[key] || key.replace('AcompanhamentosPro', '');
                acompanhamentosContent += `<li>${acompanhamentosName}</li>`;
            }
        }

        formData['disciplinasContent'] = `<ul>${disciplinasContent}</ul>`;
        formData['acompanhamentosContent'] = `<ul>${acompanhamentosContent}</ul>`;

        let htmlContent = htmlTemplate;

        for (const [key, value] of Object.entries(formData)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            htmlContent = htmlContent.replace(regex, value as string);
        }

        console.log('HTML Content:', htmlContent);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        const { filePath } = await dialog.showSaveDialog({
            title: 'Salvar PDF',
            defaultPath: path.join(app.getPath('documents'), 'output.pdf'),
            filters: [{ name: 'PDF Files', extensions: ['pdf'] }]
        });

        if (filePath) {
            await page.pdf({
                path: filePath,
                format: 'A4',
                printBackground: true,
                margin: { top: '5mm', bottom: '5mm', left: '5mm', right: '5mm' }
            });
            await browser.close();
            return `PDF salvo em: ${filePath}`;
        } else {
            await browser.close();
            return 'Salvamento cancelado';
        }
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        throw new Error('Erro ao gerar PDF');
    }
});