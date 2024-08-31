// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Header from './shared/ui/Header/Header';
// import Home from './features/HomePage/HomePage';
// import Footer from './shared/ui/Footer/Footer';
// import CourseLevels from './Components/LessonsComponents/CourseLevels/CourseLevels';
// import AdminPanel from './Components/CMS/AdminPanel/AdminPanel';
// import LessonList from './Components/CMS/AdminPanel/LessonList';
// import EditLesson from './Components/CMS/AdminPanel/EditLesson';
// import AddLessonPage from './Components/CMS/AddLesson/AddLessonPage';
// import './App.css';

// const App: React.FC = () => {
//   const location = useLocation();
//   const [user] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   return (
//     <div>
//       <Header user={user} onLogout={() => {}} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/course/*" element={<CourseLevels />} />
//         <Route path="/admin-panel/*" element={<AdminPanel />} />
//         <Route path="/admin-panel/edit-lesson/:lessonId" element={<EditLesson />} />
//         <Route path="/admin-panel/my-lessons" element={<LessonList />} />
//         <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './features/HomePage/HomePage';
// import AdminPanel from './Components/CMS/AdminPanel/AdminPanel';
// import AddLessonPage from './Components/CMS/AddLesson/AddLessonPage';
// import LessonList from './Components/LessonsComponents/UserLessonLIst/LessonList';
// import CourseLevels from './Components/LessonsComponents/CourseLevels/CourseLevels';
// import LessonDescription from './Components/LessonsComponents/LessonDetail/LessonDetail';
// import Header from './shared/ui/Header/Header';
// import Footer from './shared/ui/Footer/Footer';
// import { useAuth0 } from '@auth0/auth0-react';
// import { getLevels } from './services/api';

// const App: React.FC = () => {
//   const { user, logout } = useAuth0();
//   const [levels, setLevels] = useState([]);

//   useEffect(() => {
//     const fetchLevels = async () => {
//       try {
//         const response = await getLevels(); // Получение всех уровней
//         setLevels(response.data);
//       } catch (error) {
//         console.error('Error fetching levels:', error);
//       }
//     };

//     fetchLevels();
//   }, []);

//   return (
//     <div>
//       {/* Передаем пользователя и уровни в Header */}
//       <Header user={user ?? null} onLogout={logout} levels={levels} />

//       {/* Определяем маршруты */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/admin-panel/*" element={<AdminPanel />} />
//         <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
//         <Route path="/course/:level" element={<CourseLevels />} />
//         <Route path="/lessons" element={<LessonList />} />
//         <Route path="/lessons/:id" element={<LessonDescription />} />
//       </Routes>

//       {/* Footer на всех страницах */}
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './features/HomePage/HomePage';
// import AdminPanel from './Components/CMS/AdminPanel/AdminPanel';
// import AddLessonPage from './Components/CMS/AddLesson/AddLessonPage';
// import LessonList from './Components/LessonsComponents/UserLessonLIst/LessonList';
// import CourseLevels from './Components/LessonsComponents/CourseLevels/CourseLevels';
// import LessonDescription from './Components/LessonsComponents/LessonDetail/LessonDetail';
// import Header from './shared/ui/Header/Header';
// import Footer from './shared/ui/Footer/Footer';
// import { useAuth0 } from '@auth0/auth0-react';
// import { getLevels } from './services/api';

// const App: React.FC = () => {
//   const { user, logout } = useAuth0();
//   const [levels, setLevels] = useState([]);

//   useEffect(() => {
//     const fetchLevels = async () => {
//       try {
//         const response = await getLevels(); // Получение всех уровней
//         setLevels(response.data);
//       } catch (error) {
//         console.error('Error fetching levels:', error);
//       }
//     };

//     fetchLevels();
//   }, []);

//   return (
//     <div>
//       <Header user={user ?? null} onLogout={logout} levels={levels} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/admin-panel/*" element={<AdminPanel />} />
//         <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
//         <Route path="/course/:level" element={<CourseLevels />} />
//         <Route path="/course/:level/:id" element={<LessonDescription />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './features/HomePage/HomePage';
// import AdminPanel from './Components/CMS/AdminPanel/AdminPanel';
// import AddLessonPage from './Components/CMS/AddLesson/AddLessonPage';

// import CourseLevels from './Components/LessonsComponents/CourseLevels/CourseLevels';
// import LessonDescription from './Components/LessonsComponents/LessonDetail/LessonDetail';
// import Header from './shared/ui/Header/Header';
// import Footer from './shared/ui/Footer/Footer';
// import { useAuth0 } from '@auth0/auth0-react';
// import { getLevels } from './services/api';
// import { Level } from './types/types';

// const App: React.FC = () => {
//   const { user, logout } = useAuth0();
//   const [levels, setLevels] = useState<Level[]>([]);

//   useEffect(() => {
//     const fetchLevels = async () => {
//       try {
//         const response = await getLevels(); // Получение всех уровней
//         setLevels(response.data);
//       } catch (error) {
//         console.error('Error fetching levels:', error);
//       }
//     };

//     fetchLevels();
//   }, []);

//   return (
//     <div>
//       <Header user={user ?? null} onLogout={logout} levels={levels} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/admin-panel/*" element={<AdminPanel />} />
//         <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
//         <Route path="/course/:level" element={<CourseLevels />} />
//         <Route path="/course/:level/:id" element={<LessonDescription />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./features/HomePage/HomePage";
// import AdminPanel from "./Components/CMS/AdminPanel/AdminPanel";
// import AddLessonPage from "./Components/CMS/AddLesson/AddLessonPage/AddLessonPage";
// import LessonDetails from "./Components/LessonsComponents/LessonDetails/LessonDetails";
// import EditLessonPage from "./Components/CMS/EditLessonPage/EditLessonPage"; // Страница для редактирования урока
// import Header from "./shared/ui/Header/Header";
// import Footer from "./shared/ui/Footer/Footer";
// import { useAuth0 } from "@auth0/auth0-react";
// import { getLevels } from "./services/api";
// import { Level } from "./types/types";
// import UserLessonPage from "./Components/user/UserLessonPage/UserLessonPage";
// import LessonList from "./Components/user/UserLessonList/LessonList";
// import './App.css'

// const App: React.FC = () => {
//   const { user, logout } = useAuth0();
//   const [levels, setLevels] = useState<Level[]>([]);

//   useEffect(() => {
//     const fetchLevels = async () => {
//       try {
//         const response = await getLevels(); // Получение всех уровней
//         setLevels(response.data);
//       } catch (error) {
//         console.error("Error fetching levels:", error);
//       }
//     };

//     fetchLevels();
//   }, []);

//   return (
//     <div>
//       <Header user={user ?? null} onLogout={logout} levels={levels} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/admin-panel" element={<AdminPanel />} />
//         <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
//         <Route
//           path="/admin-panel/edit-lesson/:id"
//           element={<EditLessonPage />}
//         />
//         {/* Маршрут для деталей урока */}
//         <Route path="/course/:level" element={<LessonList />} /> {/* Этот маршрут отвечает за вывод уроков по уровню */}
//         <Route path="/course/:level/:id" element={<LessonDetails />} /> {/* Маршрут для деталей урока */}
//         <Route path="/lessons/:lessonId" element={<UserLessonPage />} /> {/* Страница урока */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './features/HomePage/HomePage'
import AdminPanel from './Components/CMS/AdminPanel/AdminPanel';
import AddLessonPage from './Components/CMS/AddLesson/AddLessonPage/AddLessonPage';
import LessonDetails from './Components/LessonsComponents/LessonDetails/LessonDetails';
import EditLessonPage from './Components/CMS/EditLessonPage/EditLessonPage';
import Header from './shared/ui/Header/Header';
import Footer from './shared/ui/Footer/Footer';
import { useAuth0 } from '@auth0/auth0-react';
import { getLevels } from './services/api';
import { Level } from './types/types';

import UserLessonPage from './Components/user/UserLessonPage/UserLessonPage';
import LessonList from './Components/user/UserLessonList/LessonList';
import './App.css';

const App: React.FC = () => {
  const { user, logout } = useAuth0();
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await getLevels(); // Получение всех уровней
        setLevels(response.data);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    fetchLevels();
  }, []);

  return (
    <div>
      <Header user={user ?? null} onLogout={logout} levels={levels} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
        <Route path="/admin-panel/edit-lesson/:id" element={<EditLessonPage />} />
        <Route path="/course/:level" element={<LessonList />} />
        <Route path="/course/:level/:id" element={<LessonDetails />} />
        <Route path="/lessons/:lessonId" element={<UserLessonPage />} /> {/* Маршрут для отображения заданий урока */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
