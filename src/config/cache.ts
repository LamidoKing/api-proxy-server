import { RedisOptions } from 'ioredis';
import { config } from 'dotenv';

config();

export const { CACHE_TIME } = process.env;

const { REDIS_PORT, REDIS_HOST, REDIS_PASSWORD } = process.env;

export const REDIS_OPTIONS: RedisOptions = {
  port: +REDIS_PORT!,
  host: REDIS_HOST,
  password: REDIS_PASSWORD,
};
