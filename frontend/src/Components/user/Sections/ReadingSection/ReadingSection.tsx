import React from "react";
import parse, { DOMNode, Element } from 'html-react-parser';
import CustomTooltip from "../../../CMS/AddLesson/Sections/ReadingSection/CustomTooltip";
import ReadingQuestions from './ReadingQuestions';
import './css/style.css';

interface ReadingTextProps {
  text: string;
  questions: string[];
}

const ReadingText: React.FC<ReadingTextProps> = ({ text, questions }) => {
  const parsedText = parse(text, {
    replace: (domNode: DOMNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs['data-tooltip']
      ) {
        const tooltipText = domNode.attribs['data-tooltip'];
        const childText = domNode.children
          .map(child => ('data' in child ? child.data : ''))
          .join('');

        return (
          <CustomTooltip title={tooltipText}>
            <span>{childText}</span>
          </CustomTooltip>
        );
      }
    }
  });

  return (
    <div className="reading-text-container">
       <h4 className="reading-task">
        Task. Read the text carefully, pay attention to the highlighted words.
        Tick the button to answer the questions.
      </h4>
      <div className="reading-container">
      <div className="parsed-text">{parsedText}</div>
      <ReadingQuestions questions={questions} />
    </div>
      </div>
      
  );
};

export default ReadingText;


