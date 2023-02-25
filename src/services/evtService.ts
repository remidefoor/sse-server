import { getEvt } from '../data';
import { Client } from '../models';

function sendEvt(client: Client, data: string): void {
    client.res.write(`data: ${data}\n\n`)
}

export function broadcastEvt(clients: Client[], data: string): void {
    clients.forEach((client: Client) => sendEvt(client, data));
}

export async function broadcastSoccerEvt(clients: Client[]): Promise<void> {
    const evt = await getEvt();
    broadcastEvt(clients, JSON.stringify(evt));
}
