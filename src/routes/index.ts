import { Router } from 'express';
import proxy from '../controllers';
import { catchAsync } from '../middleware';

const router = Router();
router.get('/', catchAsync(proxy));

export default router;
