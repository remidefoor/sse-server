import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import { sseRouter } from './routers';
import { simulateEvtStream, logEvt } from './services';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(sseRouter);

simulateEvtStream();

app.listen(PORT, () => {
   logEvt(`SSE server is running on port ${PORT}.`);
});
