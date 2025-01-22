const env = process.env.NODE_ENV === "production";

export const serverUrl = env
  ? process.env.NEXT_PUBLIC_SERVER_URL_PROD
  : process.env.NEXT_PUBLIC_SERVER_URL_DEV;

export const frontendUrl = env
  ? process.env.NEXT_PUBLIC_FRONTEND_URL_PROD
  : process.env.NEXT_PUBLIC_FRONTEND_URL_DEV;
