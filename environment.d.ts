/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY_NAME: string | any;
      API_KEY_VALUE: string;
      RATE_LIMIT_TIME: number;
      RATE_LIMIT_MAX_REQUEST: number;
      SPEED_LIMIT_TIME: number;
      SPEED_LIMIT_DELAY_AFTER: number;
      SPEED_LIMIT_DELAY_MS: number;
    }
  }
}

export {};
