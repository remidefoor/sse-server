import fs from 'fs'

import { SoccerEvt } from '../models';
import { logErr } from '../services';

const FALLBACK_EVT: SoccerEvt = {
    id: -1,
    title: "",
    body: "The event feed is currently unavailable.",
    minute: -1,
    author: ""
}

const evts: SoccerEvt[] = [];

async function readEvts(): Promise<void> {
    const data = fs.readFileSync('mock/soccerEvts.json');
    const readEvts: SoccerEvt[] = JSON.parse(data.toString());
    evts.push(...readEvts);
}

function getNextEvt(): SoccerEvt {
    const evt = evts.shift();
    evts.push(evt!!);
    return evt!!;
}

export async function getEvt(): Promise<SoccerEvt> {
    if (evts.length === 0) {
        try {
            await readEvts();
        } catch (e: any) {
            logErr(`Failed to read soccer evts.\nError: ${e}.`);
            return FALLBACK_EVT;
        }
    }
    return getNextEvt();
}
