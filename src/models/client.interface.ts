import { Response } from 'express';

export interface Client {
    uuid: string;
    res: Response
}
