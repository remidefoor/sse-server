import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Client } from '../models';
import { logEvt } from './logService';

const clients: Client[] = [];

export function addClient(res: Response): string {
    const uuid = uuidv4();
    clients.push({ uuid, res });
    logEvt(`Client ${uuid} was added.`);
    logEvt(`Connected clients: ${clients.length}.`);
    return uuid;
}
export function removeClient(uuid: string): void {
    for (const [i, client] of clients.entries()) {
        if (client.uuid === uuid) clients.splice(i, 1);
    }
    logEvt(`Client ${uuid} was removed.`);
    logEvt(`Connected clients: ${clients.length}.`);
}
