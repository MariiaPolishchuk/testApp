


// import { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import { Lesson } from '../models/lesson';

// export const addLesson = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { title, description, level, sections } = req.body;

//     if (!title || !description || !level || !sections) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     if (!mongoose.Types.ObjectId.isValid(level)) {
//       return res.status(400).json({ message: "Invalid level ID" });
//     }

//     const files = req.files as { [fieldname: string]: Express.Multer.File[] };

//     const imagePath = files?.image ? `/uploads/${files.image[0].filename}` : undefined;
//     const titleImagePath = files?.titleImage ? `/uploads/${files.titleImage[0].filename}` : undefined;

//     const newLesson = new Lesson({
//       title,
//       description,
//       level: new mongoose.Types.ObjectId(level),
//       sections: {
//         ...sections,
//         synonyms: Array.isArray(sections.synonyms) ? sections.synonyms : JSON.parse(sections.synonyms)
//       },
//       image: imagePath,
//       titleImage: titleImagePath,
//     });

//     await newLesson.save();

//     return res.status(201).json(newLesson);
//   } catch (error: any) {
//     console.error("Error adding lesson:", error);
//     return res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// export const updateLesson = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const { title, description, level, sections } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(level)) {
//       return res.status(400).json({ message: "Invalid level ID" });
//     }

//     const parsedSections = {
//       reading: sections.reading || "",
//       vocabulary: Array.isArray(sections.vocabulary) ? sections.vocabulary : JSON.parse(sections.vocabulary),
//       grammar: Array.isArray(sections.grammar) ? sections.grammar : JSON.parse(sections.grammar),
//       listening: Array.isArray(sections.listening) ? sections.listening : JSON.parse(sections.listening),
//       readingQuestions: Array.isArray(sections.readingQuestions) ? sections.readingQuestions : JSON.parse(sections.readingQuestions),
//       synonyms: Array.isArray(sections.synonyms) ? sections.synonyms : JSON.parse(sections.synonyms),
//     };

//     const files = req.files as { [fieldname: string]: Express.Multer.File[] };

//     const updatedData = {
//       title,
//       description,
//       level: new mongoose.Types.ObjectId(level),
//       sections: parsedSections,
//       image: files?.image ? `/uploads/${files.image[0].filename}` : req.body.image,
//       titleImage: files?.titleImage ? `/uploads/${files.titleImage[0].filename}` : req.body.titleImage,
//     };

//     const lesson = await Lesson.findByIdAndUpdate(req.params.id, updatedData, { new: true });
//     if (!lesson) {
//       return res.status(404).json({ message: "Lesson not found" });
//     }

//     return res.json(lesson);
//   } catch (error: any) {
//     console.error("Error updating lesson:", error);
//     return res.status(500).json({ message: "Server error", error: error.message });
//   }
// };



import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Lesson } from '../models/lesson';

export const addLesson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, description, level, sections } = req.body;

    if (!title || !description || !level || !sections) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!mongoose.Types.ObjectId.isValid(level)) {
      return res.status(400).json({ message: "Invalid level ID" });
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const imagePath = files?.image ? `/uploads/${files.image[0].filename}` : undefined;
    const titleImagePath = files?.titleImage ? `/uploads/${files.titleImage[0].filename}` : undefined;

    // Обработка синонимов, тестов и других полей, если они передаются в виде строки JSON
    const processedSections = {
      ...sections,
      vocabulary: Array.isArray(sections.vocabulary) ? sections.vocabulary : JSON.parse(sections.vocabulary || '[]'),
      grammar: Array.isArray(sections.grammar) ? sections.grammar : JSON.parse(sections.grammar || '[]'),
      grammarMultipleChoice: Array.isArray(sections.grammarMultipleChoice) ? sections.grammarMultipleChoice : JSON.parse(sections.grammarMultipleChoice || '[]'),
      listening: Array.isArray(sections.listening) ? sections.listening : JSON.parse(sections.listening || '[]'),
      synonyms: Array.isArray(sections.synonyms) ? sections.synonyms : JSON.parse(sections.synonyms || '[]'),
      test: Array.isArray(sections.test) ? sections.test : JSON.parse(sections.test || '[]'),
    };

    const newLesson = new Lesson({
      title,
      description,
      level: new mongoose.Types.ObjectId(level),
      sections: processedSections,
      image: imagePath,
      titleImage: titleImagePath,
    });

    await newLesson.save();

    return res.status(201).json(newLesson);
  } catch (error: any) {
    console.error("Error adding lesson:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const updateLesson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, description, level, sections } = req.body;

    if (!mongoose.Types.ObjectId.isValid(level)) {
      return res.status(400).json({ message: "Invalid level ID" });
    }

    // Обработка секций, включая новые поля, такие как grammarMultipleChoice
    const parsedSections = {
      reading: sections.reading || "",
      vocabulary: Array.isArray(sections.vocabulary) ? sections.vocabulary : JSON.parse(sections.vocabulary || '[]'),
      grammar: Array.isArray(sections.grammar) ? sections.grammar : JSON.parse(sections.grammar || '[]'),
      grammarMultipleChoice: Array.isArray(sections.grammarMultipleChoice) ? sections.grammarMultipleChoice : JSON.parse(sections.grammarMultipleChoice || '[]'),
      listening: Array.isArray(sections.listening) ? sections.listening : JSON.parse(sections.listening || '[]'),
      readingQuestions: Array.isArray(sections.readingQuestions) ? sections.readingQuestions : JSON.parse(sections.readingQuestions || '[]'),
      synonyms: Array.isArray(sections.synonyms) ? sections.synonyms : JSON.parse(sections.synonyms || '[]'),
      test: Array.isArray(sections.test) ? sections.test : JSON.parse(sections.test || '[]'),
    };

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const updatedData = {
      title,
      description,
      level: new mongoose.Types.ObjectId(level),
      sections: parsedSections,
      image: files?.image ? `/uploads/${files.image[0].filename}` : req.body.image,
      titleImage: files?.titleImage ? `/uploads/${files.titleImage[0].filename}` : req.body.titleImage,
    };

    const lesson = await Lesson.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    return res.json(lesson);
  } catch (error: any) {
    console.error("Error updating lesson:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};





export const getLessons = async (req: Request, res: Response): Promise<Response> => {
  try {
    const lessons = await Lesson.find();
    return res.json(lessons);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getLessonById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }
    return res.json(lesson);
  } catch (error) {
    console.error("Error fetching lesson:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteLesson = async (req: Request, res: Response): Promise<Response> => {
  try {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }
    return res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    console.error("Error deleting lesson:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getLessonsByLevel = async (req: Request, res: Response): Promise<Response> => {
  try {
    const levelId = req.params.levelId;
    const lessons = await Lesson.find({ level: levelId });

    if (!lessons.length) {
      return res.status(404).json({ message: "No lessons found for this level" });
    }

    return res.status(200).json(lessons);
  } catch (error) {
    console.error("Error fetching lessons by level:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
