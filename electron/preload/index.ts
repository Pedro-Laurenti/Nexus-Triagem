import { ipcRenderer, contextBridge } from 'electron';

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
    on(...args: Parameters<typeof ipcRenderer.on>) {
        const [channel, listener] = args;
        return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args));
    },
    off(...args: Parameters<typeof ipcRenderer.off>) {
        const [channel, ...omit] = args;
        return ipcRenderer.off(channel, ...omit);
    },
    send(...args: Parameters<typeof ipcRenderer.send>) {
        const [channel, ...omit] = args;
        return ipcRenderer.send(channel, ...omit);
    },
    invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
        const [channel, ...omit] = args;
        return ipcRenderer.invoke(channel, ...omit);
    },
});

// --------- Preload scripts loading ---------
function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
    return new Promise(resolve => {
        if (condition.includes(document.readyState)) {
            resolve(true);
        } else {
            document.addEventListener('readystatechange', () => {
                if (condition.includes(document.readyState)) {
                    resolve(true);
                }
            });
        }
    });
}

const safeDOM = {
    append(parent: HTMLElement, child: HTMLElement) {
        if (!Array.from(parent.children).find(e => e === child)) {
            return parent.appendChild(child);
        }
    },
    remove(parent: HTMLElement, child: HTMLElement) {
        if (Array.from(parent.children).find(e => e === child)) {
            return parent.removeChild(child);
        }
    },
};

/**
    * https://tobiasahlin.com/spinkit
    * https://connoratherton.com/loaders
    * https://projects.lukehaas.me/css-loaders
    * https://matejkustec.github.io/SpinThatShit
*/

function useLoading() {
    const className = `loaders-svg__circle-animation`;
    const styleContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        .app-loading-wrap {
            position: absolute;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content:space-between;
            background: rgba(40, 44, 52, 0.8);
            padding: 50px;
            z-index: 9;
            opacity: 1;
            transition: opacity 1s;
            width: 100%;
        }
        .App {
            opacity: 0;
            transition: opacity 1s;
        }
        .fade-in {
            opacity: 1 !important;
        }
        .fade-out {
            opacity: 0 !important;
            animation: fadeOut 1s forwards;
        }
        .success-message {
            color: #fff;
            font-size: 1rem;
            margin-right: 10px;
            opacity: 0;
            transition: opacity 1s;
            transition: 1s;

        }
        .message-visible {
            opacity: 1;
        }

        svg{
            aspect-ratio: 1 / 1;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
    const oStyle = document.createElement('style');
    const oDiv = document.createElement('div');
    const oIcon = document.createElement('div');
    const oMessage = document.createElement('div');

    oStyle.id = 'app-loading-style';
    oStyle.innerHTML = styleContent;
    oDiv.className = 'app-loading-wrap';
    oIcon.className = className;
    oIcon.innerHTML = `
        <svg viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path id="move-path" d="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z" fill="#D9D9D9"/>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -32"/>
                </filter>
            </defs>
            <g filter="url(#goo)">
                <circle cx="119" cy="74" r="20" stroke="#6f8191" stroke-width="8"/>
                <circle cx="79" cy="141" r="20" stroke="#6f8191" stroke-width="8"/>
                <circle cx="157" cy="141" r="20" stroke="#6f8191" stroke-width="8"/>
                <circle cx="0" cy="0" r="14" fill="#6f8191">
                    <animateMotion path="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z" dur="2s" repeatCount="indefinite" />
                </circle> 
            </g>
        </svg>
    `;
    oMessage.className = 'success-message';
    oMessage.textContent = 'Conteúdo carregado com sucesso';

    return {
        appendLoading() {
            safeDOM.append(document.head, oStyle);
            safeDOM.append(document.body, oDiv);
            safeDOM.append(oDiv, oMessage);
            safeDOM.append(oDiv, oIcon);
        },
        removeLoading() {
            const appLoadingWrap = document.querySelector('.app-loading-wrap') as HTMLElement;
            const successMessage = document.querySelector('.success-message') as HTMLElement;
            if (appLoadingWrap && successMessage) {
                setTimeout(() => {
                    successMessage.classList.add('message-visible');
                    setTimeout(() => {
                        appLoadingWrap.classList.add('fade-out');
                        setTimeout(() => {
                            safeDOM.remove(document.body, appLoadingWrap);
                        }, 1000); // Delay to match fade-out animation
                    }, 2000); // Delay to show the success message
                }, 2000); // Delay to show the success message after the icon
            }
        },
    };
}

// ----------------------------------------------------------------------

const { appendLoading, removeLoading } = useLoading();
domReady().then(() => {
    appendLoading();
    setTimeout(() => {
        // removeLoading();
        setTimeout(() => {
            const content = document.querySelector('.App') as HTMLElement;
            if (content) {
                content.classList.add('fade-in');
                content.classList.remove('hidden');
            }
        }, 1000); // Delay to match fade-in animation of the loader
    }, 4000); // Minimum delay to keep the pre-loader visible (2 seconds for the icon + 2 seconds for the message)
});

window.onmessage = (ev) => {
    if (ev.data.payload === 'removeLoading') {
        // removeLoading();
        setTimeout(() => {
            const content = document.querySelector('.App') as HTMLElement;
            if (content) {
                content.classList.add('fade-in');
                content.classList.remove('hidden');
            }
        }, 1000); // Delay to match fade-in animation of the loader
    }
};
