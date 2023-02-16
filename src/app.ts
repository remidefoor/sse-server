import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import { sseRouter } from './routers';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(sseRouter);

app.listen(PORT, () => {
   console.info(`SSE server is running on port ${PORT}.`);
});
