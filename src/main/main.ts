import { BrowserWindow, app, ipcMain } from "electron";
import { getOrCreateMainWindow } from './windows';

/**
 *  Handle the app "ready" event.
 *  takes care of booting the app
 */
const onReady = async () => {
  const mainWindow: BrowserWindow = getOrCreateMainWindow();

  if (mainWindow === null) getOrCreateMainWindow();
};

/**
 *
 * @param _argv_in
 */
function main() {
  // eslint-disable-next-line promise/catch-or-return
  app.whenReady().then(onReady).catch(console.log);
  app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}

main();
