"use strict";
// src/config/db.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
// import mongoose from 'mongoose';
// import { MONGO_URI } from './env';
// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };
// export default connectDB;
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
// const connectDB = async () => {
//   try {
//     const mongoURI = process.env.MONGO_URI;
//     if (!mongoURI) {
//       throw new Error('MONGO_URI is not defined');
//     }
//     await mongoose.connect(mongoURI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };
// export default connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(env_1.MONGO_URI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); // Завершает процесс с ошибкой
    }
});
exports.connectDB = connectDB;
