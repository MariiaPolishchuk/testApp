import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
// import Test from "./Test";
// import Grammar from "./Grammar";
// import Listening from "./Listening";
import Lesson from "./Lesson";
// import "../../../../styles/LessonDescription.css";
// import DragDropMFM from "./DragDropMFM";
import Layout from "./Tabs/Layout";
// import SynonymsPage from "./SynonymsPage";
// import vocabularyData from "./data";
// import VocabularyPracticePage from "./VocabularyPracticePage";

const CharacterTraits: React.FC = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStart = () => {
    setShowStartButton(false);
    navigate("/course/beginner/character-traits/lesson");
  };

  return (
    <div className="main-container-lessons">
      <div className="start-lesson">
        {/* <img className="lesson-name-icon" src="/src/assets/images/icons/dd.png" alt="" /> */}
        <h2 className="lesson-name">CharacterTraits</h2>
        <Link className="back-link" to="/course/beginner">
          &lt;Topics
        </Link>
      </div>
      {showStartButton && (
        <div className="description">
          <div className="description-content">
            <img
              className="descr-img"
              src="/src/assets/images/Beginner/CharacterTraitsDescr.png"
              alt=""
            />
            <div className="text description-text">
              <p>practice the use of present simple/ continuous and articles!</p>
              <p>
                pump your voc with the plenty of multitasking exercises and
                extensive glossary!
              </p>
              <p>
                watch the video, work on interactive listening and upgrade your
                level of speech perceiving!
              </p>
              <p>don't forget to work on Quizlet!</p>
            </div>
          </div>
          <Link
            to="/course/beginner/character-traits/lesson"
            className="lesson-link"
            onClick={handleStart}
          >
            Start &gt;
          </Link>
        </div>
      )}
      {!showStartButton && (
        <>
          <Layout>
            <Routes>
              <Route path="/lesson/" element={<Lesson />} />
              {/* <Route path="/lesson/test" element={<Test />} />
              <Route path="/lesson/test/:pageNumber" element={<Test />} />

              <Route path="/lesson/test/drag-drop" element={<DragDropMFM />} />
              <Route path="/lesson/test/find-synonyms" element={<SynonymsPage />} />
              <Route
                path="/lesson/test/voc-practise"
                element={
                  <VocabularyPracticePage
                    text={vocabularyData.text}
                    words={vocabularyData.words}
                  />
                }
              ></Route>
              <Route path="/lesson/grammar" element={<Grammar />} />
              <Route path="/lesson/listening" element={<Listening />} /> */}
            </Routes>
          </Layout>
        </>
      )}
    </div>
  );
};

export default CharacterTraits;
