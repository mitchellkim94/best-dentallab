import { atom } from 'recoil';

export type AlertMessages = string[];

export const alertMessages = atom<AlertMessages>({
    key: 'alert',
    default: []
});