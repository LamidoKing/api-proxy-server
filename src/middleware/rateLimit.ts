import rateLimit from 'express-rate-limit';
import { RATE_LIMIT_TIME, RATE_LIMIT_MAX_REQUEST } from '../config';

const limiter = rateLimit({
  windowMs: RATE_LIMIT_TIME * 1000 * 60, // x minutes
  max: RATE_LIMIT_MAX_REQUEST, // limit each IP to x requests per windowMs
});

export default limiter;
