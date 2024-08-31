import express from 'express';
import { adminMiddleware } from '../middlewares/authMiddleware';
import { setAdmin } from '../controllers/adminController';

const router = express.Router();

// Маршрут для назначения роли администратора
router.post('/set-admin', adminMiddleware, setAdmin);

export default router;
