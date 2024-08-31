// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getLessonById, updateLesson, getLevels } from "../../../services/api";
// import uploadFiles from "../../../services/uploadService";
// import { Level, Lesson } from "../../../types/types";
// import {
//   Box,
//   Tabs,
//   Tab,
//   Button,
//   TextField,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import VocabularySection from "../AddLesson/Sections/VocabularySection/VocabularySection";
// import ReadingSection from "../AddLesson/Sections/ReadingSection/ReadingSection";
// import GrammarSection from "../AddLesson/Sections/GrammarSection/GrammarSection";
// import ListeningSection from "../AddLesson/Sections/ListeningSection/ListeningSection";
// import "./editLesson.css";

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
//   _id: undefined
// };

// const EditLessonPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [lessonData, setLessonData] = useState<Lesson>(initialLessonState);
//   const [levels, setLevels] = useState<Level[]>([]);
//   const [currentTab, setCurrentTab] = useState<number>(0);

//   useEffect(() => {
//     if (!id) {
//       console.error("Lesson ID is not provided");
//       return;
//     }

//     const fetchLessonData = async () => {
//       try {
//         const response = await getLessonById(id);
//         setLessonData(response.data);
//       } catch (error) {
//         console.error("Error fetching lesson data:", error);
//       }
//     };

//     const fetchLevels = async () => {
//       try {
//         const response = await getLevels();
//         setLevels(response.data);
//       } catch (error) {
//         console.error("Error fetching levels:", error);
//       }
//     };

//     fetchLessonData();
//     fetchLevels();
//   }, [id]);

//   const handleSave = async () => {
//     if (!id) {
//       console.error("Lesson ID is not available");
//       return;
//     }

//     try {
//       await updateLesson(id, lessonData);
//       navigate("/admin-panel");
//     } catch (error) {
//       console.error("Error updating lesson:", error);
//     }
//   };

//   const handleFileUpload = async (files: { [key: string]: File | File[] }) => {
//     try {
//       const response = await uploadFiles(files);
//       setLessonData(prev => ({
//         ...prev,
//         titleImage: response.titleImage ? response.titleImage[0] : prev.titleImage,
//         image: response.image ? response.image[0] : prev.image,
//         sections: {
//           ...prev.sections,
//           listening: response.listeningAudio
//             ? response.listeningAudio.map((audioUrl, index) => ({
//                 ...prev.sections.listening[index],
//                 audioUrl,
//               }))
//             : prev.sections.listening,
//         },
//       }));
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };

//   return (
//     <Box className="edit-lesson-container">
//       <Typography variant="h4" className="edit-lesson-title">Edit Lesson</Typography>
//       <FormControl fullWidth>
//         <InputLabel id="level-label">Level</InputLabel>
//         <Select
//           labelId="level-label"
//           value={lessonData.level || ""}
//           onChange={(e) =>
//             setLessonData(prev => ({
//               ...prev,
//               level: e.target.value as string,
//             }))
//           }
//         >
//           {levels.length === 0 ? (
//             <MenuItem value="" disabled>
//               Loading levels...
//             </MenuItem>
//           ) : (
//             levels.map(level => (
//               <MenuItem key={level._id} value={level._id}>
//                 {level.name}
//               </MenuItem>
//             ))
//           )}
//         </Select>
//       </FormControl>
//       <TextField
//         label="Title"
//         fullWidth
//         value={lessonData.title}
//         onChange={e =>
//           setLessonData(prev => ({
//             ...prev,
//             title: e.target.value,
//           }))
//         }
//         margin="normal"
//       />
//       <TextField
//         label="Description"
//         fullWidth
//         multiline
//         rows={4}
//         value={lessonData.description}
//         onChange={e =>
//           setLessonData(prev => ({
//             ...prev,
//             description: e.target.value,
//           }))
//         }
//         margin="normal"
//       />
//       <Button variant="contained" component="label" className="upload-button">
//         Upload Title Image
//         <input
//           type="file"
//           hidden
//           onChange={e => {
//             if (e.target.files) {
//               handleFileUpload({ titleImage: e.target.files[0] });
//             }
//           }}
//         />
//       </Button>
//       {lessonData.titleImage && (
//         <img src={lessonData.titleImage} alt="Title" className="uploaded-image" />
//       )}
//       <Button variant="contained" component="label" className="upload-button">
//         Upload Image
//         <input
//           type="file"
//           hidden
//           onChange={e => {
//             if (e.target.files) {
//               handleFileUpload({ image: e.target.files[0] });
//             }
//           }}
//         />
//       </Button>
//       {lessonData.image && (
//         <img src={lessonData.image} alt="Description" className="uploaded-image" />
//       )}
      
//       <Box className="tabs-container">
//         <Tabs
//           value={currentTab}
//           onChange={(e, newValue) => setCurrentTab(newValue)}
//         >
//           <Tab label="Reading" />
//           <Tab label="Vocabulary" />
//           <Tab label="Grammar" />
//           <Tab label="Listening" />
//         </Tabs>
//         <Box sx={{ marginTop: 2 }}>
//           {currentTab === 0 && lessonData && (
//             <ReadingSection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//           {currentTab === 1 && lessonData && (
//             <VocabularySection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//           {currentTab === 2 && lessonData && (
//             <GrammarSection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//           {currentTab === 3 && lessonData && (
//             <ListeningSection
//               lessonData={lessonData}
//               setLessonData={setLessonData}
//             />
//           )}
//         </Box>
//       </Box>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSave}
//         className="save-button"
//       >
//         Save Changes
//       </Button>
//     </Box>
//   );
// };

// export default EditLessonPage;



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLessonById, updateLesson, getLevels } from "../../../services/api";
import uploadFiles from "../../../services/uploadService";
import { Level, Lesson } from "../../../types/types";
import {
  Box,
  Tabs,
  Tab,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import Sidebar from "../AdminPanel/Sidebar";
import VocabularySection from "../AddLesson/Sections/VocabularySection/VocabularySection";
import ReadingSection from "../AddLesson/Sections/ReadingSection/ReadingSection";
import GrammarSection from "../AddLesson/Sections/GrammarSection/GrammarSection";
import ListeningSection from "../AddLesson/Sections/ListeningSection/ListeningSection";
import "./editLesson.css";

const initialLessonState: Lesson = {
  title: "",
  titleImage: "",
  description: "",
  image: "",
  level: "",
  sections: {
    reading: "",
    vocabulary: [],
    grammarMultipleChoice: [],
    grammar: [],
    listening: [],
    watchingVideo: [],
    readingQuestions: [],
    synonyms: [],
    test: [],
    
  },
  _id: undefined,
};

const EditLessonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [lessonData, setLessonData] = useState<Lesson>(initialLessonState);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      console.error("Lesson ID is not provided");
      return;
    }

    const fetchLessonData = async () => {
      try {
        const response = await getLessonById(id);
        setLessonData(response.data);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };

    const fetchLevels = async () => {
      try {
        const response = await getLevels();
        setLevels(response.data);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    fetchLessonData();
    fetchLevels();
  }, [id]);

  const handleSave = async () => {
    if (!id) {
      console.error("Lesson ID is not available");
      return;
    }

    try {
      await updateLesson(id, lessonData);
      navigate("/admin-panel");
    } catch (error) {
      console.error("Error updating lesson:", error);
    }
  };

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
          Edit Lesson
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
          onClick={handleSave}
          className="save-lesson-button"
          disabled={isUploading}
        >
          Save Changes
        </Button>
</div>
       
      </Box>
    </Box>
  );
};

export default EditLessonPage;

