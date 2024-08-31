import React, { useEffect, useRef, useState } from "react";
import { Provider } from 'react-redux'; 
import { Tabs, Tab, Button } from "@material-ui/core";
import ReadingText from "./ReadingText";
import Test from "./Test";
import Grammar from "./Grammar";
import Listening from "./Listening";
import useRandomQuestion from "../../../RandomQuestionsReading/RandomQuestionsReading";
import questions from "./RandomQuestions"; 
import store from '../../../../store'; 
const Lesson: React.FC = () => {
 
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
  } = useRandomQuestion(questions); 

  const [value, setValue] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null); 

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isModalOpen) {
      askRandomQuestion();
    }
  }, [isModalOpen]);

  return (
    <Provider store={store}>
      <div className="overall fade-in main-container-lessons" ref={modalRef}>

        <Tabs
          className="lesson-tabs"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Reading" />
          <Tab label="Test" />
          <Tab label="Grammar" />
          <Tab label="Listening" />
        </Tabs>

        {value === 0 && (
          <>
            <ReadingText />
            <div className="choose-buttons">
              <Button
                className="lesson-button"
                variant="contained"
                onClick={toggleModal}
              >
                Tick here to speak
              </Button>
            </div>
            {isModalOpen && (
              <div className="modal-container fade-in-fast" ref={modalRef}>
                <div className="modal-content">
                  <div className="modal-header">
                    <Button onClick={toggleModal}>Close</Button>
                  </div>
                  <div className="modal-body">
                    {outputText && <p>{outputText}</p>}
                    <div>
                      <Button onClick={askRandomQuestion}>Next Question</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {value === 1 && <Test navigateToTheNextTab={function (newValue: number): void {
          throw new Error("Function not implemented.");
        } } />}
        {value === 2 && <Grammar />}
        {value === 3 && <Listening />}
      </div>
    </Provider>
  );
};

export default Lesson;

