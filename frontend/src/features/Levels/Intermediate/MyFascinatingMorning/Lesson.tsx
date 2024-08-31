import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import ReadingText from "./ReadingPage/ReadingText";
import Test from "./TestPage/Test";
import Grammar from "./GrammarPage/GrammarPage";
import Listening from "./ListeningPage/Listening";
import useRandomQuestion from "../../../RandomQuestionsReading/RandomQuestionsReading";
import RandomQuestions from "./ReadingPage/RandomQuestions";
import "../../../../styles/Lessons.css";

const Lesson: React.FC = () => {
  const navigate = useNavigate();
  const [, setShowStartButton] = useState(true);
  const [value, setValue] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleStartListening = () => {
    setShowStartButton(false);
    navigate("/course/intermediate/my-fascinating-morning/lesson/listening");
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

      {value === 1 && <Test />}
      {value === 2 && <Grammar />}
      {value === 3 && <Listening />}
      {/* {value === 4 && <Speaking />} */}

    </div>
  );
};

export default Lesson;























// breadcrumbs

{/* <Breadcrumbs paths={[
        { label: "Intermediate", url: "/course/intermediate" },
        // { label: "My Fascinating Morning", url: "/course/intermediate/my-fascinating-morning" },
        { label: "My Fascinating Morning", url: "/course/intermediate/my-fascinating-morning/lesson" }
      ]} /> */}

      {/* <Tabs
        className="lesson-tabs"
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        orientation={isSmallScreen() ? "vertical" : "horizontal"}
        variant="scrollable"
      >
        <Tab label="Reading" />
        <Tab label="Test" />
        <Tab label="Grammar" />
        <Tab label="Listening" />
      </Tabs> */}



// no crumbs
// import React, { useState, useEffect, useRef } from "react";
// import { Tabs, Tab, Button } from "@material-ui/core";
// import ReadingText from "./ReadingText";
// import Test from "./Test";
// import Grammar from "./Grammar";
// import Listening from "./Listening";
// import useRandomQuestion from "../../../features/Random-questions-reading/UseRandomQuestions";
// import RandomQuestions from "./RandomQuestions";
// import { useNavigate } from "react-router-dom";
// import "../../../../styles/Lessons.css";

// const Lesson: React.FC = () => {
//   const navigate = useNavigate();
//   const [showStartButton, setShowStartButton] = useState(true);
//   const [] = useState(0);

//   const handleStartListening = () => {
//     setShowStartButton(false);
//     navigate("/course/intermediate/my-fascinating-morning/lesson/listening");
//     setValue(3);
//   };

//   const {
//     outputText,
//     askRandomQuestion,
//     isModalOpen,
//     toggleModal,
//   }: {
//     outputText: string;
//     askRandomQuestion: () => void;
//     isModalOpen: boolean;
//     toggleModal: () => void;
//   } = useRandomQuestion(RandomQuestions);

//   const [value, setValue] = useState(0);
//   const modalRef = useRef<HTMLDivElement>(null);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       askRandomQuestion();
//     }
//   }, [isModalOpen]);

//   // Определяем функцию, которая будет возвращать true для маленьких экранов (например, ширина меньше 600px)
//   const isSmallScreen = () => {
//     return window.innerWidth < 600;
//   };

//   return (
//     <div className="overall fade-in main-container-lessons" ref={modalRef}>
//       <Tabs
//         className="lesson-tabs"
//         value={value}
//         onChange={handleChange}
//         textColor="primary"
//         indicatorColor="primary"
//         orientation={isSmallScreen() ? "vertical" : "horizontal"} // Используем вертикальное расположение только на маленьких экранах
//         variant="scrollable" // Разрешаем прокрутку вкладок при необходимости
//       >
//         <Tab label="Reading" />
//         <Tab label="Test" />
//         <Tab label="Grammar" />
//         <Tab label="Listening" />
//       </Tabs>

//       {value === 0 && (
//         <>
//           <div className="reading-container">
//             <ReadingText />
//             <div className="choose-buttons">
//               <Button
//                 className="lesson-button"
//                 variant="contained"
//                 onClick={toggleModal}
//               >
//                 Tick here to speak
//               </Button>

//               <Button
//                 className="lesson-button"
//                 variant="contained"
//                 onClick={handleStartListening}
//               >
//                 Start Listening
//               </Button>
//             </div>
//           </div>
//           {isModalOpen && (
//             <div className="modal-container fade-in-fast" ref={modalRef}>
//               <div className="modal-content">
//                 <div className="modal-header">
//                   {/* <Button onClick={toggleModal}>Close</Button> */}
//                 </div>
//                 <div className="modal-body">
//                   {outputText && (
//                     <p className="random-questions text fade-in-fast">
//                       {outputText}
//                     </p>
//                   )}
//                   <div className="modal-buttons">
//                     <Button onClick={askRandomQuestion}>Next Question</Button>
//                     <Button onClick={toggleModal}>Close</Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </>
//       )}

//       {value === 1 && <Test />}
//       {value === 2 && <Grammar />}
//       {value === 3 && <Listening />}
//     </div>
//   );
// };

// export default Lesson;
