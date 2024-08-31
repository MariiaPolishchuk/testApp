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
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = __importDefault(require("./models/userModel")); // Убедитесь, что путь правильный
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Загружаем переменные окружения
const testDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined');
        }
        yield mongoose_1.default.connect(mongoUri, {
            useUnifiedTopology: true,
        });
        // Создайте нового пользователя
        const newUser = new userModel_1.default({
            _id: new mongoose_1.default.Types.ObjectId(),
            email: 'testuser@example.com',
            name: 'Test User',
            password: 'securepassword',
            isAdmin: false
        });
        yield newUser.save();
        console.log('User created:', newUser);
        // Найдите пользователя
        const user = yield userModel_1.default.findOne({ email: 'testuser@example.com' }).exec();
        console.log('User found:', user);
        // Удалите пользователя
        yield userModel_1.default.deleteOne({ email: 'testuser@example.com' });
        console.log('User deleted');
    }
    catch (err) {
        console.error('Database operation failed', err);
    }
    finally {
        yield mongoose_1.default.disconnect();
    }
});
testDatabase();
