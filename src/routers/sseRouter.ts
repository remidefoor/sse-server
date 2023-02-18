import express from 'express';

import { handleConnection } from '../controllers';

export const router = express.Router();

router.get('/event-stream', handleConnection);
