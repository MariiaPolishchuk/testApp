"use strict";
// import dotenv from 'dotenv';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.PORT = exports.MONGO_URI = void 0;
// dotenv.config();
// export const MONGO_URI = process.env.MONGO_URI || '';
// export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || '';
// export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || '';
// export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET || '';
// export const AUTH0_CALLBACK_URL = process.env.AUTH0_CALLBACK_URL || '';
// export const PORT = process.env.PORT || 5001;
// src/config/env.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGO_URI = process.env.MONGO_URI || '';
exports.PORT = process.env.PORT || 5001;
exports.JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
