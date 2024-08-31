"use strict";
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
exports.updateLevel = exports.deleteLevel = exports.getLevels = exports.addLevel = void 0;
const levelModel_1 = __importDefault(require("../models/levelModel"));
// Добавление уровня
const addLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const level = new levelModel_1.default({ name });
        const createdLevel = yield level.save();
        res.status(201).json(createdLevel);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.addLevel = addLevel;
// Получение всех уровней
const getLevels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const levels = yield levelModel_1.default.find();
        res.status(200).json(levels);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getLevels = getLevels;
// Удаление уровня
const deleteLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield levelModel_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: 'Level deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteLevel = deleteLevel;
// Обновление уровня
const updateLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedLevel = yield levelModel_1.default.findByIdAndUpdate(id, { name }, { new: true });
        res.status(200).json(updatedLevel);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateLevel = updateLevel;
