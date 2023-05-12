import { ElectronHandler } from 'main/preload';
import { ScsmInterface } from 'utill/interfaces';

declare global {
  interface Window {
    electron: ElectronHandler;
    scsm: ScsmInterface;
  }
}

export {};
