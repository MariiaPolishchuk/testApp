"use strict";
// import jwt from 'jsonwebtoken';
// import { IUser } from '../models/userModel';
// import { JWT_SECRET } from '../config/env';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
// export const generateToken = (user: IUser): string => {
//   return jwt.sign(
//     { id: user._id, isAdmin: user.isAdmin },
//     JWT_SECRET,
//     { expiresIn: '1h' }
//   );
// };
// export const verifyToken = (token: string): any => {
//   try {
//     return jwt.verify(token, JWT_SECRET);
//   } catch (error) {
//     return null;
//   }
// };
// src/utils/authUtils.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, env_1.JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
