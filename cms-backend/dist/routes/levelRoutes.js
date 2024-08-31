"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/levelRoutes.ts
const express_1 = __importDefault(require("express"));
const levelController_1 = require("../controllers/levelController");
const router = express_1.default.Router();
router.route('/')
    .get(levelController_1.getLevels)
    .post(levelController_1.addLevel); // Добавление уровня
router.route('/:id')
    .delete(levelController_1.deleteLevel) // Удаление уровня
    .put(levelController_1.updateLevel); // Обновление уровня
exports.default = router;
