
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getLessonById } from '../../../services/api';
// import { Lesson } from '../../../types/types';

// const LessonDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [lessonData, setLessonData] = useState<Lesson | null>(null);

//   useEffect(() => {
//     const fetchLesson = async () => {
//       try {
//         if (id) {
//           const response = await getLessonById(id);
//           setLessonData(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching lesson details:', error);
//       }
//     };

//     fetchLesson();
//   }, [id]);

//   if (!lessonData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{lessonData.title}</h1>
//       <img src={lessonData.titleImage} alt={lessonData.title} /> 
//       <p>{lessonData.description}</p>
//       <Link to={`/lessons/${lessonData._id}`}>
//         <button>Start</button>
//       </Link>
//     </div>
//   );
// };

// export default LessonDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { getLessonById } from '../../../services/api';
// import { Lesson } from '../../../types/types';
// import './LessonDetails.css';

// const LessonDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [lessonData, setLessonData] = useState<Lesson | null>(null);

//   useEffect(() => {
//     const fetchLesson = async () => {
//       try {
//         if (id) {
//           const response = await getLessonById(id);
//           setLessonData(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching lesson details:', error);
//       }
//     };

//     fetchLesson();
//   }, [id]);

//   if (!lessonData) {
//     return <div className="lesson-loading">Loading...</div>;
//   }

//   return (
//     <div className="lesson-details-container">
//       <div className="lesson-details-content">
//         <div className="lesson-image-container">
//           <img src={lessonData.titleImage} alt={lessonData.title} className="lesson-image" />
//         </div>
//         <div className="lesson-text-container">
//           <h1 className="lesson-title">{lessonData.title}</h1>
//           <p className="lesson-description">{lessonData.description}</p>
//           <Link to={`/lessons/${lessonData._id}`}>
//             <button className="start-button">Start Lesson</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LessonDetails;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLessonById } from '../../../services/api';
import { Lesson } from '../../../types/types';
import './LessonDetails.css';

const LessonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lessonData, setLessonData] = useState<Lesson | null>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        if (id) {
          const response = await getLessonById(id);
          setLessonData(response.data);
        }
      } catch (error) {
        console.error('Error fetching lesson details:', error);
      }
    };

    fetchLesson();
  }, [id]);

  if (!lessonData) {
    return <div className="lesson-loading">Loading...</div>;
  }

  return (
    <div className="lesson-details-container">
      <div className="lesson-details-content">
        <div className="lesson-image-container">
          <img src={lessonData.image} alt={lessonData.title} className="lesson-image" />
        </div>
        <div className="lesson-text-container">
          <h1 className="lesson-title">{lessonData.title}</h1>
          <p className="lesson-description">{lessonData.description}</p>
          <Link to={`/lessons/${lessonData._id}`}>
            <button className="start-button-user">Start Lesson</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
