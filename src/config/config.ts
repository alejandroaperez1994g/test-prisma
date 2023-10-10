import * as dotenv from 'dotenv';

dotenv.config();

interface Configuration {
  [key: string]: ENV;
}

type ENV = {
  app: AppConfig;
  auth0: AUTH0;
  cloudinary: CLOUDINARY;
};
type AppConfig = {
  PORT: string | number;
};

interface CLOUDINARY {
  cloud_name: string | undefined;
  api_key: string | undefined;
  api_secret: string | undefined;
}

interface AUTH0 {
  client_origin: string | undefined;
  audience: string | undefined;
  issuer: string | undefined;
}

const ENV = process.env.NODE_ENV ?? 'development';

const CONFIG: Configuration = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    auth0: {
      client_origin: process.env.APP_ORIGIN,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },

  production: {
    app: {
      PORT: process.env.PORT || 4002,
    },
    auth0: {
      client_origin: process.env.APP_ORIGIN,
      audience: process.env.AUTH0_AUDIENCE,
      issuer: process.env.AUTH0_ISSUER,
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },
};

export default CONFIG[ENV];
