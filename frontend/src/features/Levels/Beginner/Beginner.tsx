import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import BeginnerTopics from "./BeginnerTopics";
import CharacterTraits from "./CharacterTraits/CharacterTraits";
import "../../../styles/NavRoot.css";



const Beginner: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const selectedLevel = pathParts[1] || null;
  const selectedLesson = pathParts[2] || null;

  const formattedLevel = selectedLevel
    ? selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)
    : null;

  return (
    <div id="beginner">
      {selectedLevel && (
        <div className="nav-bar-root">
          <Link to={`/course/${selectedLevel}`}>{formattedLevel}</Link> {" > "}
          {selectedLesson && (
            <span>
              {selectedLesson === "character-traits" ? (
                <Link to="/course/beginner/character-traits/lesson">
                 Character Traits
                </Link>
              ) : selectedLesson === "jobinterview" ? (
                <Link to="/course/beginner/jobinterview/lesson">
                  Job Interview
                </Link>
              ) : null}
            </span>
          )}
        </div>
      )}
      <Routes>
        <Route path="/" element={<BeginnerTopics />} />
        <Route
          path="character-traits/*"
          element={<CharacterTraits />}
        />
        {/* <Route path="jobinterview/*" element={<JobInterview />} /> */}
      </Routes>
    </div>
  );
};

export default Beginner;
