import React, { useState } from "react";
import DragDropForm from "../../../../DragDropForm/DragDropForm";
import LessonPagination from "../Pagination/LessonPagination";
import { initialWordsData, sentencesData } from "./data";

const DragDropMFM: React.FC = () => {
  const [wordsData, setWordsData] = useState<string[]>(initialWordsData);
  const [resetFlag, setResetFlag] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 4;

  const handleWordMove = (word: string) => {
    setWordsData((prevWords) => prevWords.filter((w) => w !== word));
  };

  const resetGame = () => {
    setResetFlag(true);
  };

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
      <LessonPagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
};

export default DragDropMFM;
