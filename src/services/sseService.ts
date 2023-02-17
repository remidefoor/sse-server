import 'dotenv/config';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { broadcastEvt } from './evtService';
import { logEvt } from './logService';
import { Client } from '../models';

const EVT_FEED_INTERVAL = process.env.EVT_FEED_INTERVAL || 5000;

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

export function simulateEvtFeed(): void {
    const evt = 'Hello, World!';
    setInterval(broadcastEvt.bind(null, clients, evt), EVT_FEED_INTERVAL);
}
