import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Client } from '../models';

const clients: Client[] = [];

export function addClient(res: Response): string {
    const uuid = uuidv4();
    clients.push({ uuid, res });
    console.info(`Client ${uuid} was added.`);
    console.info(`Connected clients: ${clients.length}.`);
    return uuid;
}
export function removeClient(uuid: string): void {
    for (const [i, client] of clients.entries()) {
        if (client.uuid === uuid) clients.splice(i, 1);
    }
    console.info(`Client ${uuid} was removed.`);
    console.info(`Connected clients: ${clients.length}.`);
}
