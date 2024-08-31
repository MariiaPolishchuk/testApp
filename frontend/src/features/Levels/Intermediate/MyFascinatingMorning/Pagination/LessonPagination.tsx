import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PaginationItem from "../../../../../shared/ui/Pagination/PaginationItem"
import { getPageRoute } from "./utils";
import "../../../../../styles/Pagination.css";

interface LessonPaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

const LessonPagination: React.FC<LessonPaginationProps> = ({
  currentPage,
  totalPages,
  goToPage,
}) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(currentPage);
  const handlePageClick = (page: number) => {
    setActivePage(page);
    goToPage(page);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationItem
          key={page}
          page={page}
          isActive={activePage === page}
          onClick={() => handlePageClick(page)} 
          route={`/course/intermediate/my-fascinating-morning/lesson/test/${getPageRoute(
            page
          )}`}
        />
      ))}
    </div>
  );
};

export default LessonPagination;
