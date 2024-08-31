// export interface ListeningItem {
//   audioUrl: string;
//   sentence: string;
//   showQuestionAtSecond: number;
//   blanks: string[];
//   correctAnswers: string[];
// }

// export interface GrammarItem {
//   id: string;
//   text: string;
//   correctWord: string;
// }

// export interface WordItem {
//   id: string;
//   text: string;
// }

// export interface SynonymItem {
//   word: string;
//   synonym: string;
//   _id: string;
// }

// export interface TestItem {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// export interface Section {
//   reading: string;
//   vocabulary: any[];
//   grammar: GrammarItem[];
//   listening: ListeningItem[];
//   watchingVideo: string[];
//   readingQuestions: string[];
//   synonyms: SynonymItem[];
//   test?: TestItem[];
// }

// export interface Lesson {
//   _id?: string;
//   title: string;
//   titleImage: string;
//   description: string;
//   image: string;
//   level: string;
//   sections: Section;
// }

// export interface Level {
//   _id: string;
//   name: string;
//   description?: string;
//   lessons?: Lesson[];
// }

// export interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// interface WordsGame {
//   sentences: Sentence[];
// }

// interface Props {
//   game: WordsGame;
// }



export interface ListeningItem {
  audioUrl: string;
  sentence: string;
  showQuestionAtSecond: number;
  blanks: string[];
  correctAnswers: string[];
}

export interface GrammarItem {
  id: string;
  text: string;
  correctWord: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  sentence: string;
  options: string[];
  correctAnswer: string;
}

export interface WordItem {
  id: string;
  text: string;
}

export interface SynonymItem {
  word: string;
  synonym: string;
  _id: string;
}

export interface TestItem {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Section {
  reading: string;
  vocabulary: any[];
  grammar: GrammarItem[];
  grammarMultipleChoice: MultipleChoiceQuestion[]; // Новая секция с множественным выбором
  listening: ListeningItem[];
  watchingVideo: string[];
  readingQuestions: string[];
  synonyms: SynonymItem[];
  test?: TestItem[];
}

export interface Lesson {
  _id?: string;
  title: string;
  titleImage: string;
  description: string;
  image: string;
  level: string;
  sections: Section;
}

export interface Level {
  _id: string;
  name: string;
  description?: string;
  lessons?: Lesson[];
}

export interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

interface WordsGame {
  sentences: Sentence[];
}

interface Props {
  game: WordsGame;
}
