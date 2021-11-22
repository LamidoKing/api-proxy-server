import slowDown from 'express-slow-down';
import {
  SPEED_LIMIT_TIME,
  SPEED_LIMIT_DELAY_AFTER,
  SPEED_LIMIT_DELAY_MS,
} from '../config';

const speedLimiter = slowDown({
  windowMs: SPEED_LIMIT_TIME * 60 * 1000, // x minutes
  delayAfter: SPEED_LIMIT_DELAY_AFTER, // allow x requests per 15 minutes, then...
  delayMs: SPEED_LIMIT_DELAY_MS, // begin adding SPEED_LIMIT_DELAY_MS of delay per request above 100:
  // request # x + 1 is delayed by  SPEED_LIMIT_DELAY_MS
  // request # x + 2 is delayed by SPEED_LIMIT_DELAY_MS * 2
  // request # x + 3 is delayed by SPEED_LIMIT_DELAY_MS * 3
  // etc.
});

export default speedLimiter;
