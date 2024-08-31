import React from "react";

interface VideoQuestionsProps {
  questions: string[];
}

const VideoQuestions: React.FC<VideoQuestionsProps> = ({ questions }) => {
  return (
    <div className="video-questions">
      <h3>Questions:</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default VideoQuestions;



