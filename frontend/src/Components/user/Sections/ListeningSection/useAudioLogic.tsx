
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Button, Box, Modal } from "@material-ui/core";
// import styled from "styled-components";
// import { AudioQuestion } from "./AudioQuestion";
// import './style.css';

// const CustomTextField = styled.input`
//   border: 1px solid #ccc;
//   padding: 8px 10px;
//   font-size: 16px;
//   border-radius: 4px;
//   transition: width 0.2s ease;
//   width: 50px; /* Начальная минимальная ширина */

//   &:focus {
//     outline: none;
//     border-color: #007bff;
//     box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
//   }

//   &.correct {
//     border-color: #28a745;
//     background-color: #d4edda;
//     color: #155724;
//   }

//   &.incorrect {
//     border-color: #dc3545;
//     background-color: #f8d7da;
//     color: #721c24;
//   }

//   &::placeholder {
//     color: #888;
//     opacity: 0.8;
//   }
// `;

// export const useAudioLogic = (audioFile: string, questions: AudioQuestion[]) => {
//   const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));

//   const [audioQuestionObj, setAudioQuestionObj] = useState<AudioQuestion | null>(null);
//   const [audioAnswerChecked, setAudioAnswerChecked] = useState<boolean>(false);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);

//   const handleTimeUpdate = useCallback(() => {
//     const currentTime = Math.floor(audioRef.current.currentTime);

//     if (audioAnswerChecked || audioQuestionObj) {
//       return;
//     }

//     if (currentTime === 0) {
//       setAudioAnswerChecked(false);
//       setAudioQuestionObj(null);
//     }

//     const questionObj = findQuestionToShow(currentTime, questions);

//     if (questionObj) {
//       handleQuestionDisplay(questionObj);
//     }

//     if (!audioQuestionObj && currentTime >= audioRef.current.duration) {
//       handleAudioRestart();
//     }
//   }, [audioAnswerChecked, audioQuestionObj, questions]);

//   useEffect(() => {
//     const timeUpdateHandler = () => handleTimeUpdate();
//     const audioElement = audioRef.current;

//     if (audioElement) {
//       audioElement.addEventListener("timeupdate", timeUpdateHandler);
//     }

//     return () => {
//       if (audioElement) {
//         audioElement.removeEventListener("timeupdate", timeUpdateHandler);
//       }
//     };
//   }, [handleTimeUpdate]);

//   const handleAnswerChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>, blank: string) => {
//       const inputField = e.target;
//       inputField.style.width = "auto";
//       inputField.style.width = `${Math.max(inputField.scrollWidth, 50)}px`; // Динамическое изменение ширины, начиная с минимальной ширины
//     },
//     []
//   );

//   const displayResults = useCallback(
//     (message: string, resultClass: string, correctAnswer?: string) => {
//       showResultMessage(message, resultClass, correctAnswer);
//       resetAndPlayAudio();
//     },
//     []
//   );

//   const checkAnswers = useCallback(
//     (question: AudioQuestion) => {
//       const { correct, correctAnswerMessage } = checkUserAnswers(question);
//       displayResults(
//         correct ? "✓" : "✗",
//         correct ? "audio-correct" : "audio-incorrect",
//         correctAnswerMessage
//       );
//     },
//     [displayResults]
//   );

//   const handleAnswerSubmit = useCallback(() => {
//     if (!audioAnswerChecked || !audioQuestionObj) {
//       console.error(
//         "Answer check failed: audioAnswerChecked - false or audioQuestionObj - null"
//       );
//       return;
//     }

//     setAudioAnswerChecked(false);
//     setModalOpen(false);
//     if (audioQuestionObj) checkAnswers(audioQuestionObj);
//   }, [audioAnswerChecked, audioQuestionObj, checkAnswers]);

//   const renderAudio = () => (
//     <audio id="audioPlayer" controls ref={audioRef}>
//       <source src={audioFile} type="audio/mp3" />
//       Your browser does not support the audio element.
//     </audio>
//   );

//   const renderModal = () => (
//     <Modal
//       className="modal-container fade-in-fast"
//       open={modalOpen}
//       onClose={() => setModalOpen(false)}
//     >
//       <div className="modal-content">
//         {audioQuestionObj && (
//           <Box className="modal-body audio-questions" id="question">
//             {audioQuestionObj.sentence
//               .split("______")
//               .map((part, index) => (
//                 <React.Fragment key={index}>
//                   {part}
//                   {index < audioQuestionObj.blanks.length && (
//                     <CustomTextField
//                       key={audioQuestionObj.blanks[index]}
//                       id={audioQuestionObj.blanks[index]}
//                       className="userInput"
//                       onChange={(e) =>
//                         handleAnswerChange(
//                           e,
//                           audioQuestionObj.blanks[index]
//                         )
//                       }
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//           </Box>
//         )}
// <div className="choose-buttons">
// <Button
//           className="button"
//           variant="contained"
//           id="checkAnswersBtnAudio"
//           onClick={handleAnswerSubmit}
//         >
//           Submit Answer
//         </Button>
// </div>
       
//       </div>
//     </Modal>
//   );
  
//   return { audioQuestionObj, modalOpen, handleAnswerSubmit, handleAnswerChange, renderAudio, renderModal };

//   function findQuestionToShow(currentTime: number, questions: AudioQuestion[]) {
//     return questions.find(
//       (q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1
//     );
//   }

//   function handleQuestionDisplay(questionObj: AudioQuestion) {
//     console.log("Displaying question");
//     audioRef.current.pause();
//     setAudioQuestionObj(questionObj);
//     setAudioAnswerChecked(true);
//     setModalOpen(true);
//   }

//   function handleAudioRestart() {
//     console.log("Restarting audio");
//     audioRef.current.currentTime = 0;
//     audioRef.current.play();
//     setAudioAnswerChecked(false);
//   }

//   function showResultMessage(message: string, resultClass: string, correctAnswer?: string) {
//     const audioResultsElement = document.getElementById("audioResults");

//     if (!audioResultsElement) {
//         console.error('Element with id "audioResults" not found.');
//         return;
//     }

//     audioResultsElement.innerHTML = "";

//     const messageElement = document.createElement("p");
//     messageElement.className = resultClass;

//     const icon = document.createElement("span");
//     icon.textContent = message; // Галочка или крестик
//     icon.className = resultClass === "audio-correct" ? "audio-correct" : "audio-incorrect";
//     messageElement.appendChild(icon);

//     if (correctAnswer) {
//         const correctAnswerElement = document.createElement("span");
//         correctAnswerElement.textContent = " " + correctAnswer;
//         correctAnswerElement.classList.add("audio-correct-answer");
//         messageElement.appendChild(correctAnswerElement);
//     }

//     audioResultsElement.appendChild(messageElement);
// }


//   function resetAndPlayAudio() {
//     setTimeout(() => {
//       setAudioQuestionObj(null);
//       audioRef.current.currentTime += 1;
//       audioRef.current.play();

//       const audioResultsElement = document.getElementById("audioResults");
//       if (audioResultsElement) {
//         audioResultsElement.innerHTML = "";
//       }
//     }, 3000);
//   }

//   function checkUserAnswers(question: AudioQuestion) {
//     let correct = true;
//     const correctAnswers: string[] = [];

//     question.blanks.forEach((blank) => {
//       const blankElement = document.getElementById(blank);

//       if (!blankElement) {
//         console.error(`Element with id ${blank} not found.`);
//         return;
//       }

//       const userInput = (blankElement as HTMLInputElement).value.trim();
//       const currentCorrectAnswer =
//         question.answers[question.blanks.indexOf(blank)];

//       if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
//         correct = false;
//         blankElement.classList.add("audio-incorrect");
//         if (!correctAnswers.includes(currentCorrectAnswer)) {
//           correctAnswers.push(currentCorrectAnswer);
//         }
//       } else {
//         blankElement.classList.remove("audio-incorrect");
//         blankElement.classList.add("audio-correct");
//       }
//     });

//     const correctAnswerMessage = correctAnswers.join(", ");

//     return { correct, correctAnswerMessage };
//   }
// };



// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Button, Box, Modal } from "@material-ui/core";
// import styled from "styled-components";
// import { AudioQuestion } from "./AudioQuestion";
// import './style.css';

// const CustomTextField = styled.input`
//   border: 1px solid #ccc;
//   padding: 8px 10px;
//   font-size: 16px;
//   border-radius: 4px;
//   transition: width 0.2s ease;
//   width: 50px; /* Начальная минимальная ширина */

//   &:focus {
//     outline: none;
//     border-color: #007bff;
//     box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
//   }

//   &.correct {
//     border-color: #28a745;
//     background-color: #d4edda;
//     color: #155724;
//   }

//   &.incorrect {
//     border-color: #dc3545;
//     background-color: #f8d7da;
//     color: #721c24;
//   }

//   &::placeholder {
//     color: #888;
//     opacity: 0.8;
//   }
// `;

// export const useAudioLogic = (audioFile: string, questions: AudioQuestion[]) => {
//   const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));

//   const [audioQuestionObj, setAudioQuestionObj] = useState<AudioQuestion | null>(null);
//   const [audioAnswerChecked, setAudioAnswerChecked] = useState<boolean>(false);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [results, setResults] = useState<{ userAnswer: string; correctAnswer: string; correct: boolean }[]>([]);

//   const handleTimeUpdate = useCallback(() => {
//     const currentTime = Math.floor(audioRef.current.currentTime);

//     if (audioAnswerChecked || audioQuestionObj) {
//       return;
//     }

//     if (currentTime === 0) {
//       setAudioAnswerChecked(false);
//       setAudioQuestionObj(null);
//     }

//     const questionObj = findQuestionToShow(currentTime, questions);

//     if (questionObj) {
//       handleQuestionDisplay(questionObj);
//     }

//     if (!audioQuestionObj && currentTime >= audioRef.current.duration) {
//       handleAudioRestart();
//     }
//   }, [audioAnswerChecked, audioQuestionObj, questions]);

//   useEffect(() => {
//     const timeUpdateHandler = () => handleTimeUpdate();
//     const audioElement = audioRef.current;

//     if (audioElement) {
//       audioElement.addEventListener("timeupdate", timeUpdateHandler);
//     }

//     return () => {
//       if (audioElement) {
//         audioElement.removeEventListener("timeupdate", timeUpdateHandler);
//       }
//     };
//   }, [handleTimeUpdate]);

//   const handleAnswerChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>, blank: string) => {
//       const inputField = e.target;
//       inputField.style.width = "auto";
//       inputField.style.width = `${Math.max(inputField.scrollWidth, 50)}px`; // Динамическое изменение ширины, начиная с минимальной ширины
//     },
//     []
//   );

//   const checkAnswers = useCallback(
//     (question: AudioQuestion) => {
//       const results = question.blanks.map((blank, index) => {
//         const blankElement = document.getElementById(blank) as HTMLInputElement;
//         const userAnswer = blankElement.value.trim();
//         const correctAnswer = question.answers[index];

//         return {
//           userAnswer,
//           correctAnswer,
//           correct: userAnswer.toLowerCase() === correctAnswer.toLowerCase(),
//         };
//       });

//       setResults(results);
//       setAudioAnswerChecked(false);
//       setModalOpen(false);
//     },
//     []
//   );

//   const handleAnswerSubmit = useCallback(() => {
//     if (!audioAnswerChecked || !audioQuestionObj) {
//       console.error("Answer check failed: audioAnswerChecked - false or audioQuestionObj - null");
//       return;
//     }

//     if (audioQuestionObj) checkAnswers(audioQuestionObj);
//   }, [audioAnswerChecked, audioQuestionObj, checkAnswers]);

//   const renderAudio = () => (
//     <audio id="audioPlayer" controls ref={audioRef}>
//       <source src={audioFile} type="audio/mp3" />
//       Your browser does not support the audio element.
//     </audio>
//   );

//   const renderModal = () => (
//     <Modal
//       className="modal-container fade-in-fast"
//       open={modalOpen}
//       onClose={() => setModalOpen(false)}
//     >
//       <div className="modal-content">
//         {audioQuestionObj && (
//           <Box className="modal-body audio-questions" id="question">
//             {audioQuestionObj.sentence.split("______").map((part, index) => (
//               <React.Fragment key={index}>
//                 {part}
//                 {index < audioQuestionObj.blanks.length && (
//                   <CustomTextField
//                     key={audioQuestionObj.blanks[index]}
//                     id={audioQuestionObj.blanks[index]}
//                     className="userInput"
//                     onChange={(e) => handleAnswerChange(e, audioQuestionObj.blanks[index])}
//                   />
//                 )}
//               </React.Fragment>
//             ))}
//           </Box>
//         )}
//         <div className="choose-buttons">
//           <Button
//             className="button"
//             variant="contained"
//             id="checkAnswersBtnAudio"
//             onClick={handleAnswerSubmit}
//           >
//             Submit Answer
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );

//   const renderResultsModal = () => (
//     <Modal
//       className="modal-container fade-in-fast"
//       open={!modalOpen && results.length > 0}
//       onClose={() => setResults([])}
//     >
//       <div className="modal-content">
//         <h4>Results</h4>
//         <Box className="modal-body audio-results">
//           {results.map((result, index) => (
//             <p key={index} className={result.correct ? "correct" : "incorrect"}>
//               {result.correct ? "✓" : "✗"} {result.userAnswer} (Correct answer: {result.correctAnswer})
//             </p>
//           ))}
//         </Box>
//         <div className="choose-buttons">
//           <Button
//             className="button"
//             variant="contained"
//             onClick={() => setResults([])}
//           >
//             Close
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );

//   return { audioQuestionObj, modalOpen, handleAnswerSubmit, handleAnswerChange, renderAudio, renderModal, renderResultsModal };

//   function findQuestionToShow(currentTime: number, questions: AudioQuestion[]) {
//     return questions.find((q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1);
//   }

//   function handleQuestionDisplay(questionObj: AudioQuestion) {
//     console.log("Displaying question");
//     audioRef.current.pause();
//     setAudioQuestionObj(questionObj);
//     setAudioAnswerChecked(true);
//     setModalOpen(true);
//   }

//   function handleAudioRestart() {
//     console.log("Restarting audio");
//     audioRef.current.currentTime = 0;
//     audioRef.current.play();
//     setAudioAnswerChecked(false);
//   }
// };



// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Button, Box, Modal } from "@material-ui/core";
// import styled from "styled-components";
// import { AudioQuestion } from "./AudioQuestion";
// import './style.css';

// const CustomTextField = styled.input`
//   border: 1px solid #ccc;
//   padding: 8px 10px;
//   font-size: 16px;
//   border-radius: 4px;
//   transition: width 0.2s ease;
//   width: 50px;

//   &:focus {
//     outline: none;
//     border-color: #007bff;
//     box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
//   }

//   &.correct {
//     border-color: #28a745;
//     background-color: #d4edda;
//     color: #155724;
//   }

//   &.incorrect {
//     border-color: #dc3545;
//     background-color: #f8d7da;
//     color: #721c24;
//   }

//   &::placeholder {
//     color: #888;
//     opacity: 0.8;
//   }
// `;

// export const useAudioLogic = (audioFile: string, questions: AudioQuestion[]) => {
//   const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));
//   const [audioQuestionObj, setAudioQuestionObj] = useState<AudioQuestion | null>(null);
//   const [audioAnswerChecked, setAudioAnswerChecked] = useState<boolean>(false);
//   const [modalOpen, setModalOpen] = useState<boolean>(false);
//   const [resultsModalOpen, setResultsModalOpen] = useState<boolean>(false);
//   const [results, setResults] = useState<{ sentence: string, userAnswer: string, correctAnswer: string, correct: boolean }[]>([]);

//   const handleTimeUpdate = useCallback(() => {
//     const currentTime = Math.floor(audioRef.current.currentTime);

//     if (audioAnswerChecked || audioQuestionObj) {
//       return;
//     }

//     if (currentTime === 0) {
//       setAudioAnswerChecked(false);
//       setAudioQuestionObj(null);
//     }

//     const questionObj = findQuestionToShow(currentTime, questions);

//     if (questionObj) {
//       handleQuestionDisplay(questionObj);
//     }

//     if (!audioQuestionObj && currentTime >= audioRef.current.duration) {
//       setResultsModalOpen(true); // Открываем сводку ответов, когда аудио заканчивается
//     }
//   }, [audioAnswerChecked, audioQuestionObj, questions]);

//   useEffect(() => {
//     const timeUpdateHandler = () => handleTimeUpdate();
//     const audioElement = audioRef.current;

//     if (audioElement) {
//       audioElement.addEventListener("timeupdate", timeUpdateHandler);
//     }

//     return () => {
//       if (audioElement) {
//         audioElement.removeEventListener("timeupdate", timeUpdateHandler);
//       }
//     };
//   }, [handleTimeUpdate]);

//   const handleAnswerChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>, blank: string) => {
//       const inputField = e.target;
//       inputField.style.width = "auto";
//       inputField.style.width = `${Math.max(inputField.scrollWidth, 50)}px`;
//     },
//     []
//   );

//   const displayResults = useCallback(
//     (correct: boolean, correctAnswer: string) => {
//       resetAndPlayAudio();
//     },
//     []
//   );

//   const checkAnswers = useCallback(
//     (question: AudioQuestion) => {
//       const { correct, userAnswer, correctAnswer } = checkUserAnswers(question);
//       setResults((prevResults) => [
//         ...prevResults,
//         { sentence: question.sentence, userAnswer, correctAnswer, correct },
//       ]);
//       displayResults(
//         correct,
//         correctAnswer
//       );
//     },
//     [displayResults]
//   );

//   const handleAnswerSubmit = useCallback(() => {
//     if (!audioAnswerChecked || !audioQuestionObj) {
//       console.error(
//         "Answer check failed: audioAnswerChecked - false or audioQuestionObj - null"
//       );
//       return;
//     }

//     setAudioAnswerChecked(false);
//     setModalOpen(false);
//     if (audioQuestionObj) checkAnswers(audioQuestionObj);
//   }, [audioAnswerChecked, audioQuestionObj, checkAnswers]);

//   const renderAudio = () => (
//     <audio id="audioPlayer" controls ref={audioRef}>
//       <source src={audioFile} type="audio/mp3" />
//       Your browser does not support the audio element.
//     </audio>
//   );

//   const renderModal = () => (
//     <Modal
//       className="modal-container fade-in-fast"
//       open={modalOpen}
//       onClose={() => setModalOpen(false)}
//     >
//       <div className="modal-content">
//         {audioQuestionObj && (
//           <Box className="modal-body audio-questions" id="question">
//             {audioQuestionObj.sentence
//               .split("______")
//               .map((part, index) => (
//                 <React.Fragment key={index}>
//                   {part}
//                   {index < audioQuestionObj.blanks.length && (
//                     <CustomTextField
//                       key={audioQuestionObj.blanks[index]}
//                       id={audioQuestionObj.blanks[index]}
//                       className="userInput"
//                       onChange={(e) =>
//                         handleAnswerChange(
//                           e,
//                           audioQuestionObj.blanks[index]
//                         )
//                       }
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//           </Box>
//         )}
//         <div className="choose-buttons">
//           <Button
//             className="button"
//             variant="contained"
//             id="checkAnswersBtnAudio"
//             onClick={handleAnswerSubmit}
//           >
//             Submit Answer
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );

//   const renderResultsModal = () => (
//     <Modal
//       className="modal-container fade-in-fast"
//       open={resultsModalOpen}
//       onClose={() => setResultsModalOpen(false)}
//     >
//       <div className="modal-content">
//         <h3>Results</h3>
//         {results.map((result, index) => (
//           <div key={index} className="result-item">
//             <p>{result.sentence.replace("______", result.userAnswer)}</p>
//             {result.correct ? (
//               <p className="correct">✓ Correct</p>
//             ) : (
//               <>
//                 <p className="incorrect">✗ Your answer: {result.userAnswer}</p>
//                 <p className="correct-answer">Correct answer: {result.correctAnswer}</p>
//               </>
//             )}
//           </div>
//         ))}
//         <div className="choose-buttons">
//           <Button
//             className="button"
//             variant="contained"
//             onClick={() => setResultsModalOpen(false)}
//           >
//             Close
//           </Button>
//         </div>
//       </div>
//     </Modal>
//   );

//   return { audioQuestionObj, modalOpen, handleAnswerSubmit, handleAnswerChange, renderAudio, renderModal, renderResultsModal };

//   function findQuestionToShow(currentTime: number, questions: AudioQuestion[]) {
//     return questions.find(
//       (q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1
//     );
//   }

//   function handleQuestionDisplay(questionObj: AudioQuestion) {
//     audioRef.current.pause();
//     setAudioQuestionObj(questionObj);
//     setAudioAnswerChecked(true);
//     setModalOpen(true);
//   }

//   function showResultMessage(correct: boolean, correctAnswer: string) {
//     const audioResultsElement = document.getElementById("audioResults");

//     if (!audioResultsElement) {
//       console.error('Element with id "audioResults" not found.');
//       return;
//     }

//     audioResultsElement.innerHTML = "";

//     const messageElement = document.createElement("p");
//     messageElement.className = correct ? "audio-correct" : "audio-incorrect";

//     const icon = document.createElement("span");
//     icon.textContent = correct ? "✓" : "✗";
//     icon.className = correct ? "audio-correct" : "audio-incorrect";
//     messageElement.appendChild(icon);

//     const correctAnswerElement = document.createElement("span");
//     correctAnswerElement.textContent = " Correct answer: " + correctAnswer;
//     correctAnswerElement.classList.add("audio-correct-answer");
//     messageElement.appendChild(correctAnswerElement);

//     audioResultsElement.appendChild(messageElement);
//   }

//   function resetAndPlayAudio() {
//     setTimeout(() => {
//       setAudioQuestionObj(null);
//       audioRef.current.currentTime += 1;
//       audioRef.current.play();

//       const audioResultsElement = document.getElementById("audioResults");
//       if (audioResultsElement) {
//         audioResultsElement.innerHTML = "";
//       }
//     }, 3000);
//   }

//   function checkUserAnswers(question: AudioQuestion) {
//     let correct = true;
//     let userAnswer = "";
//     let correctAnswer = "";

//     question.blanks.forEach((blank) => {
//       const blankElement = document.getElementById(blank) as HTMLInputElement;

//       if (!blankElement) {
//         console.error(`Element with id ${blank} not found.`);
//         return;
//       }

//       const userInput = blankElement.value.trim();
//       const currentCorrectAnswer =
//         question.answers[question.blanks.indexOf(blank)];

//       if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
//         correct = false;
//         blankElement.classList.add("audio-incorrect");
//         userAnswer = userInput;
//         correctAnswer = currentCorrectAnswer;
//       } else {
//         blankElement.classList.remove("audio-incorrect");
//         blankElement.classList.add("audio-correct");
//         userAnswer = userInput;
//         correctAnswer = currentCorrectAnswer;
//       }
//     });

//     return { correct, userAnswer, correctAnswer };
//   }
// };


import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button, Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import { AudioQuestion } from "./AudioQuestion";
import './style.css';

const CustomTextField = styled.input`
  border: 1px solid #ccc;
  padding: 8px; /* Отступы равные со всех сторон */
  font-size: 16px;
  border-radius: 6px;
  transition: width 0.2s ease;
  width: auto;
  min-width: 50px; /* Минимальная ширина */
  max-width: 100%; /* Максимальная ширина ограничена контейнером */
  box-sizing: border-box; /* Включаем отступы в расчет ширины */
  display: inline-block;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &.correct {
    border-color: #28a745;
    background-color: #d4edda;
    color: #155724;
  }

  &.incorrect {
    border-color: #dc3545;
    background-color: #f8d7da;
    color: #721c24;
  }

  &::placeholder {
    color: #888;
    opacity: 0.8;
  }
`;


export const useAudioLogic = (audioFile: string, questions: AudioQuestion[]) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));
  const [audioQuestionObj, setAudioQuestionObj] = useState<AudioQuestion | null>(null);
  const [audioAnswerChecked, setAudioAnswerChecked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [resultsModalOpen, setResultsModalOpen] = useState<boolean>(false);
  const [results, setResults] = useState<{ sentence: string, userAnswer: string, correctAnswer: string, correct: boolean }[]>([]);

  const handleTimeUpdate = useCallback(() => {
    const currentTime = Math.floor(audioRef.current.currentTime);

    if (audioAnswerChecked || audioQuestionObj) {
      return;
    }

    const questionObj = findQuestionToShow(currentTime, questions);

    if (questionObj) {
      handleQuestionDisplay(questionObj);
    }

    if (currentTime >= audioRef.current.duration) {
      setResultsModalOpen(true);
    }
  }, [audioAnswerChecked, audioQuestionObj, questions]);

  useEffect(() => {
    const timeUpdateHandler = () => handleTimeUpdate();
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("timeupdate", timeUpdateHandler);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", timeUpdateHandler);
      }
    };
  }, [handleTimeUpdate]);

  const handleAnswerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, blank: string) => {
      const inputField = e.target;
      inputField.style.width = "auto";
      inputField.style.width = `${Math.max(inputField.scrollWidth, 50)}px`;
    },
    []
  );

  const displayResults = useCallback(
    (correct: boolean, userAnswer: string, correctAnswer: string) => {
      showResultMessage(correct, userAnswer, correctAnswer);
      resetAndPlayAudio();
    },
    []
  );

  const checkAnswers = useCallback(
    (question: AudioQuestion) => {
      const { correct, userAnswer, correctAnswer } = checkUserAnswers(question);
      setResults((prevResults) => {
        const existingResult = prevResults.find(result => result.sentence === question.sentence);
        if (existingResult) {
          return prevResults.map(result =>
            result.sentence === question.sentence
              ? { sentence: question.sentence, userAnswer, correctAnswer, correct }
              : result
          );
        }
        return [...prevResults, { sentence: question.sentence, userAnswer, correctAnswer, correct }];
      });
      displayResults(
        correct,
        userAnswer,
        correctAnswer
      );
    },
    [displayResults]
  );

  const handleAnswerSubmit = useCallback(() => {
    if (!audioAnswerChecked || !audioQuestionObj) {
      console.error(
        "Answer check failed: audioAnswerChecked - false or audioQuestionObj - null"
      );
      return;
    }

    setAudioAnswerChecked(false);
    setModalOpen(false);
    if (audioQuestionObj) checkAnswers(audioQuestionObj);
  }, [audioAnswerChecked, audioQuestionObj, checkAnswers]);

  const renderAudio = () => (
    <audio id="audioPlayer" controls ref={audioRef}>
      <source src={audioFile} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );

  const renderModal = () => (
    <Modal
      className="modal-container fade-in-fast"
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <div className="modal-content">
        {audioQuestionObj && (
          <Box className="modal-body audio-questions" id="question">
            {audioQuestionObj.sentence
              .split("______")
              .map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < audioQuestionObj.blanks.length && (
                    <CustomTextField
                      key={audioQuestionObj.blanks[index]}
                      id={audioQuestionObj.blanks[index]}
                      className="userInput"
                      onChange={(e) =>
                        handleAnswerChange(
                          e,
                          audioQuestionObj.blanks[index]
                        )
                      }
                    />
                  )}
                </React.Fragment>
              ))}
          </Box>
        )}
        <div className="choose-buttons">
          <Button
            className="button"
            variant="contained"
            id="checkAnswersBtnAudio"
            onClick={handleAnswerSubmit}
          >
            Submit Answer
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderResultsModal = () => (
    <Modal
      className="modal-container fade-in-fast"
      open={resultsModalOpen}
      onClose={() => setResultsModalOpen(false)}
    >
      <div className="modal-content">
        <h3>Results</h3>
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <p>
              {result.sentence.replace(
                "______",
                result.correct ? `${result.userAnswer} ✓` : `${result.userAnswer} ✗`
              )}
            </p>
            {!result.correct && (
              <p className="correct-answer">
                Correct answer: {result.correctAnswer}
              </p>
            )}
          </div>
        ))}
        <div className="choose-buttons">
          <Button
            className="button"
            variant="contained"
            onClick={() => setResultsModalOpen(false)}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );

  return { audioQuestionObj, modalOpen, handleAnswerSubmit, handleAnswerChange, renderAudio, renderModal, renderResultsModal };

  function findQuestionToShow(currentTime: number, questions: AudioQuestion[]) {
    return questions.find(
      (q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1
    );
  }

  function handleQuestionDisplay(questionObj: AudioQuestion) {
    audioRef.current.pause();
    setAudioQuestionObj(questionObj);
    setAudioAnswerChecked(true);
    setModalOpen(true);
  }

  function showResultMessage(correct: boolean, userAnswer: string, correctAnswer: string) {
    const audioResultsElement = document.getElementById("audioResults");

    if (!audioResultsElement) {
      console.error('Element with id "audioResults" not found.');
      return;
    }

    audioResultsElement.innerHTML = "";

    const messageElement = document.createElement("p");
    messageElement.className = correct ? "audio-correct" : "audio-incorrect";

    const icon = document.createElement("span");
    icon.textContent = correct ? "✓" : "✗";
    icon.className = correct ? "audio-correct" : "audio-incorrect";
    messageElement.appendChild(icon);

    const answerElement = document.createElement("span");
    answerElement.textContent = `  ${userAnswer}`;
    answerElement.classList.add("audio-user-answer");
    messageElement.appendChild(answerElement);

    if (!correct) {
      const correctAnswerElement = document.createElement("span");
      correctAnswerElement.textContent = ` Correct answer: ${correctAnswer}`;
      correctAnswerElement.classList.add("audio-correct-answer");
      messageElement.appendChild(correctAnswerElement);
    }

    audioResultsElement.appendChild(messageElement);
  }

  function resetAndPlayAudio() {
    setTimeout(() => {
      setAudioQuestionObj(null);
      audioRef.current.currentTime += 1;
      audioRef.current.play();

      const audioResultsElement = document.getElementById("audioResults");
      if (audioResultsElement) {
        audioResultsElement.innerHTML = "";
      }
    }, 3000);
  }

  function checkUserAnswers(question: AudioQuestion) {
    let correct = true;
    let userAnswer = "";
    let correctAnswer = "";

    question.blanks.forEach((blank) => {
      const blankElement = document.getElementById(blank);

      if (!blankElement) {
        console.error(`Element with id ${blank} not found.`);
        return;
      }

      const userInput = (blankElement as HTMLInputElement).value.trim();
      const currentCorrectAnswer =
        question.answers[question.blanks.indexOf(blank)];

      if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
        correct = false;
        blankElement.classList.add("audio-incorrect");
        userAnswer = userInput;
        correctAnswer = currentCorrectAnswer;
      } else {
        blankElement.classList.remove("audio-incorrect");
        blankElement.classList.add("audio-correct");
        userAnswer = userInput;
        correctAnswer = currentCorrectAnswer;
      }
    });

    return { correct, userAnswer, correctAnswer };
  }
};
