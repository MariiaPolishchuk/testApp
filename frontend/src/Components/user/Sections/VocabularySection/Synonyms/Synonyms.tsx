// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";
// import "./Synonyms.css";

// interface SynonymItem {
//   word: string;
//   synonym: string;
//   _id: string;
// }

// interface SynonymsProps {
//   synonyms: SynonymItem[];
// }

// const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
//   const words = synonyms.map((syn) => ({
//     id: syn._id,
//     text: syn.word,
//   }));

//   const synonymWords = synonyms.map((syn) => ({
//     id: syn._id,
//     text: syn.synonym,
//   }));

//   const correctWordOrder = words.map((word) => word.id);

//   const [wordOrder, setWordOrder] = useState<string[]>([]);
//   const [synonymOrder, setSynonymOrder] = useState<string[]>([]);
//   const [showAnswers, setShowAnswers] = useState(false);

//   useEffect(() => {
//     resetGame();
//   }, [synonyms]);

//   const resetGame = () => {
//     setWordOrder(shuffleArray(correctWordOrder));
//     setSynonymOrder(shuffleArray(synonymWords.map((syn) => syn.id)));
//     setShowAnswers(false);
//   };

//   const handleWordDragEnd = (result: any) => {
//     if (!result.destination) return;

//     const reorderedList = [...wordOrder];
//     const [removed] = reorderedList.splice(result.source.index, 1);
//     reorderedList.splice(result.destination.index, 0, removed);
//     setWordOrder(reorderedList);
//   };

//   const handleSynonymDragEnd = (result: any) => {
//     if (!result.destination) return;

//     const reorderedList = [...synonymOrder];
//     const [removed] = reorderedList.splice(result.source.index, 1);
//     reorderedList.splice(result.destination.index, 0, removed);
//     setSynonymOrder(reorderedList);
//   };

//   const shuffleArray = (array: string[]) => {
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

//   const checkAnswers = () => {
//     setShowAnswers(true);
//   };

//   const showCorrectOrder = () => {
//     setWordOrder(correctWordOrder);
//     setSynonymOrder(synonymWords.map((syn) => syn.id));
//     setShowAnswers(true);
//   };

//   return (
//     <div className="synonyms-cont">
//       <div className="block-name">
//         <h4>
//         Look at these words! Here we have two colums. Each column contains one synonym! First, translate and find each meaning! Then, try
//         to find synonyms, drag it across and check your answers!
//         </h4>
//       </div>
//       <div className="word-synonyms-container">
//         <div className="word-list-container">
//           <DragDropContext onDragEnd={handleWordDragEnd}>
//             <Droppable droppableId="words">
//               {(provided) => (
//                 <ul
//                   className="word-list"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   {wordOrder.map((wordId, index) => {
//                     const word = words.find((word) => word.id === wordId);
//                     if (!word) {
//                       console.error(`Word not found for id: ${wordId}`);
//                       return null;
//                     }
//                     return (
//                       <Draggable
//                         key={word.id}
//                         draggableId={word.id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <li
//                             className="list-item"
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             ref={provided.innerRef}
//                           >
//                             {word.text}
//                           </li>
//                         )}
//                       </Draggable>
//                     );
//                   })}
//                   {provided.placeholder}
//                 </ul>
//               )}
//             </Droppable>
//           </DragDropContext>
//         </div>
//         <div className="synonyms-list-container">
//           <DragDropContext onDragEnd={handleSynonymDragEnd}>
//             <Droppable droppableId="synonyms">
//               {(provided) => (
//                 <ul
//                   className="synonyms-list"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   {synonymOrder.map((synonymId, index) => {
//                     const synonym = synonymWords.find(
//                       (syn) => syn.id === synonymId
//                     );
//                     if (!synonym) {
//                       console.error(`Synonym not found for id: ${synonymId}`);
//                       return null;
//                     }
//                     return (
//                       <Draggable
//                         key={synonym.id}
//                         draggableId={synonym.id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <li
//                             className="list-item"
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             ref={provided.innerRef}
//                           >
//                             {synonym.text}
//                           </li>
//                         )}
//                       </Draggable>
//                     );
//                   })}
//                   {provided.placeholder}
//                 </ul>
//               )}
//             </Droppable>
//           </DragDropContext>
//         </div>
//       </div>
//       <div className="choose-buttons">
//         <Button
//           className="button"
//           variant="contained"
//           onClick={checkAnswers}
//         >
//           Check Answers
//         </Button>
//         <Button
//           className="button"
//           variant="contained"
//           onClick={showCorrectOrder}
//         >
//           Show Correct Order
//         </Button>
//         <Button
//           className="button"
//           variant="contained"
//           onClick={resetGame}
//         >
//           Reset
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Synonyms;

import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "@mui/material/Button";
import "./Synonyms.css";

interface SynonymItem {
  word: string;
  synonym: string;
  _id: string;
}

interface SynonymsProps {
  synonyms: SynonymItem[];
}

const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
  const words = synonyms.map((syn) => ({
    id: syn._id,
    text: syn.word,
  }));

  const synonymWords = synonyms.map((syn) => ({
    id: syn._id,
    text: syn.synonym,
  }));

  const [synonymOrder, setSynonymOrder] = useState<string[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [correctPairs, setCorrectPairs] = useState<boolean[]>([]);

  useEffect(() => {
    resetGame();
  }, [synonyms]);

  const resetGame = () => {
    setSynonymOrder(shuffleArray(synonymWords.map((syn) => syn.id)));
    setCorrectPairs([]);
    setShowAnswers(false);
  };

  const handleSynonymDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedList = [...synonymOrder];
    const [removed] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, removed);
    setSynonymOrder(reorderedList);
  };

  const shuffleArray = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const checkAnswers = () => {
    const results = synonymOrder.map((synonymId, index) => {
      const word = words[index];
      const synonym = synonymWords.find((syn) => syn.id === synonymId);
      return synonym && word.text === synonyms.find(s => s._id === synonymId)?.word || false;
    });
    setCorrectPairs(results);
    setShowAnswers(true);
  };

  const showCorrectOrder = () => {
    setSynonymOrder(synonymWords.map((syn) => syn.id));
    setShowAnswers(true);
  };

  return (
    <div className="synonyms-cont">
      <div className="block-name">
        <h4>
        Task. Look at these words! Here we have two columns. Each column contains one synonym! First, translate and find each meaning! Then, try
          to find synonyms, drag it across and check your answers!
        </h4>
      </div>
      <div className="word-synonyms-container">
        <div className="word-list-container">
          <ul className="word-list">
            {words.map((word) => (
              <li key={word.id} className="list-item">
                {word.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="synonyms-list-container">
          <DragDropContext onDragEnd={handleSynonymDragEnd}>
            <Droppable droppableId="synonyms">
              {(provided) => (
                <ul
                  className="synonyms-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {synonymOrder.map((synonymId, index) => {
                    const synonym = synonymWords.find(
                      (syn) => syn.id === synonymId
                    );
                    if (!synonym) {
                      console.error(`Synonym not found for id: ${synonymId}`);
                      return null;
                    }
                    return (
                      <Draggable
                        key={synonym.id}
                        draggableId={synonym.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            className={`list-item ${
                              showAnswers
                                ? correctPairs[index]
                                  ? "correct-answer"
                                  : "incorrect-answer"
                                : ""
                            }`}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            {synonym.text}
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <div className="choose-buttons">
        <Button className="button" variant="contained" onClick={checkAnswers}>
          Check Answers
        </Button>
        <Button className="button" variant="contained" onClick={showCorrectOrder}>
          Show Correct Order
        </Button>
        <Button className="button" variant="contained" onClick={resetGame}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Synonyms;





// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Button from "@mui/material/Button";
// import "./Synonyms.css";

// interface SynonymItem {
//   word: string;
//   synonym: string;
//   _id: string;
// }

// interface SynonymsProps {
//   synonyms: SynonymItem[];
// }

// const Synonyms: React.FC<SynonymsProps> = ({ synonyms }) => {
//   const words = synonyms.map((syn) => ({
//     id: syn._id,
//     text: syn.word,
//   }));

//   const synonymWords = synonyms.map((syn) => ({
//     id: syn._id,
//     text: syn.synonym,
//   }));

//   const [synonymOrder, setSynonymOrder] = useState<string[]>([]);
//   const [showAnswers, setShowAnswers] = useState(false);

//   useEffect(() => {
//     resetGame();
//   }, [synonyms]);

//   const resetGame = () => {
//     setSynonymOrder(shuffleArray(synonymWords.map((syn) => syn.id)));
//     setShowAnswers(false);
//   };

//   const handleSynonymDragEnd = (result: any) => {
//     if (!result.destination) return;

//     const reorderedList = [...synonymOrder];
//     const [removed] = reorderedList.splice(result.source.index, 1);
//     reorderedList.splice(result.destination.index, 0, removed);
//     setSynonymOrder(reorderedList);
//   };

//   const shuffleArray = (array: string[]) => {
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

//   const checkAnswers = () => {
//     setShowAnswers(true);
//   };

//   const showCorrectOrder = () => {
//     setSynonymOrder(synonymWords.map((syn) => syn.id));
//     setShowAnswers(true);
//   };

//   return (
//     <div className="synonyms-cont">
//       <div className="block-name">
//         <h4>
//           Look at these words! Here we have two columns. Each column contains one synonym! First, translate and find each meaning! Then, try
//           to find synonyms, drag it across and check your answers!
//         </h4>
//       </div>
//       <div className="word-synonyms-container">
//         <div className="word-list-container">
//           <ul className="word-list">
//             {words.map((word) => (
//               <li key={word.id} className="list-item">
//                 {word.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="synonyms-list-container">
//           <DragDropContext onDragEnd={handleSynonymDragEnd}>
//             <Droppable droppableId="synonyms">
//               {(provided) => (
//                 <ul
//                   className="synonyms-list"
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                 >
//                   {synonymOrder.map((synonymId, index) => {
//                     const synonym = synonymWords.find(
//                       (syn) => syn.id === synonymId
//                     );
//                     if (!synonym) {
//                       console.error(`Synonym not found for id: ${synonymId}`);
//                       return null;
//                     }
//                     return (
//                       <Draggable
//                         key={synonym.id}
//                         draggableId={synonym.id}
//                         index={index}
//                       >
//                         {(provided) => (
//                           <li
//                             className="list-item"
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             ref={provided.innerRef}
//                           >
//                             {synonym.text}
//                           </li>
//                         )}
//                       </Draggable>
//                     );
//                   })}
//                   {provided.placeholder}
//                 </ul>
//               )}
//             </Droppable>
//           </DragDropContext>
//         </div>
//       </div>
//       <div className="choose-buttons">
//         <Button className="button" variant="contained" onClick={checkAnswers}>
//           Check Answers
//         </Button>
//         <Button className="button" variant="contained" onClick={showCorrectOrder}>
//           Show Correct Order
//         </Button>
//         <Button className="button" variant="contained" onClick={resetGame}>
//           Reset
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Synonyms;
