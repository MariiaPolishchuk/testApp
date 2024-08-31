import React, { useState } from "react";
import PaginationItem from "../../shared/ui/Pagination/PaginationItem";

interface LessonPaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  basePath: string;
}

const LessonPagination: React.FC<LessonPaginationProps> = ({
  currentPage,
  totalPages,
  goToPage,
  basePath,
}) => {
  const [activePage, setActivePage] = useState(currentPage);
  
  const handlePageClick = (page: number) => {
    setActivePage(page);
    goToPage(page);
  };


  const getPageRoute = (page: number) => {
    return `${basePath}/page-${page}`;
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationItem
          key={page}
          page={page}
          isActive={activePage === page}
          onClick={() => handlePageClick(page)}
          route={getPageRoute(page)} 
        />
      ))}
    </div>
  );
};

export default LessonPagination;
