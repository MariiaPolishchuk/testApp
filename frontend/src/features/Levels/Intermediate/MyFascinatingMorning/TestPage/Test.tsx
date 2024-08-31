import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TestForm from "../../../../TestForm/TestForm";
import Sticker from "../../../../TooltipTest/TooltipTest";
import terms from "../TermListData";
import LessonPagination from "../Pagination/LessonPagination";
import  questionsAndAnswers  from './questionsAndAnswersData';

const Test: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(parseInt(page || "1"));

  const totalPages = 4;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const path = `/course/intermediate/my-fascinating-morning/lesson/test/${pageNumber}`;
    navigate(path);
  };

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(parseInt(window.location.pathname.split("/").pop() || "1"));
  }, []);

  return (
    <div>
       <div className="pagination-cont">
          <LessonPagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      <div className="lesson-block fade-in">
        <div className="sticker-container">
          <Sticker terms={terms} />
        </div>
        <div className="blocks block">
          <TestForm questionsAndAnswers={questionsAndAnswers} />
          <LessonPagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
