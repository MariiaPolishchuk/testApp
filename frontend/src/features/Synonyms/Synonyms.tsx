import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "@mui/material/Button";

interface Props {
  words: { id: string; text: string }[];
  synonyms: { id: string; text: string }[];
}

const Synonyms: React.FC<Props> = ({ words, synonyms }) => {
  const correctWordOrder = words.map((word) => word.id);

  const [wordOrder, setWordOrder] = useState<string[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setWordOrder(shuffleArray(correctWordOrder));
    setShowAnswers(false);
  };

  const handleWordDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedList = [...wordOrder];
    const [removed] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, removed);
    setWordOrder(reorderedList);
  };

  const shuffleArray = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const checkAnswers = () => {
    setShowAnswers(true);
  };

  const showCorrectOrder = () => {
    setWordOrder(correctWordOrder);
    setShowAnswers(true);
  };

  return (
    <div className="synonyms-cont">
      <div className="block-name">
        <h4>
          Look at these words! Here we have two colums. Each column contains one synonym! First, translate and find each meaning! Then, try
          to find synonyms, drag it across and check your answers!
        </h4>
      </div>
      <div className="word-synonyms-container">
        <div className="word-list-container">
          <DragDropContext onDragEnd={handleWordDragEnd}>
            <Droppable droppableId="words">
              {(provided) => (
                <ul
                  className="word-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {wordOrder.map((wordId, index) => {
                    const word = words.find(
                      (word) => word.id === wordId
                    );
                    return (
                      <Draggable
                        key={word?.id || ""}
                        draggableId={word?.id || ""}
                        index={index}
                      >
                        {(provided) => {
                          let listItemClass = "list-item";
                          if (showAnswers) {
                            if (
                              index ===
                              correctWordOrder.indexOf(word?.id || "")
                            ) {
                              listItemClass += " correct-word";
                            } else {
                              listItemClass += " incorrect-word";
                            }
                          }
                          return (
                            <li
                              className={listItemClass}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              {word?.text}
                            </li>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="synonyms-list-container">
          <ul className="synonyms-list">
            {synonyms.map((synonym) => (
              <li className="synonym-item" key={synonym.id}>
                {synonym.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="choose-buttons">
        <Button
          className="lesson-button"
          variant="contained"
          onClick={checkAnswers}
        >
          Check Answers
        </Button>
        <Button
          className="lesson-button"
          variant="contained"
          onClick={showCorrectOrder}
        >
          Show Correct Order
        </Button>
        <Button
          className="lesson-button"
          variant="contained"
          onClick={resetGame}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Synonyms;



