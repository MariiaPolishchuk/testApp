// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// const fileFilter = (req: any, file: any, cb: any) => {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Not an image! Please upload an image.'), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;

// import { Request, Response } from 'express';
// import multer from 'multer';
// import path from 'path';

// // Настройка хранилища для multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // Обработчик загрузки файлов
// export const uploadFile = (req: Request, res: Response) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   res.json({ filePath: `/uploads/${req.file.filename}` });
// };

// export default upload;
// upload.ts (middleware)
// upload.ts (middleware)



// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Убедитесь, что эта папка существует
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + '-' + file.originalname);
//   }
// });

// const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'audio/mpeg') {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type. Only JPEG, PNG, and MP3 files are allowed.'), false);
//   }
// };

// const upload = multer({ 
//   storage: storage, 
//   fileFilter: fileFilter 
// });

// export default upload;

import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Устанавливаем путь к папке `uploads` на уровне корневой директории проекта
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Настройка хранения файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});

// Фильтр файлов для ограничения типов
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (['image/jpeg', 'image/png', 'audio/mpeg'].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and MP3 files are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

export default upload;
