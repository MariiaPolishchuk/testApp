
import React, { useState } from 'react';
import GrammarInput from './GrammarInput/GrammarInput';
import GrammarMultipleChoice from './GrammarMultipleChoice/GrammarMultipleChoice';
import { GrammarItem } from '../../../../types/types';
import LessonPagination from '../../../LessonsComponents/UserLessonPagination/Pagination';

interface GrammarProps {
  sentences: GrammarItem[];
  multipleChoiceQuestions: {
    id: string;
    sentence: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const GrammarSection: React.FC<GrammarProps> = ({ sentences, multipleChoiceQuestions }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const sections = [];
  if (sentences.length > 0) sections.push('sentences');
  if (multipleChoiceQuestions.length > 0) sections.push('multipleChoiceQuestions');

  const totalPages = sections.length;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grammar-section">
      {sections.map((section, index) => (
        <div key={section} style={{ display: currentPage === index + 1 ? 'block' : 'none' }}>
          {section === 'sentences' && (
            <GrammarInput sentences={sentences} />
          )}
          {section === 'multipleChoiceQuestions' && (
            <GrammarMultipleChoice questions={multipleChoiceQuestions} />
          )}
        </div>
      ))}

      <LessonPagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        goToPage={goToPage} 
      />
    </div>
  );
};

export default GrammarSection;
