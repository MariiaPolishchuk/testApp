// import dotenv from 'dotenv';

// dotenv.config();

// export const MONGO_URI = process.env.MONGO_URI || '';
// export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || '';
// export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || '';
// export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET || '';
// export const AUTH0_CALLBACK_URL = process.env.AUTH0_CALLBACK_URL || '';
// export const PORT = process.env.PORT || 5001;

// src/config/env.ts
import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || '';
export const PORT = process.env.PORT || 5001;
export const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
