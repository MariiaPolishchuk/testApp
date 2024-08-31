
// import React, { useState, useEffect } from "react";
// import {
//   getLevels,
//   addLevel,
//   deleteLevel,
//   getLessonsByLevel,
//   deleteLesson,
// } from "../../../services/api";
// import { Level, Lesson } from "../../../types/types";
// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import "./admin.css";

// const AdminPanel: React.FC = () => {
//   const [levels, setLevels] = useState<Level[]>([]);
//   const [lessons, setLessons] = useState<Lesson[]>([]);
//   const [selectedLevel, setSelectedLevel] = useState<string>("");
//   const navigate = useNavigate();


//   useEffect(() => {
//     const fetchLevels = async () => {
//       try {
//         const response = await getLevels();
//         setLevels(response.data);
//       } catch (error) {
//         console.error("Error fetching levels:", error);
//       }
//     };

//     fetchLevels();
//   }, []);


//   useEffect(() => {
//     const fetchLessons = async () => {
//       if (!selectedLevel) return;
//       try {
//         const response = await getLessonsByLevel(selectedLevel);
//         setLessons(response.data);
//       } catch (error) {
//         console.error("Error fetching lessons:", error);
//       }
//     };

//     fetchLessons();
//   }, [selectedLevel]);


//   const handleLevelSelect = (levelId: string) => {
//     setSelectedLevel(levelId);
//   };


//   const handleAddLevel = async (levelName: string) => {
//     try {
//       const response = await addLevel(levelName);
//       setLevels([...levels, response.data]);
//     } catch (error) {
//       console.error("Error adding level:", error);
//     }
//   };

  
//   const handleDeleteLesson = async (lessonId: string) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this lesson?"
//     );
//     if (confirmDelete) {
//       try {
//         await deleteLesson(lessonId);
//         setLessons(
//           lessons.filter(
//             (lesson) => lesson._id && lesson._id.toString() !== lessonId
//           )
//         );
//       } catch (error) {
//         console.error("Error deleting lesson:", error);
//       }
//     }
//   };

  
//   const handleDeleteLevel = async (levelId: string) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this level?"
//     );
//     if (confirmDelete) {
//       try {
//         await deleteLevel(levelId);
//         setLevels(levels.filter((level) => level._id.toString() !== levelId));
//         if (selectedLevel === levelId) {
//           setSelectedLevel("");
//           setLessons([]);
//         }
//       } catch (error) {
//         console.error("Error deleting level:", error);
//       }
//     }
//   };

//   // return (
//   //   <div className="admin-container">
//   //     <Sidebar 
//   //       levels={levels} 
//   //       onLevelSelect={handleLevelSelect} 
//   //       onAddLevel={handleAddLevel} 
//   //     />
//   //     <div className="admin-content">
//   //       {/* <h2 className="admin-panel-h2">Lessons in Selected Level</h2> */}
//   //       {selectedLevel && (
//   //         <button
//   //           className="delete-level-button"
//   //           onClick={() => handleDeleteLevel(selectedLevel)}
//   //         >
//   //           Delete Selected Level
//   //         </button>
//   //       )}
//   //       {lessons.length > 0 ? (
//   //         <ul className="lesson-list">
//   //           {lessons.map((lesson) => (
//   //             <li key={lesson._id?.toString()} className="lesson-item">
//   //               {lesson.image ? (
//   //                 <img
//   //                   src={lesson.image}
//   //                   alt={lesson.title}
//   //                   className="lesson-image"
//   //                 />
//   //               ) : (
//   //                 <div className="lesson-placeholder">No Image</div>
//   //               )}
//   //               <div className="lesson-info">
//   //                 <Link
//   //                   to={`/course/${lesson.level}/${lesson._id}`}
//   //                   className="lesson-title"
//   //                 >
//   //                   {lesson.title}
//   //                 </Link>

//   //                 <div className="admin-buttons-lesson-list">
//   //                   <button
//   //                     className="edit-lesson-button"
//   //                     onClick={() =>
//   //                       navigate(`/admin-panel/edit-lesson/${lesson._id}`)
//   //                     }
//   //                   >
//   //                     Edit
//   //                   </button>
//   //                   <button
//   //                     className="delete-lesson-button"
//   //                     onClick={() =>
//   //                       lesson._id && handleDeleteLesson(lesson._id.toString())
//   //                     }
//   //                   >
//   //                     Delete
//   //                   </button>
//   //                 </div>
//   //               </div>
//   //             </li>
//   //           ))}
//   //         </ul>
//   //       ) : (
//   //         <p>No lessons available for the selected level.</p>
//   //       )}
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div className="admin-container">
//       <Sidebar 
//         levels={levels} 
//         onLevelSelect={handleLevelSelect} 
//         onAddLevel={handleAddLevel} 
//       />
//       <div className="admin-content">
//         {selectedLevel ? (
//           <>
//             <button
//               className="delete-level-button"
//               onClick={() => handleDeleteLevel(selectedLevel)}
//             >
//               Delete Selected Level
//             </button>
//             {lessons.length > 0 ? (
//               <ul className="lesson-list">
//                 {lessons.map((lesson) => (
//                   <li key={lesson._id?.toString()} className="lesson-item">
//                     {lesson.image ? (
//                       <img
//                         src={lesson.image}
//                         alt={lesson.title}
//                         className="lesson-image"
//                       />
//                     ) : (
//                       <div className="lesson-placeholder">No Image</div>
//                     )}
//                     <div className="lesson-info">
//                       <Link
//                         to={`/course/${lesson.level}/${lesson._id}`}
//                         className="lesson-title"
//                       >
//                         {lesson.title}
//                       </Link>
  
//                       <div className="admin-buttons-lesson-list">
//                         <button
//                           className="edit-lesson-button"
//                           onClick={() =>
//                             navigate(`/admin-panel/edit-lesson/${lesson._id}`)
//                           }
//                         >
//                           Edit
//                         </button>
//                         <button
//                           className="delete-lesson-button"
//                           onClick={() =>
//                             lesson._id && handleDeleteLesson(lesson._id.toString())
//                           }
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="admin-p">No lessons available for the selected level.</p>
//             )}
//           </>
//         ) : (
//           <p className="admin-p">Select level.</p>
//         )}
//       </div>
//     </div>
//   );
  
// };

// export default AdminPanel;




import React, { useState, useEffect } from "react";
import {
  getLevels,
  addLevel,
  deleteLevel,
  getLessonsByLevel,
  deleteLesson,
} from "../../../services/api";
import { Level, Lesson } from "../../../types/types";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./admin.css";

const AdminPanel: React.FC = () => {
  const [levels, setLevels] = useState<Level[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await getLevels();
        setLevels(response.data);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    fetchLevels();
  }, []);

  useEffect(() => {
    const fetchLessons = async () => {
      if (!selectedLevel) return;
      try {
        const response = await getLessonsByLevel(selectedLevel);
        setLessons(response.data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, [selectedLevel]);

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
  };

  const handleAddLevel = async (levelName: string) => {
    try {
      const response = await addLevel(levelName);
      setLevels([...levels, response.data]);
    } catch (error) {
      console.error("Error adding level:", error);
    }
  };

  const handleDeleteLesson = async (lessonId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lesson?"
    );
    if (confirmDelete) {
      try {
        await deleteLesson(lessonId);
        setLessons(
          lessons.filter(
            (lesson) => lesson._id && lesson._id.toString() !== lessonId
          )
        );
      } catch (error) {
        console.error("Error deleting lesson:", error);
      }
    }
  };

  const handleDeleteLevel = async (levelId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this level?"
    );
    if (confirmDelete) {
      try {
        await deleteLevel(levelId);
        setLevels(levels.filter((level) => level._id.toString() !== levelId));
        if (selectedLevel === levelId) {
          setSelectedLevel("");
          setLessons([]);
        }
      } catch (error) {
        console.error("Error deleting level:", error);
      }
    }
  };

  return (
    <div className="admin-container">
      <Sidebar 
        levels={levels} 
        onLevelSelect={handleLevelSelect} 
        onAddLevel={handleAddLevel} 
      />
      <div className="admin-content">
        {selectedLevel ? (
          <>
            <button
              className="delete-level-button"
              onClick={() => handleDeleteLevel(selectedLevel)}
            >
              Delete Selected Level
            </button>
            {lessons.length > 0 ? (
              <ul className="lesson-list">
                {lessons.map((lesson) => (
                  <li key={lesson._id?.toString()} className="lesson-item">
                    {lesson.image ? (
                      <img
                        src={lesson.image}
                        alt={lesson.title}
                        className="lesson-image"
                      />
                    ) : (
                      <div className="lesson-placeholder">No Image</div>
                    )}
                    <div className="lesson-info">
                      <Link
                        to={`/course/${lesson.level}/${lesson._id}`}
                        className="lesson-title"
                      >
                        {lesson.title}
                      </Link>

                      <div className="admin-buttons-lesson-list">
                        <button
                          className="edit-lesson-button"
                          onClick={() =>
                            navigate(`/admin-panel/edit-lesson/${lesson._id}`)
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="delete-lesson-button"
                          onClick={() =>
                            lesson._id && handleDeleteLesson(lesson._id.toString())
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="admin-p">No lessons available for the selected level.</p>
            )}
          </>
        ) : (
          <div className="welcome-box">
            <h2>Welcome to the Admin Dashboard!</h2>
            <p>
              To get started, select a level from the sidebar. You can then view, edit, or delete existing lessons.
            </p>
            <p>
              If you need to create a new level, use the "Add Level" option in the sidebar.
            </p>
            <p>
              Once a level is selected, you will be able to manage the lessons associated with that level, upload images, edit lesson content, and more.
            </p>
            <p>
              We hope you have a smooth experience managing your content. If you encounter any issues, feel free to contact support.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
