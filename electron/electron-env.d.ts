/// <reference types="vite-electron-plugin/electron-env" />

declare namespace NodeJS {
    interface ProcessEnv {
        VSCODE_DEBUG?: 'true'
        APP_ROOT: string
        /** /dist/ or /public/ */
        VITE_PUBLIC: string
    }
}
