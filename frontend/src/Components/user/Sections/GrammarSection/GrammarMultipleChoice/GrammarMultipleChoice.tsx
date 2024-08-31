// import React, { useState } from "react";
// import { Box, Button, Typography } from "@mui/material";
// import "./GrammarMultipleChoice.css";

// interface GrammarMultipleChoiceProps {
//   questions: {
//     id: string;
//     sentence: string;
//     options: string[];
//     correctAnswer: string;
//   }[];
// }

// const GrammarMultipleChoice: React.FC<GrammarMultipleChoiceProps> = ({
//   questions,
// }) => {
//   const [selectedAnswers, setSelectedAnswers] = useState<{
//     [key: string]: string;
//   }>({});
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showCorrectAnswers, setShowCorrectAnswers] = useState<boolean>(false);
//   const [checked, setChecked] = useState<boolean>(false);

//   const handleAnswerSelect = (questionId: string, answer: string) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionId]: answer,
//     });
//   };

//   const handleCheckAnswers = () => {
//     setChecked(true);
//     setShowCorrectAnswers(false);
//   };

//   const handleReset = () => {
//     setSelectedAnswers({});
//     setShowCorrectAnswers(false);
//     setChecked(false);
//   };

//   const handleShowCorrectAnswers = () => {
//     const correctAnswersMap = questions.reduce(
//       (acc: { [key: string]: string }, question) => {
//         acc[question.id] = question.correctAnswer;
//         return acc;
//       },
//       {}
//     );
//     setSelectedAnswers(correctAnswersMap);
//     setShowCorrectAnswers(true);
//     setChecked(false);
//   };

//   const totalPages = questions.length;

//   return (
//     <Box className="grammar-container">
//       <Typography variant="h4" className="task-title">
//         Task. Tick the correct answer.
//       </Typography>
//       <Typography variant="body1" className="task-description">
//         Read each sentence carefully and choose the correct word from the options provided. The selected word should correctly complete the sentence. If you are unsure, you can check your answer by clicking the "Check" button. After checking, the correct answer will be highlighted in green, and any incorrect answers will be marked in red with the correct answer displayed next to them.
//       </Typography>

//       {questions.slice(currentPage - 1, currentPage).map((question) => {
//         const selectedAnswer = selectedAnswers[question.id];
//         const isCorrect = selectedAnswer === question.correctAnswer;

//         return (
//           <Box key={question.id} className="question-container">
//             <Typography variant="h6" className="question-sentence">
//               {question.sentence.split("______")[0]}
//               <span
//                 className={`blank ${
//                   checked && !isCorrect
//                     ? "incorrect-answer"
//                     : selectedAnswer
//                     ? "correct-answer"
//                     : "empty"
//                 }`}
//               >
//                 {selectedAnswer || "______"}
//               </span>
//               {checked && !isCorrect && (
//                 <span className="correct-answer-hint">
//                   {question.correctAnswer}
//                 </span>
//               )}
//               {question.sentence.split("______")[1]}
//             </Typography>
//             <Box className="options-container">
//               {question.options.map((option) => (
//                 <Button
//                   key={option}
//                   variant={selectedAnswer === option ? "contained" : "outlined"}
//                   onClick={() => handleAnswerSelect(question.id, option)}
//                   className="option-button"
//                 >
//                   {option}
//                 </Button>
//               ))}
//             </Box>
//           </Box>
//         );
//       })}

//       <Box className="choose-buttons">
//         <Button variant="contained" onClick={handleCheckAnswers}>
//           Check
//         </Button>
//         <Button variant="contained" onClick={handleReset}>
//           Reset
//         </Button>
//         <Button variant="contained" onClick={handleShowCorrectAnswers}>
//           Show Correct Answers
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default GrammarMultipleChoice;

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./GrammarMultipleChoice.css";

interface GrammarMultipleChoiceProps {
  questions: {
    id: string;
    sentence: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const GrammarMultipleChoice: React.FC<GrammarMultipleChoiceProps> = ({
  questions,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const handleCheckAnswers = () => {
    setChecked(true);
    setShowCorrectAnswers(false);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowCorrectAnswers(false);
    setChecked(false);
  };

  const handleShowCorrectAnswers = () => {
    const correctAnswersMap = questions.reduce(
      (acc: { [key: string]: string }, question) => {
        acc[question.id] = question.correctAnswer;
        return acc;
      },
      {}
    );
    setSelectedAnswers(correctAnswersMap);
    setShowCorrectAnswers(true);
    setChecked(false);
  };

  const totalPages = questions.length;

  return (
    <Box className="grammar-container">
      <div className="block-name">
        <h4 className="task-title">Task. Tick the correct answer.</h4>
        <h5 className="task-description">
          Read each sentence carefully and choose the correct word from the
          options provided. The selected word should correctly complete the
          sentence. If you are unsure, you can check your answer by clicking the
          "Check" button. After checking, the correct answer will be highlighted
          in green, and any incorrect answers will be marked in red with the
          correct answer displayed next to them.
        </h5>
      </div>

      {questions.slice(currentPage - 1, currentPage).map((question) => {
        const selectedAnswer = selectedAnswers[question.id];
        const isCorrect = selectedAnswer === question.correctAnswer;

        return (
          <Box key={question.id} className="question-container">
            <Typography variant="h6" className="question-sentence">
              {question.sentence.split("______")[0]}
              <span
                className={`blank ${
                  checked && !isCorrect
                    ? "incorrect-answer"
                    : selectedAnswer
                    ? "correct-answer"
                    : "empty"
                }`}
              >
                {selectedAnswer || "______"}
              </span>
              {checked && !isCorrect && (
                <span className="correct-answer-hint">
                  {question.correctAnswer}
                </span>
              )}
              {question.sentence.split("______")[1]}
            </Typography>
            <Box className="options-container">
              {question.options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleAnswerSelect(question.id, option)}
                  className={`option-button ${
                    selectedAnswer === option ? "selected" : ""
                  }`}
                >
                  {option}
                </div>
              ))}
            </Box>
          </Box>
        );
      })}

      <Box className="choose-buttons">
        <Button variant="contained" onClick={handleCheckAnswers}>
          Check
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" onClick={handleShowCorrectAnswers}>
          Show Correct Answers
        </Button>
      </Box>
    </Box>
  );
};

export default GrammarMultipleChoice;
