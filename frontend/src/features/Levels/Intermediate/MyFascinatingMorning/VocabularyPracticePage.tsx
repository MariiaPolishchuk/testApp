import React, { useState } from "react";
import DragDropForm from "../../../DragDropForm/DragDropForm";
import LessonPagination from "./Pagination/LessonPagination";
import { initialWordsData } from "./VocabularyTextDrag/initialWordsData";
import { sentencesData } from "./VocabularyTextDrag/sentencesData";

const VocabularyPracticePage: React.FC = () => {
  const [wordsData, setWordsData] = useState<string[]>(initialWordsData);
  const [, setResetFlag] = useState<boolean>(false);

  const handleWordMove = (word: string) => {
    setWordsData((prevWords) => prevWords.filter((w) => w !== word));
  };

  const resetGame = () => {
    setResetFlag(true);
  };
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 4;

  function combineSentencesIntoParagraph(
    sentenceId1: string,
    sentenceId2: string
  ): string | undefined {
    const sentence1 = sentencesData.find(
      (sentence) => sentence.id === sentenceId1
    );
    const sentence2 = sentencesData.find(
      (sentence) => sentence.id === sentenceId2
    );

    if (sentence1 && sentence2) {
      return `${sentence1.text}\n${sentence2.text}\n`;
    } else {
      console.error("One or both sentences not found.");
      return undefined;
    }
  }

  const paragraph = combineSentencesIntoParagraph("sentence1", "sentence2");
  if (paragraph !== undefined) {
    console.log(paragraph);
  }

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="pagination-cont">
        <LessonPagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </div>
      <DragDropForm
        sentences={sentencesData}
        words={wordsData}
        onWordMove={handleWordMove}
        resetGame={resetGame}
      />
      <div className="choose-buttons"></div>
      <div className="pagination-cont">
        <LessonPagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </div>
    </div>
  );
};

export default VocabularyPracticePage;
