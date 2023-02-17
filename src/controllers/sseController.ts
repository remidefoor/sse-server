import { Request, Response } from 'express';

import { addClient, removeClient } from '../services';

const HEADERS = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
};

function handleConnectionClose(uuid: string): void {
    console.log(uuid);
    console.info('Client has disconnected.');
    removeClient(uuid);
}

export function handleConnection(req: Request, res: Response): void {
    console.info('Client has connected.');
    res.writeHead(200, HEADERS);
    const uuid = addClient(res);
    req.on('close', handleConnectionClose.bind(null, uuid));
}
