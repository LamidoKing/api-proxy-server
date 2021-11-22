import axios from 'axios';
import { Request, Response } from 'express';
import { BASE_URL, API_KEY_NAME, API_KEY_VALUE } from '../config';

const proxy = async (req: Request, res: Response) => {
  const params = new URLSearchParams({
    [API_KEY_NAME]: API_KEY_VALUE,
    ...req.query,
  });

  const { data } = await axios.get(`${BASE_URL}?${params}`);

  res.json({
    status: 'success',
    data,
  });
};

export default proxy;
