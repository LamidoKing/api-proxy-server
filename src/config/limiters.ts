import { config } from 'dotenv';

config();

export const {
  // Rate Limiter
  RATE_LIMIT_TIME,
  RATE_LIMIT_MAX_REQUEST,

  // Speed Limiter
  SPEED_LIMIT_TIME,
  SPEED_LIMIT_DELAY_AFTER,
  SPEED_LIMIT_DELAY_MS,
} = process.env;
