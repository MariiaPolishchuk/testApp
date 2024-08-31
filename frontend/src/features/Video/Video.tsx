import React, { useState } from "react";
import Button from "@mui/material/Button";
import VideoText from "./VideoText";
import { VideoData } from "./types";
import "../../styles/Video.css";

interface VideoProps {
  lesson: VideoData;
}

const Video: React.FC<VideoProps> = ({ lesson }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="video-block fade-in">
      <div className="block-name">
        <h3 className="video-block-name">{lesson.title}</h3>
        <h4>{lesson.description}</h4>
      </div>

      <div className="coffee-history-container">
        <div className="video-info">
          <VideoText text={lesson.text} tooltips={lesson.tooltips} />

          <div className="video-container">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src={lesson.videoLink}
                title="Lesson Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="button-sing">
          <Button
            className="lesson-button"
            variant="contained"
            onClick={handleOpenModal}
          >
            Start Speaking!
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-container fade-in-fast">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Speaking Task:</h2>
            </div>
            <div className="modal-body">
              <p className="random-questions text fade-in-fast">
                {lesson.questions[currentQuestionIndex]}
              </p>
              <div className="modal-buttons">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous Question
                </Button>
                <Button
                  onClick={handleNextQuestion}
                  disabled={
                    currentQuestionIndex === lesson.questions.length - 1
                  }
                >
                  Next Question
                </Button>
                <Button onClick={handleCloseModal}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
