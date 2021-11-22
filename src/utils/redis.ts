import Redis from 'ioredis';
import { REDIS_OPTIONS, CACHE_TIME } from '../config';

const cache = new Redis(REDIS_OPTIONS);

export const getCache = async (key: string) => {
  const data = await cache.get(key);
  return data;
};
export const setCache = (key: string, value: string) =>
  cache.set(key, value, 'EX', CACHE_TIME);
