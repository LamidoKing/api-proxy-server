import { Router } from 'express';
import proxy from '../controllers';
import { cache, catchAsync, limiter, speedLimiter } from '../middleware';

const router = Router();
router.get('/', cache, limiter, speedLimiter, catchAsync(proxy));

export default router;
