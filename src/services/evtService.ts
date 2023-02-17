import { Client } from '../models';

function sendEvt(client: Client, data: string): void {
    client.res.write(`data: ${data}\n\n`)
}

export function broadcastEvt(clients: Client[], data: string): void {
    clients.forEach((client: Client) => sendEvt(client, data));
}
