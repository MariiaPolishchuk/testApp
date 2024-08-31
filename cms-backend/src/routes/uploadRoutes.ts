// import express from 'express';
// import upload from '../middlewares/upload';

// const router = express.Router();

// router.post('/', upload.fields([
//   { name: 'titleImage', maxCount: 1 },
//   { name: 'image', maxCount: 1 },
//   { name: 'listeningAudio', maxCount: 10 }
// ]), (req, res) => {
//   try {
//     const files = req.files as { [key: string]: Express.Multer.File[] | undefined };
//     const response: { [key: string]: string[] } = {};

//     if (files?.titleImage) {
//       response.titleImage = files.titleImage.map(file => `/uploads/${file.filename}`);
//     }
//     if (files?.image) {
//       response.image = files.image.map(file => `/uploads/${file.filename}`);
//     }
//     if (files?.listeningAudio) {
//       response.listeningAudio = files.listeningAudio.map(file => `/uploads/${file.filename}`);
//     }

//     res.status(200).json(response);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while uploading files.' });
//   }
// });

// export default router;




import express from 'express';
import upload from '../middlewares/upload';

const router = express.Router();

router.post('/', upload.fields([
  { name: 'titleImage', maxCount: 1 },
  { name: 'image', maxCount: 1 },
  { name: 'listeningAudio', maxCount: 10 }
]), (req, res) => {
  try {
    const files = req.files as { [key: string]: Express.Multer.File[] | undefined };
    const response: { [key: string]: string[] } = {};

    if (files?.titleImage) {
      response.titleImage = files.titleImage.map(file => `/uploads/${file.filename}`);
    }
    if (files?.image) {
      response.image = files.image.map(file => `/uploads/${file.filename}`);
    }
    if (files?.listeningAudio) {
      response.listeningAudio = files.listeningAudio.map(file => `/uploads/${file.filename}`);
    }

    res.status(200).json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while uploading files.' });
  }
});

export default router;
