import { Router } from 'express';
import proxy from '../controllers';
import { catchAsync, limiter, speedLimiter } from '../middleware';

const router = Router();
router.get('/', limiter, speedLimiter, catchAsync(proxy));

export default router;
