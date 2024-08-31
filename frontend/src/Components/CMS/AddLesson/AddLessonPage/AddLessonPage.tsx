// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { addLesson, getLevels } from "../../../../services/api";
// import uploadFiles from "../../../../services/uploadService";
// import {
//   Tabs,
//   Tab,
//   Box,
//   Button,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import { Lesson, Level } from "../../../../types/types";
// import Sidebar from "../../AdminPanel/Sidebar";
// import GrammarSection from "../Sections/GrammarSection/GrammarSection";
// import ListeningSection from "../Sections/ListeningSection/ListeningSection";
// import ReadingSection from "../Sections/ReadingSection/ReadingSection";
// import VocabularySection from "../Sections/VocabularySection/VocabularySection";
// import "./addLesson.css";

// const initialLessonState: Lesson = {
//   title: "",
//   titleImage: "",
//   description: "",
//   image: "",
//   level: "",
//   sections: {
//     reading: "",
//     vocabulary: [],
//     grammar: [],
//     listening: [],
//     watchingVideo: [],
//     readingQuestions: [],
//     synonyms: [],
//     test: [], 
//   },
//   _id: undefined,
// };

// const AddLessonPage: React.FC = () => {
//   const [levels, setLevels] = useState<Level[]>([]);
//   const [lessonData, setLessonData] = useState<Lesson>(initialLessonState);
//   const [currentTab, setCurrentTab] = useState<number>(0);
//   const [isUploading, setIsUploading] = useState<boolean>(false);
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

//   const handleFileUpload = async (
//     file: File,
//     field: "image" | "titleImage"
//   ) => {
//     setIsUploading(true);
//     const fileData = { [field]: file };

//     try {
//       const response = await uploadFiles(fileData);
//       if (response[field]) {
//         setLessonData((prev) => ({
//           ...prev,
//           [field]: response[field][0],
//         }));
//       }
//     } catch (error) {
//       console.error(`Error uploading ${field}:`, error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const handleSaveLesson = async () => {
//     if (isUploading) {
//       console.log("Загрузка файлов еще не завершена.");
//       return;
//     }

//     if (!lessonData.titleImage || !lessonData.image) {
//       console.error("Изображения отсутствуют.");
//       return;
//     }

//     try {
//       const response = await addLesson(lessonData);

//       if (response.status >= 200 && response.status < 300) {
//         const createdLessonId = response.data._id;
//         navigate(`/course/${lessonData.level}/${createdLessonId}`);
//       } else {
//         console.error("Error saving lesson:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error saving lesson:", error);
//     }
//   };

//   return (
//     <Box className="add-lesson-layout">
//       <Sidebar
//         levels={levels}
//         onLevelSelect={(id) => setLessonData({ ...lessonData, level: id })}
//         onAddLevel={(name) =>
//           setLevels([...levels, { _id: `${levels.length + 1}`, name }])
//         }
//       />

//       <Box className="add-lesson-content">
//         <Typography variant="h4" className="edit-lesson-title">
//           Create Lesson
//         </Typography>

//         <FormControl fullWidth margin="normal">
//           <InputLabel id="level-select-label">Выберите уровень</InputLabel>
//           <Select
//             labelId="level-select-label"
//             value={lessonData.level}
//             onChange={(e) =>
//               setLessonData({ ...lessonData, level: e.target.value })
//             }
//           >
//             {levels.map((level) => (
//               <MenuItem key={level._id} value={level._id}>
//                 {level.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         <TextField
//           label="Название урока"
//           value={lessonData.title}
//           onChange={(e) =>
//             setLessonData({ ...lessonData, title: e.target.value })
//           }
//           fullWidth
//           margin="normal"
//         />

//         <TextField
//           label="Описание урока"
//           value={lessonData.description}
//           onChange={(e) =>
//             setLessonData({ ...lessonData, description: e.target.value })
//           }
//           fullWidth
//           multiline
//           margin="normal"
//         />

//         <Button variant="contained" component="label" className="upload-button">
//           Upload Title Image
//           <input
//             type="file"
//             hidden
//             onChange={(e) =>
//               e.target.files &&
//               handleFileUpload(e.target.files[0], "titleImage")
//             }
//           />

//           <div>

            
//           </div>
//         </Button>
//         {isUploading ? (
//           <Box display="flex" justifyContent="center" mt={2}>
//             <CircularProgress />
//           </Box>
//         ) : (
//           lessonData.titleImage && (
//             <img
//               src={lessonData.titleImage}
//               alt={lessonData.title}
//               className="uploaded-image"
//             />
//           )
//         )}

//         <Button variant="contained" component="label" className="upload-button">
//           Upload Image
//           <input
//             type="file"
//             hidden
//             onChange={(e) =>
//               e.target.files && handleFileUpload(e.target.files[0], "image")
//             }
//           />
//         </Button>
//         {isUploading ? (
//           <Box display="flex" justifyContent="center" mt={2}>
//             <CircularProgress />
//           </Box>
//         ) : (
//           lessonData.image && (
//             <img
//               src={lessonData.image}
//               alt={lessonData.title}
//               className="uploaded-image"
//             />
//           )
//         )}

//         <Tabs
//           value={currentTab}
//           onChange={(e, newValue) => setCurrentTab(newValue)}
//         >
//           <Tab label="Reading" />
//           <Tab label="Vocabulary" />
//           <Tab label="Grammar" />
//           <Tab label="Listening" />
//           <Tab label="Watching Video" />
//         </Tabs>

//         <Box margin="normal">
//           {currentTab === 0 && (
//             <ReadingSection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//           {currentTab === 1 && (
//             <VocabularySection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//           {currentTab === 2 && (
//             <GrammarSection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//           {currentTab === 3 && (
//             <ListeningSection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//         </Box>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSaveLesson}
//           fullWidth
//           disabled={isUploading}
//         >
//           Сохранить урок
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AddLessonPage;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addLesson, getLevels } from "../../../../services/api";
import uploadFiles from "../../../../services/uploadService";
import {
  Tabs,
  Tab,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Lesson, Level } from "../../../../types/types";
import Sidebar from "../../AdminPanel/Sidebar";
import GrammarSection from "../Sections/GrammarSection/GrammarSection";
import ListeningSection from "../Sections/ListeningSection/ListeningSection";
import ReadingSection from "../Sections/ReadingSection/ReadingSection";
import VocabularySection from "../Sections/VocabularySection/VocabularySection";
import "./addLesson.css";

const initialLessonState: Lesson = {
  title: "",
  titleImage: "",
  description: "",
  image: "",
  level: "",
  sections: {
    reading: "",
    vocabulary: [],
    grammar: [],
    grammarMultipleChoice: [],
    listening: [],
    watchingVideo: [],
    readingQuestions: [],
    synonyms: [],
    test: [], 
  },
  _id: undefined,
};

const AddLessonPage: React.FC = () => {
  const [levels, setLevels] = useState<Level[]>([]);
  const [lessonData, setLessonData] = useState<Lesson>(initialLessonState);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
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

  const handleFileUpload = async (
    file: File,
    field: "image" | "titleImage"
  ) => {
    setIsUploading(true);
    const fileData = { [field]: file };

    try {
      const response = await uploadFiles(fileData);
      if (response[field]) {
        setLessonData((prev) => ({
          ...prev,
          [field]: response[field][0],
        }));
      }
    } catch (error) {
      console.error(`Error uploading ${field}:`, error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSaveLesson = async () => {
    if (isUploading) {
      console.log("Files are still uploading.");
      return;
    }

    if (!lessonData.titleImage || !lessonData.image) {
      console.error("Images are missing.");
      return;
    }

    try {
      const response = await addLesson(lessonData);

      if (response.status >= 200 && response.status < 300) {
        const createdLessonId = response.data._id;
        navigate(`/course/${lessonData.level}/${createdLessonId}`);
      } else {
        console.error("Error saving lesson:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving lesson:", error);
    }
  };

  return (
    <Box className="add-lesson-layout">
      <Sidebar
        levels={levels}
        onLevelSelect={(id) => setLessonData({ ...lessonData, level: id })}
        onAddLevel={(name) =>
          setLevels([...levels, { _id: `${levels.length + 1}`, name }])
        }
      />

      <Box className="add-lesson-content">
        <Typography variant="h4" className="edit-lesson-title">
          Create Lesson
        </Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel id="level-select-label">Select Level</InputLabel>
          <Select
            labelId="level-select-label"
            value={lessonData.level}
            onChange={(e) =>
              setLessonData({ ...lessonData, level: e.target.value })
            }
          >
            {levels.map((level) => (
              <MenuItem key={level._id} value={level._id}>
                {level.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Lesson Title"
          value={lessonData.title}
          onChange={(e) =>
            setLessonData({ ...lessonData, title: e.target.value })
          }
          fullWidth
          margin="normal"
        />

        <TextField
          label="Lesson Description"
          value={lessonData.description}
          onChange={(e) =>
            setLessonData({ ...lessonData, description: e.target.value })
          }
          fullWidth
          multiline
          margin="normal"
        />

        <Button variant="contained" component="label" className="upload-button">
          Upload Title Image
          <input
            type="file"
            hidden
            onChange={(e) =>
              e.target.files &&
              handleFileUpload(e.target.files[0], "titleImage")
            }
          />
        </Button>
        {isUploading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : (
          lessonData.titleImage && (
            <img
              src={lessonData.titleImage}
              alt={lessonData.title}
              className="uploaded-image"
            />
          )
        )}

        <Button variant="contained" component="label" className="upload-button">
          Upload Image
          <input
            type="file"
            hidden
            onChange={(e) =>
              e.target.files && handleFileUpload(e.target.files[0], "image")
            }
          />
        </Button>
        {isUploading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : (
          lessonData.image && (
            <img
              src={lessonData.image}
              alt={lessonData.title}
              className="uploaded-image"
            />
          )
        )}

        <Tabs
          value={currentTab}
          onChange={(e, newValue) => setCurrentTab(newValue)}
        >
          <Tab label="Reading" />
          <Tab label="Vocabulary" />
          <Tab label="Grammar" />
          <Tab label="Listening" />
          <Tab label="Watching Video" />
        </Tabs>

        <Box margin="normal">
          {currentTab === 0 && (
            <ReadingSection
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
          {currentTab === 1 && (
            <VocabularySection
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
          {currentTab === 2 && (
            <GrammarSection
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
          {currentTab === 3 && (
            <ListeningSection
              lessonData={lessonData}
              setLessonData={setLessonData}
            />
          )}
        </Box>
        <div className="button-create-update">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSaveLesson}
          className="save-lesson-button"
          disabled={isUploading}
        >
          Save Lesson
        </Button>
        </div>
       
      </Box>
    </Box>
  );
};

export default AddLessonPage;
