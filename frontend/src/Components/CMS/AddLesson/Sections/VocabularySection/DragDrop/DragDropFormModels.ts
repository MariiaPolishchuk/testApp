export interface Sentence {
    synonyms: boolean;
    id: string;
    text: string;
    correctWords: string[];
  }
  
  export interface WordsGame {
    sentences: Sentence[];
    words: string[];
  }
  
  export interface UserAnswer {
    text: string;
    correct: boolean | null;
  }
  
  export interface DragDropFormProps extends WordsGame {
    onWordMove: (word: string) => void;
    resetGame: () => void;
  }
  