import React from 'react';
import './style.css';

interface LessonPaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
}

const LessonPagination: React.FC<LessonPaginationProps> = ({ currentPage, totalPages, goToPage }) => {
  return (
    <div className="lesson-pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? 'active' : ''}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default LessonPagination;


