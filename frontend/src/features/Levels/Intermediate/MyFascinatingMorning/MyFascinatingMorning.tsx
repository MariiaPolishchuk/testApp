import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Test from "./TestPage/Test";
import Grammar from "./GrammarPage/GrammarPage";
import Listening from "./ListeningPage/Listening";
import Lesson from "./Lesson";
import "../../../../styles/LessonDescription.css";
import DragDropMFM from "./DragSentences/DragDropMFM";
import Layout from "./Tabs/Tabs";
import SynonymsPage from "./SynonymsPage/SynonymsPage";
import VocabularyPracticePage from "./VocabularyPracticePage";
import Button from "@mui/material/Button";
import Video from "../../../Video/Video";
import { videoData } from "./CoffeeHistory/videoData";

const MyFascinatingMorning: React.FC = () => {
  const navigate = useNavigate();
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStart = () => {
    setShowStartButton(false);
    navigate("/course/intermediate/my-fascinating-morning/lesson");
  };

  return (
    <div className="main-container-lessons">
      <div className="start-lesson">
        <h2 className="lesson-name">My Fascinating Morning</h2>
        <Link className="back-link" to="/course/intermediate">
          &lt;
        </Link>
      </div>
      {showStartButton && (
        <div className="description">
          <div className="description-content">
            <img
              className="descr-img"
              src="/src/assets/images/descrMyFascinatingMorning.png"
              alt=""
            />
            <div className="text description-text">
              <p>practice the use of present tenses!</p>
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
          <Button
            variant="contained"
            color="primary"
            className="lesson-start-button"
            onClick={handleStart}
          >
            Start
          </Button>
        </div>
      )}
      {!showStartButton && (
        <>
          <Layout>
            <Routes>
              <Route path="/lesson/" element={<Lesson />} />
              <Route path="/lesson/test" element={<Test />} />
              <Route path="/lesson/test/:pageNumber" element={<Test />} />
              <Route path="/lesson/test/drag-drop" element={<DragDropMFM />} />
              <Route
                path="/lesson/test/find-synonyms"
                element={<SynonymsPage />}
              />

              <Route
                path="/lesson/test/voc-practise"
                element={<VocabularyPracticePage />}
              ></Route>
              <Route path="/lesson/grammar" element={<Grammar />} />
              <Route path="/lesson/listening" element={<Listening />} />

              <Route
                path="/lesson/listening/video"
                element={<Video lesson={videoData[0]} />}
              />
            </Routes>
          </Layout>
        </>
      )}
    </div>
  );
};

export default MyFascinatingMorning;
