/* eslint-disable import/prefer-default-export */
import { config } from 'dotenv';

config();

export const {
  APP_PORT = process.env.PORT || 3000,

  BASE_URL,
  API_KEY_NAME,
  API_KEY_VALUE,
} = process.env;
