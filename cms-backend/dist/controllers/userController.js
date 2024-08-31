"use strict";
// import { Request, Response } from 'express';
// import User, { IUser } from '../models/userModel';
// import { generateToken } from '../utils/authUtils';
// import bcrypt from 'bcryptjs';
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
exports.getUsers = exports.registerUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Регистрация пользователя
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password, isAdmin } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const userExists = yield userModel_1.default.findOne({ email }).exec();
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = new userModel_1.default({
            email,
            name,
            password: hashedPassword,
            isAdmin: isAdmin || false,
        });
        yield user.save();
        res.status(201).json({
            _id: user._id.toString(),
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.registerUser = registerUser;
// Получение всех пользователей (для администраторов)
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getUsers = getUsers;
