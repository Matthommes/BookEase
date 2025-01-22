const env = process.env.NODE_ENV === "production";

export const serverUrl = env
  ? process.env.SERVER_URL_PROD
  : process.env.SERVER_URL_DEV;

export const frontendUrl = env
  ? process.env.FRONTEND_URL_PROD
  : process.env.FRONTEND_URL_DEV;
