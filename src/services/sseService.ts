import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Client } from '../models';

const clients: Client[] = [];

export function addClient(res: Response): string {
    const uuid = uuidv4();
    clients.push({ uuid, res });
    console.info(`Client ${uuid} was added.`);
    return uuid;
}
export function removeClient(uuid: string): void {
    clients.filter((client) => client.uuid !== uuid);
    console.info(`Client ${uuid} was removed.`);
}
