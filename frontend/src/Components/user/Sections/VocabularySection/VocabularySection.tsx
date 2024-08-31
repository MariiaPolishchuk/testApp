
import React, { useState } from 'react';
import DragDropForm from '../../../CMS/AddLesson/Sections/VocabularySection/DragDrop/DragDropForm';
import Synonyms from './Synonyms/Synonyms';
import TestForm from './TestForm/TestForm'; // Импортируем компонент для теста
import LessonPagination from '../../../LessonsComponents/UserLessonPagination/Pagination';

interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

interface SynonymItem {
  word: string;
  synonym: string;
  _id: string;
}

interface TestItem {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface VocabularySectionProps {
  sentences: Sentence[];
  words: string[];
  synonyms?: SynonymItem[];
  test?: TestItem[]; // Добавляем тестовые вопросы как опциональный параметр
}

const VocabularySection: React.FC<VocabularySectionProps> = ({ sentences = [], words = [], synonyms = [], test = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const sections = [];
  if (sentences.length > 0) sections.push('sentences');
  if (synonyms.length > 0) sections.push('synonyms');
  if (test.length > 0) sections.push('test'); // Добавляем секцию для теста

  const totalPages = sections.length;

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="vocabulary-section">
      {sections.map((section, index) => (
        <div key={section} style={{ display: currentPage === index + 1 ? 'block' : 'none' }}>
          {section === 'sentences' && (
            <DragDropForm
              sentences={sentences}
              words={words}
              onWordMove={(word: any) => console.log(`Word moved: ${word}`)}
              resetGame={() => console.log('Game reset')}
              saveProgress={(answers: any) => console.log('Progress saved:', answers)}
            />
          )}
          {section === 'synonyms' && (
            <Synonyms synonyms={synonyms} />
          )}
          {section === 'test' && (
            <TestForm questionsAndAnswers={test} /> // Отображаем компонент с тестом
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

export default VocabularySection;


