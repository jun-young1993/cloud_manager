import { BrowserWindow, BrowserWindowConstructorOptions, app, shell } from 'electron';
import path from 'path';
import { getAssetPath, resolveHtmlPath } from './util';

// eslint-disable-next-line import/no-mutable-exports
export let browserWindows: Array<BrowserWindow | null> = [];

/**
 * get main window options
 *
 * @returns {BrowserWindowConstructorOptions}
 */
export const getMainWindowOptions = (): BrowserWindowConstructorOptions => {
  return {
    show: true,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  };
};

/**
 * create main window
 * takes window event
 *
 * @returns {BrowserWindow}
 */
export const createMainWindow = (): BrowserWindow => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  let browserWindow: BrowserWindow | null;
  // eslint-disable-next-line prefer-const
  browserWindow = new BrowserWindow(getMainWindowOptions());

  browserWindow.loadURL(resolveHtmlPath('index.html'));

  browserWindow.on('closed', () => {
    browserWindows = browserWindows.filter(
      (bw: BrowserWindow | null) => browserWindow !== bw
    );

    browserWindow = null;
  });

  browserWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  browserWindow.webContents.on('will-navigate', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  browserWindows.push(browserWindow);

  return browserWindow;
};

/**
 * get focuse window or create main window
 *
 * @returns {BrowserWindow}
 */
export const getOrCreateMainWindow = (): BrowserWindow => {
  return (
    BrowserWindow.getFocusedWindow() || browserWindows[0] || createMainWindow()
  );
};
