import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import lessonRoutes from './routes/lessonRoutes';
import levelRoutes from './routes/levelRoutes';
import uploadRoutes from './routes/uploadRoutes'; 
import connectDB from './config/db';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:5175',
//   credentials: true,
// }));
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Статическая маршрутизация для доступа к загруженным файлам
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


// Подключение к MongoDB
connectDB();

// Подключение маршрутов
app.use('/api/lessons', lessonRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/upload', uploadRoutes);  

// Запуск сервера
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
