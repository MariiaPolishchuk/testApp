// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";
// import "../style.css";

// export interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// export interface UserAnswer {
//   text: string;
//   correct: boolean | null;
// }

// export interface DragDropFormProps {
//   sentences: Sentence[];
//   words: string[];
//   onWordMove: (word: string) => void;
//   resetGame: () => void;
//   saveProgress: (answers: UserAnswer[]) => void;
// }

// const DragDropForm: React.FC<DragDropFormProps> = ({
//   sentences,
//   words,
//   onWordMove,
//   resetGame,
//   saveProgress,
// }) => {
//   const [userAnswers, setUserAnswers] = useState<UserAnswer[][]>(
//     sentences.map((sentence) =>
//       sentence.correctWords.map(() => ({ text: "", correct: null }))
//     )
//   );
//   const [checked, setChecked] = useState(false);
//   const [availableWords, setAvailableWords] = useState<string[]>([]);

//   useEffect(() => {
//     const shuffledWords = shuffleArray(words);
//     setAvailableWords(shuffledWords);
//   }, [words]);

//   const updateUserAnswer = (
//     sentenceIndex: number,
//     blankIndex: number,
//     word: string
//   ) => {
//     setUserAnswers((prevAnswers) => {
//       const newAnswers = [...prevAnswers];
//       newAnswers[sentenceIndex][blankIndex] = { text: word, correct: null };
//       return newAnswers;
//     });
//   };

//   const handleDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
//     const { destination, source } = result;
//     if (!destination || !source) return;

//     const sourceIndex = parseInt(
//       source.droppableId.split("-")[1] || "0",
//       10
//     );
//     const destinationIndex = parseInt(
//       destination.droppableId.split("-")[1] || "-1",
//       10
//     );

//     const blankIndex = parseInt(source.droppableId.split("-")[3] || "0", 10);

//     const word =
//       source.droppableId === "word-list-for-drag"
//         ? availableWords[source.index]
//         : userAnswers[sourceIndex][blankIndex]?.text || "";

//     if (source.droppableId !== destination.droppableId) {
//       if (source.droppableId === "word-list-for-drag") {
//         const newAvailableWords = [...availableWords];
//         newAvailableWords.splice(source.index, 1);
//         setAvailableWords(newAvailableWords);
//       } else {
//         updateUserAnswer(sourceIndex, blankIndex, "");

//         if (destination.droppableId === "word-list-for-drag") {
//           setAvailableWords((prevWords) => [...prevWords, word]);
//         }
//       }

//       if (destination.droppableId === "word-list-for-drag") {
//         const newAvailableWords = [...availableWords];
//         newAvailableWords.splice(destination.index, 0, word);
//         setAvailableWords(newAvailableWords);
//       } else {
//         const destBlankIndex = parseInt(
//           destination.droppableId.split("-")[3] || "0",
//           10
//         );
//         const oldWord = userAnswers[destinationIndex][destBlankIndex]?.text || "";
//         if (oldWord && oldWord !== word) {
//           setAvailableWords((prevWords) => [...prevWords, oldWord]);
//         }
//         updateUserAnswer(destinationIndex, destBlankIndex, word);
//       }

//       onWordMove(word);
//     } else if (
//       source.droppableId !== "word-list-for-drag" &&
//       destination.droppableId === "word-list-for-drag"
//     ) {
//       const newAvailableWords = [...availableWords];
//       newAvailableWords.push(word);
//       setAvailableWords(newAvailableWords);
//       updateUserAnswer(sourceIndex, blankIndex, "");
//     }
//   };

//   const checkGameAnswers = () => {
//     setUserAnswers((prevAnswers) => {
//       return prevAnswers.map((sentenceAnswers, sentenceIndex) =>
//         sentenceAnswers.map((answer, blankIndex) => {
//           const correctWords = sentences[sentenceIndex]?.correctWords || [];
//           const isCorrect = correctWords[blankIndex] === answer.text;
//           return { text: answer.text, correct: isCorrect };
//         })
//       );
//     });
//     setChecked(true);
//   };

//   const shuffleArray = (array: any[]) => {
//     const shuffledArray = [...array];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [
//         shuffledArray[j],
//         shuffledArray[i],
//       ];
//     }
//     return shuffledArray;
//   };

//   const handleResetGame = () => {
//     const usedWords = userAnswers
//       .flatMap((sentenceAnswers) => sentenceAnswers.map((answer) => answer.text))
//       .filter((text) => text !== "");

//     const allWords = [...new Set([...availableWords, ...usedWords])];

//     setAvailableWords(shuffleArray(allWords));
//     setUserAnswers(
//       sentences.map((sentence) =>
//         sentence.correctWords.map(() => ({ text: "", correct: null }))
//       )
//     );
//     setChecked(false);
//     resetGame();
//   };

//   const showCorrectGameAnswers = () => {
//     setAvailableWords([]);
//     setUserAnswers(
//       sentences.map((sentence) =>
//         sentence.correctWords.map((word) => ({
//           text: word,
//           correct: true,
//         }))
//       )
//     );
//     setChecked(true);
//   };

//   const renderBlank = (sentenceIndex: number, blankIndex: number) => (
//     <Droppable
//       key={`sentence-${sentenceIndex}-blank-${blankIndex}`}
//       droppableId={`sentence-${sentenceIndex}-blank-${blankIndex}`}
//     >
//       {(provided) => (
//         <span
//           className={`blank ${
//             checked
//               ? userAnswers[sentenceIndex][blankIndex]?.correct
//                 ? "correct-answer"
//                 : "incorrect-answer"
//               : ""
//           }`}
//           ref={provided.innerRef}
//           {...provided.droppableProps}
//         >
//           {userAnswers[sentenceIndex][blankIndex]?.text !== "" ? (
//             <Draggable
//               key={`draggable-${sentenceIndex}-${blankIndex}`} // Уникальный ключ для Draggable
//               draggableId={`sentence-${sentenceIndex}-blank-${blankIndex}`}
//               index={blankIndex}
//             >
//               {(provided) => (
//                 <span
//                   {...provided.draggableProps}
//                   {...provided.dragHandleProps}
//                   ref={provided.innerRef}
//                   className="dragged-word"
//                 >
//                   {userAnswers[sentenceIndex][blankIndex]?.text || ""}
//                 </span>
//               )}
//             </Draggable>
//           ) : (
//             " "
//           )}
//           {provided.placeholder}
//         </span>
//       )}
//     </Droppable>
//   );

//   const renderSentence = (sentence: Sentence, index: number) => (
//     <div key={`sentence-${sentence.id}`} className="sentence-container">
//       {sentence.text.split(/_____/).map((part, i, partsArray) => (
//         <React.Fragment key={`${sentence.id}-part-${i}`}>
//           <span>{part}</span>
//           {i !== partsArray.length - 1 && renderBlank(index, i)}
//         </React.Fragment>
//       ))}
//     </div>
//   );

//   return (
//     <div className="drag-text-container">
//       <h4>Task. Drag words into the right gaps!</h4>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div className="sentences-container">
//           {sentences.map(renderSentence)}
//         </div>
//         <Droppable droppableId="word-list-for-drag">
//           {(provided) => (
//             <div
//               className="word-list-for-drag"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               {availableWords.map((word, index) => (
//                 <Draggable
//                   key={`word-${index}`} // Уникальный ключ для Draggable
//                   draggableId={`word-${index}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className="drag-word"
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       ref={provided.innerRef}
//                     >
//                       {word}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//       <div className="choose-buttons">
//         <Button variant="contained" onClick={checkGameAnswers}>
//           Submit
//         </Button>
//         <Button variant="contained" onClick={showCorrectGameAnswers}>
//           Show Correct Answers
//         </Button>
//         <Button variant="contained" onClick={handleResetGame}>
//           Start again
//         </Button>
//         <Button variant="contained" onClick={() => saveProgress(userAnswers.flat())}>
//           Save Progress
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default DragDropForm;



import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "@mui/material/Button";
import "../style.css";

export interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

export interface UserAnswer {
  text: string;
  correct: boolean | null;
}

export interface DragDropFormProps {
  sentences: Sentence[];
  words: string[];
  onWordMove: (word: string) => void;
  resetGame: () => void;
  saveProgress: (answers: UserAnswer[]) => void;
}

const DragDropForm: React.FC<DragDropFormProps> = ({
  sentences,
  words,
  onWordMove,
  resetGame,
  saveProgress,
}) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswer[][]>(
    sentences.map((sentence) =>
      sentence.correctWords.map(() => ({ text: "", correct: null }))
    )
  );
  const [checked, setChecked] = useState(false);
  const [availableWords, setAvailableWords] = useState<string[]>([]);

  useEffect(() => {
    const shuffledWords = shuffleArray(words);
    setAvailableWords(shuffledWords);
  }, [words]);

  const updateUserAnswer = (
    sentenceIndex: number,
    blankIndex: number,
    word: string
  ) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[sentenceIndex][blankIndex] = { text: word, correct: null };
      return newAnswers;
    });
  };

  const handleDragEnd = (result: import("react-beautiful-dnd").DropResult) => {
    const { destination, source } = result;
    if (!destination || !source) return;

    const sourceIndex = parseInt(source.droppableId.split("-")[1] || "0", 10);
    const destinationIndex = parseInt(
      destination.droppableId.split("-")[1] || "-1",
      10
    );

    const blankIndex = parseInt(source.droppableId.split("-")[3] || "0", 10);

    const word =
      source.droppableId === "word-list-for-drag"
        ? availableWords[source.index]
        : userAnswers[sourceIndex][blankIndex]?.text || "";

    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId === "word-list-for-drag") {
        const newAvailableWords = [...availableWords];
        newAvailableWords.splice(source.index, 1);
        setAvailableWords(newAvailableWords);
      } else {
        updateUserAnswer(sourceIndex, blankIndex, "");

        if (destination.droppableId === "word-list-for-drag") {
          setAvailableWords((prevWords) => [...prevWords, word]);
        }
      }

      if (destination.droppableId === "word-list-for-drag") {
        const newAvailableWords = [...availableWords];
        newAvailableWords.splice(destination.index, 0, word);
        setAvailableWords(newAvailableWords);
      } else {
        const destBlankIndex = parseInt(
          destination.droppableId.split("-")[3] || "0",
          10
        );
        const oldWord = userAnswers[destinationIndex][destBlankIndex]?.text || "";
        if (oldWord && oldWord !== word) {
          setAvailableWords((prevWords) => [...prevWords, oldWord]);
        }
        updateUserAnswer(destinationIndex, destBlankIndex, word);
      }

      onWordMove(word);
    } else if (
      source.droppableId !== "word-list-for-drag" &&
      destination.droppableId === "word-list-for-drag"
    ) {
      const newAvailableWords = [...availableWords];
      newAvailableWords.push(word);
      setAvailableWords(newAvailableWords);
      updateUserAnswer(sourceIndex, blankIndex, "");
    }
  };

  const checkGameAnswers = () => {
    setUserAnswers((prevAnswers) => {
      return prevAnswers.map((sentenceAnswers, sentenceIndex) =>
        sentenceAnswers.map((answer, blankIndex) => {
          const correctWords = sentences[sentenceIndex]?.correctWords || [];
          const isCorrect = correctWords[blankIndex] === answer.text;
          return { text: answer.text, correct: isCorrect };
        })
      );
    });
    setChecked(true);
  };

  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleResetGame = () => {
    const usedWords = userAnswers
      .flatMap((sentenceAnswers) => sentenceAnswers.map((answer) => answer.text))
      .filter((text) => text !== "");

    const allWords = [...new Set([...availableWords, ...usedWords])];

    setAvailableWords(shuffleArray(allWords));
    setUserAnswers(
      sentences.map((sentence) =>
        sentence.correctWords.map(() => ({ text: "", correct: null }))
      )
    );
    setChecked(false);
    resetGame();
  };

  const showCorrectGameAnswers = () => {
    setAvailableWords([]);
    setUserAnswers(
      sentences.map((sentence) =>
        sentence.correctWords.map((word) => ({
          text: word,
          correct: true,
        }))
      )
    );
    setChecked(true);
  };

  const renderBlank = (sentenceIndex: number, blankIndex: number) => (
    <Droppable
      key={`sentence-${sentenceIndex}-blank-${blankIndex}`}
      droppableId={`sentence-${sentenceIndex}-blank-${blankIndex}`}
    >
      {(provided) => (
        <span
          className={`blank ${
            checked
              ? userAnswers[sentenceIndex][blankIndex]?.correct
                ? "correct-answer"
                : "incorrect-answer"
              : "empty"
          }`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {userAnswers[sentenceIndex][blankIndex]?.text !== "" ? (
            <Draggable
              key={`draggable-${sentenceIndex}-${blankIndex}`} // Уникальный ключ для Draggable
              draggableId={`sentence-${sentenceIndex}-blank-${blankIndex}`}
              index={blankIndex}
            >
              {(provided) => (
                <span
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  className="dragged-word"
                >
                  {userAnswers[sentenceIndex][blankIndex]?.text || ""}
                </span>
              )}
            </Draggable>
          ) : (
            " "
          )}
          {provided.placeholder}
        </span>
      )}
    </Droppable>
  );

  const renderSentence = (sentence: Sentence, index: number) => (
    <div key={`sentence-${sentence.id}`} className="sentence-container">
      {sentence.text.split(/_____/).map((part, i, partsArray) => (
        <React.Fragment key={`${sentence.id}-part-${i}`}>
          <span>{part}</span>
          {i !== partsArray.length - 1 && renderBlank(index, i)}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="drag-text-container">
      <h4>Task. Drag words into the right gaps!</h4>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="sentences-container">
          {sentences.map(renderSentence)}
        </div>
        <Droppable droppableId="word-list-for-drag">
          {(provided) => (
            <div
              className="word-list-for-drag"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {availableWords.map((word, index) => (
                <Draggable
                  key={`word-${index}`} // Уникальный ключ для Draggable
                  draggableId={`word-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="drag-word"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {word}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="choose-buttons">
        <Button variant="contained" onClick={checkGameAnswers}>
          Submit
        </Button>
        <Button variant="contained" onClick={showCorrectGameAnswers}>
          Show Correct Answers
        </Button>
        <Button variant="contained" onClick={handleResetGame}>
          Start again
        </Button>
        <Button
          variant="contained"
          onClick={() => saveProgress(userAnswers.flat())}
        >
          Save Progress
        </Button>
      </div>
    </div>
  );
};

export default DragDropForm;
