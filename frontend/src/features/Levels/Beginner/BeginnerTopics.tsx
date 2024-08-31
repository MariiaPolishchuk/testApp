import React from "react";
import { Link } from "react-router-dom";
import levelImage from "../../../assets/images/Beginner/A1.png"
import lessonImage from "../../../assets/images/Beginner/CharacterTraitsIcon.png";
import "../../../styles/LessonsList.css"

const IntermediateTopics: React.FC = () => {
  return (
    <div className="topics">
      <div className="level-name">
      <img className="level-image" src={levelImage} alt="level" />
      <h2> Beginner Topics</h2>
      </div>
     
      <div className="topic-list">
        <Link to="character-traits">
          <img className="lessons-list-item" src={lessonImage} alt="Character Traits" />
        </Link>
      </div>
    </div>
  );
};

export default IntermediateTopics;