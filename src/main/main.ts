import { BrowserWindow, app } from 'electron';
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
}

main();
