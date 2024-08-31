import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ReadingText from "./ReadingText";
// import Test from "./Test";
// import Grammar from "./Grammar";
// import Listening from "./Listening";
import useRandomQuestion from "../../../RandomQuestionsReading/RandomQuestionsReading";
import RandomQuestions from "./RandomQuestions";
import "../../../../styles/Lessons.css";

const Lesson: React.FC = () => {
  const navigate = useNavigate();
  const [, setShowStartButton] = useState(true);
  const [value, setValue] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleStartListening = () => {
    setShowStartButton(false);
    navigate("/course/beginner/character-traits/lesson/listening");
    setValue(3);
  };

  const {
    outputText,
    askRandomQuestion,
    isModalOpen,
    toggleModal,
  }: {
    outputText: string;
    askRandomQuestion: () => void;
    isModalOpen: boolean;
    toggleModal: () => void;
  } = useRandomQuestion(RandomQuestions);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isModalOpen) {
      askRandomQuestion();
    }
  }, [isModalOpen]);

  const isSmallScreen = () => {
    return window.innerWidth < 600;
  };

  return (
    <div className="overall fade-in main-container-lessons" ref={modalRef}>
      {value === 0 && (
        <>
          <div className="reading-container">
            <ReadingText />
            <div className="choose-buttons">
              <Button
                className="lesson-button"
                variant="contained"
                onClick={toggleModal}
              >
                Tick here to speak
              </Button>

              <Button
                className="lesson-button"
                variant="contained"
                onClick={handleStartListening}
              >
                Start Listening
              </Button>
            </div>
          </div>
          {isModalOpen && (
            <div className="modal-container fade-in-fast" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header"></div>
                <div className="modal-body">
                  {outputText && (
                    <p className="random-questions text fade-in-fast">
                      {outputText}
                    </p>
                  )}
                  <div className="modal-buttons">
                    <Button onClick={askRandomQuestion}>Next Question</Button>
                    <Button onClick={toggleModal}>Close</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* {value === 1 && <Test />}
      {value === 2 && <Grammar />}
      {value === 3 && <Listening />} */}
    </div>
  );
};

export default Lesson;