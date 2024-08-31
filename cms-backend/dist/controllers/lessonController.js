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
exports.addLesson = exports.getLessonsByLevel = void 0;
const lessonModel_1 = __importDefault(require("../models/lessonModel"));
// Получить уроки по уровню
const getLessonsByLevel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { level } = req.query;
    try {
        const lessons = yield lessonModel_1.default.find({ level });
        res.status(200).json(lessons);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching lessons' });
    }
});
exports.getLessonsByLevel = getLessonsByLevel;
// Добавить новый урок
const addLesson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { title, description, level, sections } = req.body;
    const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path; // Путь к загруженному файлу
    try {
        const newLesson = new lessonModel_1.default({ title, description, level, image, sections });
        yield newLesson.save();
        res.status(201).json(newLesson);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding lesson' });
    }
});
exports.addLesson = addLesson;
