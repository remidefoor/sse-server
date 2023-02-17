import { Request, Response } from 'express';

import { addClient, logEvt, removeClient } from '../services';

const HEADERS = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
};

function handleConnectionClose(uuid: string): void {
    logEvt('Client has disconnected.');
    removeClient(uuid);
}

export function handleConnection(req: Request, res: Response): void {
    logEvt('Client has connected.');
    res.writeHead(200, HEADERS);
    const uuid = addClient(res);
    req.on('close', handleConnectionClose.bind(null, uuid));
}
