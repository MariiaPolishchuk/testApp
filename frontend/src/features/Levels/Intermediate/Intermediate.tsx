import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import IntermediateTopics from "./IntermediateTopics";
import MyFascinatingMorning from "./MyFascinatingMorning/MyFascinatingMorning";
import JobInterview from "./JobInterview/JobInterview";
import "../../../styles/NavRoot.css";

const Intermediate: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const selectedLevel = pathParts[1] || null;
  const selectedLesson = pathParts[2] || null;

  const formattedLevel = selectedLevel ? selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1) : null;

  return (
    <div id="intermediate">
      {selectedLevel && (
        <div className="nav-bar-root">
          <Link to={`/course/${selectedLevel}`}>{formattedLevel}</Link> {" > "}
          {selectedLesson && (
            <span>
              {selectedLesson === "my-fascinating-morning" ? (
                <Link to="/course/intermediate/my-fascinating-morning/lesson">My Fascinating Morning</Link>
              ) : selectedLesson === "jobinterview" ? (
                <Link to="/course/intermediate/jobinterview/lesson">Job Interview</Link>
              ) : null}
            </span>
          )}
        </div>
      )}
      <Routes>
        <Route path="/" element={<IntermediateTopics />} />
        <Route path="my-fascinating-morning/*" element={<MyFascinatingMorning />} />
        <Route path="jobinterview/*" element={<JobInterview />} />
      </Routes>
    </div>
  );
};

export default Intermediate;
















// no crumbs

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import IntermediateTopics from "./IntermediateTopics";
// import MyFascinatingMorning from "./MyFascinatingMorning/MyFascinatingMorning";
// import JobInterview from "./JobInterview/JobInterview";

// const Intermediate: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<IntermediateTopics />} />
//       <Route path="my-fascinating-morning/*" element={<MyFascinatingMorning />} />
//       <Route path="jobinterview/*" element={<JobInterview />} />
//     </Routes>
//   );
// };

// export default Intermediate;




