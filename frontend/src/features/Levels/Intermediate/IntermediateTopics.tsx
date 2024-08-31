import React from "react";
import { Link } from "react-router-dom";
import levelImage from "../../../assets/images/Intermediate/b11.png"
import morningImage from "../../../assets/images/Intermediate/my-fascinating-morning.png";
import interviewImage from "../../../assets/images/Intermediate/job-int.png";
import "../../../styles/LessonsList.css"

const IntermediateTopics: React.FC = () => {
  return (
    <div className="topics">
      <div className="level-name">
      <img className="level-image" src={levelImage} alt="level" />
      <h2> Intermediate Topics</h2>
      </div>
     
      <div className="topic-list">
        <Link to="my-fascinating-morning">
          <img className="lessons-list-item" src={morningImage} alt="My Fascinating Morning" />
        </Link>
        <Link to="jobinterview">
          <img className="lessons-list-item" src={interviewImage} alt="Job Interview" />
        </Link>
      </div>
    </div>
  );
};

export default IntermediateTopics;
