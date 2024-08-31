
// import mongoose, { Schema, Document } from 'mongoose';

// interface ListeningItem {
//   audioUrl: string;
//   sentence: string;
//   showQuestionAtSecond: number;
//   blanks: string[];
//   correctAnswers: string[];
// }

// interface VocabularyItem {
//   text: string;
//   correctWords: string[];
// }

// interface GrammarItem {
//   id: string;
//   text: string;
//   correctWord: string;
// }

// interface SynonymItem {
//   id: string;
//   text: string;
// }

// interface Section {
//   reading?: string;
//   vocabulary?: VocabularyItem[];
//   grammar?: GrammarItem[];
//   listening?: ListeningItem[];
//   watchingVideo?: string[];
//   readingQuestions?: string[];
//   synonyms?: SynonymItem[];
// }

// export interface Lesson extends Document {
//   title: string;
//   titleImage?: string;
//   description?: string;
//   image?: string;
//   level: mongoose.Schema.Types.ObjectId;
//   sections: Section;
// }

// const LessonSchema: Schema = new Schema({
//   title: { type: String, required: true },
//   titleImage: { type: String, required: false },
//   description: { type: String, required: false },
//   image: { type: String, required: false },
//   level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
//   sections: {
//     reading: { type: String, required: false },
//     vocabulary: [{
//       text: { type: String, required: true },
//       correctWords: [{ type: String, required: true }],
//     }],
//     grammar: [{
//       id: { type: String, required: true },
//       text: { type: String, required: true },
//       correctWord: { type: String, required: true },
//     }],
//     listening: [{
//       audioUrl: { type: String, required: true },
//       sentence: { type: String, required: true },
//       showQuestionAtSecond: { type: Number, required: true },
//       blanks: [{ type: String, required: true }],
//       correctAnswers: [{ type: String, required: true }],
//     }],
//     watchingVideo: [{ type: String, required: false }],
//     readingQuestions: [{ type: String, required: false }],
//     synonyms: [{ 
//       id: { type: String, required: true },
//       text: { type: String, required: true },
//     }]
//   },
// });

// export const Lesson = mongoose.model<Lesson>('Lesson', LessonSchema);


// import mongoose, { Schema, Document } from 'mongoose';

// interface ListeningItem {
//   audioUrl: string;
//   sentence: string;
//   showQuestionAtSecond: number;
//   blanks: string[];
//   correctAnswers: string[];
// }

// interface VocabularyItem {
//   text: string;
//   correctWords: string[];
// }

// interface GrammarItem {
//   id: string;
//   text: string;
//   correctWord: string;
// }

// interface SynonymItem {
//   id: string;
//   word: string;
//   synonym: string;
// }

// interface TestItem {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// interface Section {
//   reading?: string;
//   vocabulary?: VocabularyItem[];
//   grammar?: GrammarItem[];
//   listening?: ListeningItem[];
//   watchingVideo?: string[];
//   readingQuestions?: string[];
//   synonyms?: SynonymItem[];
//   test?: TestItem[]; 
// }

// export interface Lesson extends Document {
//   title: string;
//   titleImage?: string;
//   description?: string;
//   image?: string;
//   level: mongoose.Schema.Types.ObjectId;
//   sections: Section;
// }

// const LessonSchema: Schema = new Schema({
//   title: { type: String, required: true },
//   titleImage: { type: String, required: false },
//   description: { type: String, required: false },
//   image: { type: String, required: false },
//   level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
//   sections: {
//     reading: { type: String, required: false },
//     vocabulary: [{
//       text: { type: String, required: true },
//       correctWords: [{ type: String, required: true }],
//     }],
//     grammar: [{
//       id: { type: String, required: true },
//       text: { type: String, required: true },
//       correctWord: { type: String, required: true },
//     }],
//     listening: [{
//       audioUrl: { type: String, required: true },
//       sentence: { type: String, required: true },
//       showQuestionAtSecond: { type: Number, required: true },
//       blanks: [{ type: String, required: true }],
//       correctAnswers: [{ type: String, required: true }],
//     }],
//     watchingVideo: [{ type: String, required: false }],
//     readingQuestions: [{ type: String, required: false }],
//     synonyms: [{ 
//       id: { type: String, required: true },
//       word: { type: String, required: true },
//       synonym: { type: String, required: true },
//     }],
//     test: [{ 
//       question: { type: String, required: true },
//       options: [{ type: String, required: true }],
//       correctAnswer: { type: String, required: true },
//     }]
//   },
// });

// export const Lesson = mongoose.model<Lesson>('Lesson', LessonSchema);



import mongoose, { Schema, Document } from 'mongoose';

interface ListeningItem {
  audioUrl: string;
  sentence: string;
  showQuestionAtSecond: number;
  blanks: string[];
  correctAnswers: string[];
}

interface VocabularyItem {
  text: string;
  correctWords: string[];
}

interface GrammarItem {
  id: string;
  text: string;
  correctWord: string;
}

interface GrammarMultipleChoiceItem {
  id: string;
  sentence: string;
  options: string[];
  correctAnswer: string;
}

interface SynonymItem {
  id: string;
  word: string;
  synonym: string;
}

interface TestItem {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Section {
  reading?: string;
  vocabulary?: VocabularyItem[];
  grammar?: GrammarItem[];
  grammarMultipleChoice?: GrammarMultipleChoiceItem[];  // Добавлено поле для GrammarMultipleChoice
  listening?: ListeningItem[];
  watchingVideo?: string[];
  readingQuestions?: string[];
  synonyms?: SynonymItem[];
  test?: TestItem[];
}

export interface Lesson extends Document {
  title: string;
  titleImage?: string;
  description?: string;
  image?: string;
  level: mongoose.Schema.Types.ObjectId;
  sections: Section;
}

const LessonSchema: Schema = new Schema({
  title: { type: String, required: true },
  titleImage: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
  sections: {
    reading: { type: String, required: false },
    vocabulary: [{
      text: { type: String, required: true },
      correctWords: [{ type: String, required: true }],
    }],
    grammar: [{
      id: { type: String, required: true },
      text: { type: String, required: true },
      correctWord: { type: String, required: true },
    }],
    grammarMultipleChoice: [{  // Новое поле для GrammarMultipleChoice
      id: { type: String, required: true },
      sentence: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    }],
    listening: [{
      audioUrl: { type: String, required: true },
      sentence: { type: String, required: true },
      showQuestionAtSecond: { type: Number, required: true },
      blanks: [{ type: String, required: true }],
      correctAnswers: [{ type: String, required: true }],
    }],
    watchingVideo: [{ type: String, required: false }],
    readingQuestions: [{ type: String, required: false }],
    synonyms: [{ 
      id: { type: String, required: true },
      word: { type: String, required: true },
      synonym: { type: String, required: true },
    }],
    test: [{ 
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: String, required: true },
    }]
  },
});

export const Lesson = mongoose.model<Lesson>('Lesson', LessonSchema);
