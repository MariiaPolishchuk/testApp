// import { Router } from 'express';
// import { addLesson, getLessonsByLevel, getLessonById } from '../controllers/lessonController';
// import multer from 'multer';

// const router = Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/lessons', upload.single('image'), addLesson);
// router.get('/lessons', getLessonsByLevel);
// router.get('/lessons/:id', getLessonById);

// export default router;

// import express from 'express';
// import { addLesson, getLessonsByLevel, getLessonById, deleteLesson, updateLesson } from '../controllers/lessonController';
// import upload from '../middlewares/upload';

// const router = express.Router();

// router.post('/', upload.single('image'), addLesson);
// router.get('/level/:levelId', getLessonsByLevel);
// router.get('/:id', getLessonById);
// router.put('/:id', upload.single('image'), updateLesson);
// router.delete('/:id', deleteLesson);

// export default router;


// routes/lessonRoutes.ts
// routes/lessonRoutes.ts

// import express from 'express';
// import { addLesson, getLessonsByLevel, getLessonById, updateLesson, deleteLesson } from '../controllers/lessonController';
// import upload from '../middlewares/upload';

// const router = express.Router();

// router.post('/lessons', upload.single('image'), addLesson);
// router.get('/lessons/level/:levelId', getLessonsByLevel);
// router.get('/lessons/:id', getLessonById);
// router.put('/lessons/:id', upload.single('image'), updateLesson);
// router.delete('/lessons/:id', deleteLesson);

// export default router;


// import express from 'express';
// import { addLesson, getLessonsByLevel, getLessonById, updateLesson, deleteLesson } from '../controllers/lessonController';
// import upload from '../middlewares/upload';

// const router = express.Router();

// // Маршрут для добавления нового урока
// router.post('/', upload.single('image'), addLesson);

// // Маршрут для получения уроков по уровню
// router.get('/level/:levelId', getLessonsByLevel);

// // Маршрут для получения урока по ID
// router.get('/:id', getLessonById);

// // Маршрут для обновления урока
// router.put('/:id', upload.single('image'), updateLesson);

// // Маршрут для удаления урока
// router.delete('/:id', deleteLesson);

// export default router;
// import express from 'express';
// import { addLesson, getLessonsByLevel, getLessonById, updateLesson, deleteLesson } from '../controllers/lessonController';
// import upload from '../middlewares/upload';

// const router = express.Router();

// router.post('/lessons', upload.single('image'), addLesson);
// router.get('/lessons/level/:levelId', getLessonsByLevel);
// router.get('/lessons/:id', getLessonById);
// router.put('/lessons/:id', upload.single('image'), updateLesson);
// router.delete('/lessons/:id', deleteLesson);

// export default router;
// import express from 'express';
// import { addLesson, getLessons, getLessonById, updateLesson, deleteLesson } from '../controllers/lessonController';
// import { uploadFile } from '../middlewares/upload'; // Импортируем функцию загрузки файла
// import upload from '../middlewares/upload'; // Импортируем сам middleware

// const router = express.Router();

// router.post('/upload', upload.single('file'), uploadFile); // Используем middleware для загрузки

// router.route('/')
//   .post(addLesson)       // Добавление нового урока
//   .get(getLessons);      // Получение списка всех уроков

// router.route('/:id')
//   .get(getLessonById)    // Получение урока по ID
//   .put(updateLesson)     // Обновление урока
//   .delete(deleteLesson); // Удаление урока
  

// export default router;


// import express from 'express';
// import { 
//   addLesson, 
//   getLessons, 
//   getLessonById, 
//   updateLesson, 
//   deleteLesson, 
//   getLessonsByLevel 
// } from '../controllers/lessonController';
// import upload from '../middlewares/upload';

// const router = express.Router();

// // Загрузка файла
// router.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }
//   res.json({ filePath: `/uploads/${req.file.filename}` });
// });

// // Основные маршруты для работы с уроками
// router.route('/lessons')
//   .post(upload.single('image'), addLesson)       // Добавление нового урока с изображением
//   .get(getLessons);                              // Получение всех уроков

// router.route('/lessons/:id')
//   .get(getLessonById)                            // Получение урока по ID
//   .put(upload.single('image'), updateLesson)     // Обновление урока с изображением
//   .delete(deleteLesson);                         // Удаление урока

// // Получение уроков по уровню
// router.get('/levels/:levelId/lessons', getLessonsByLevel);

// export default router;





// import express from 'express';
// import { 
//   addLesson, 
//   getLessons, 
//   getLessonById, 
//   updateLesson, 
//   deleteLesson 
// } from '../controllers/lessonController';
// import upload from '../middlewares/upload';

// const router = express.Router();

// // Загрузка файла
// router.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }
//   res.json({ filePath: `/uploads/${req.file.filename}` });
// });

// // Основные маршруты для работы с уроками
// router.route('/')
//   .post(upload.single('image'), addLesson)       // Добавление нового урока с изображением
//   .get(getLessons);                              // Получение всех уроков

// router.route('/:id')
//   .get(getLessonById)                            // Получение урока по ID
//   .put(upload.single('image'), updateLesson)     // Обновление урока с изображением
//   .delete(deleteLesson);                         // Удаление урока

// export default router;


import express from 'express';
import { 
  addLesson, 
  getLessons, 
  getLessonById, 
  updateLesson, 
  deleteLesson, 
  getLessonsByLevel 
} from '../controllers/lessonController';
import upload from '../middlewares/upload';

const router = express.Router();

router.route('/')
  .post(upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'titleImage', maxCount: 1 },
    { name: 'listeningAudio', maxCount: 1 }
  ]), addLesson)       // Добавление нового урока с файлами
  .get(getLessons);     // Получение всех уроков

router.route('/:id')
  .get(getLessonById)   // Получение урока по ID
  .put(upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'titleImage', maxCount: 1 },
    { name: 'listeningAudio', maxCount: 1 }
  ]), updateLesson)     // Обновление урока с файлами
  .delete(deleteLesson); // Удаление урока

// Маршрут для получения уроков по уровню
router.get('/level/:levelId/lessons', getLessonsByLevel);

export default router;
