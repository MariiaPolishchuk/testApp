import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

// Маршрут для загрузки файлов
export const uploadFiles = (req: Request, res: Response) => {
  const uploadMultiple = upload.fields([
    { name: 'titleImage', maxCount: 1 },
    { name: 'image', maxCount: 1 },
    { name: 'listeningAudio', maxCount: 5 },
  ]);

  uploadMultiple(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    const { image, titleImage, listeningAudio } = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    const imagePath = image ? `/uploads/${image[0].filename}` : undefined;
    const titleImagePath = titleImage ? `/uploads/${titleImage[0].filename}` : undefined;
    const audioPaths = listeningAudio ? listeningAudio.map(file => `/uploads/${file.filename}`) : undefined;

    res.status(200).json({ imagePath, titleImagePath, audioPaths });
  });
};





// import { Request, Response } from 'express';
// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../../uploads'));
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
//     cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
//   }
// });

// const upload = multer({ storage });

// export const uploadFiles = (req: Request, res: Response) => {
//   const uploadMultiple = upload.fields([
//     { name: 'titleImage', maxCount: 1 },
//     { name: 'image', maxCount: 1 },
//     { name: 'listeningAudio', maxCount: 5 },
//   ]);

//   uploadMultiple(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ message: err.message });
//     }

//     const { image, titleImage, listeningAudio } = req.files as {
//       [fieldname: string]: Express.Multer.File[];
//     };

//     const imagePath = image ? `/uploads/${image[0].filename}` : undefined;
//     const titleImagePath = titleImage ? `/uploads/${titleImage[0].filename}` : undefined;
//     const audioPaths = listeningAudio ? listeningAudio.map(file => `/uploads/${file.filename}`) : undefined;

//     res.status(200).json({ imagePath, titleImagePath, audioPaths });
//   });
// };
