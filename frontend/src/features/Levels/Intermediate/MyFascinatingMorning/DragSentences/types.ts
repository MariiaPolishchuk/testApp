export interface Sentence {
    id: string;
    text: string;
    correctWords: string[];
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (pageNumber: number) => void;
  }

