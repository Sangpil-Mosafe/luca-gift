import { ipcMain } from 'electron';

const func1 = () => {
  console.log(`Hello Luca!👋`);
};

ipcMain.handle('test', func1);
