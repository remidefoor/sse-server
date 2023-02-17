import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import { sseRouter } from './routers';
import { simulateEvtFeed, logEvt } from './services';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(sseRouter);

simulateEvtFeed();

app.listen(PORT, () => {
   logEvt(`SSE server is running on port ${PORT}.`);
});
