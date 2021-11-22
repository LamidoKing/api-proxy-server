/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY_NAME: string | any;
      API_KEY_VALUE: string;
    }
  }
}

export {};
