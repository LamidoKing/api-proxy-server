import { NextFunction, Request, Response } from 'express';
import { getCache } from '../utils';

const cache = async (req: Request, res: Response, next: NextFunction) => {
  const cacheEntry = await getCache(JSON.stringify(req.query));

  if (cacheEntry) {
    const cacheData = JSON.parse(cacheEntry);
    /* return the entry */
    return res.json({
      status: 'success',
      data: cacheData,
      source: 'cache',
    });
  }
  return next();
};

export default cache;
