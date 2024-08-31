// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Typography, Button, List, ListItem, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { ListeningItem, Lesson } from '../../../../../types/types';
// import uploadFiles from '../../../../../services/uploadService';

// interface ListeningSectionCMSProps {
//   lessonData: Lesson;
//   setLessonData: React.Dispatch<React.SetStateAction<Lesson>>;
// }

// const ListeningSectionCMS: React.FC<ListeningSectionCMSProps> = ({ lessonData, setLessonData }) => {
//   const [newSentence, setNewSentence] = useState('');
//   const [showTime, setShowTime] = useState('00:00');
//   const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
//   const [audioFile, setAudioFile] = useState<File | null>(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   // Используем один URL для всего аудиофайла в текущем уроке
//   const [audioUrl, setAudioUrl] = useState<string | null>(lessonData.sections.listening[0]?.audioUrl || null);

//   useEffect(() => {
//     if (lessonData.sections.listening.length > 0) {
//       setCorrectAnswers([]);
//     }
//   }, [lessonData]);

//   const handleSentenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewSentence(e.target.value);
//     setCorrectAnswers(Array((e.target.value.match(/______+/g) || []).length).fill(''));
//   };

//   const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setShowTime(e.target.value);
//   };

//   const handleCorrectAnswerChange = (index: number, value: string) => {
//     setCorrectAnswers((prev) => {
//       const newAnswers = [...prev];
//       newAnswers[index] = value || '';
//       return newAnswers;
//     });
//   };

//   const convertTimeToSeconds = (time: string) => {
//     const [minutes, seconds] = time.split(':').map(Number);
//     return minutes * 60 + seconds;
//   };

//   const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setAudioFile(file);
//     }
//   };

//   const addOrUpdateSentence = async () => {
//     if (newSentence && (audioFile || audioUrl || editingIndex !== null)) {
//       setIsUploading(true);
//       try {
//         let newAudioUrl = audioUrl;

//         if (audioFile) {
//           const uploadResponse = await uploadFiles({ listeningAudio: audioFile });
//           if (uploadResponse.listeningAudio && uploadResponse.listeningAudio.length > 0) {
//             newAudioUrl = uploadResponse.listeningAudio[0];
//             setAudioUrl(newAudioUrl);
//           }
//         }

//         const timeInSeconds = convertTimeToSeconds(showTime);

//         const newQuestion: ListeningItem = {
//           audioUrl: newAudioUrl!,
//           sentence: newSentence,
//           showQuestionAtSecond: timeInSeconds,
//           blanks: newSentence.match(/______+/g) || [],
//           correctAnswers: correctAnswers,
//         };

//         let updatedListening = [...lessonData.sections.listening];

//         if (editingIndex !== null) {
//           updatedListening[editingIndex] = newQuestion;
//         } else {
//           updatedListening.push(newQuestion);
//         }

//         setLessonData((prev: Lesson) => ({
//           ...prev,
//           sections: {
//             ...prev.sections,
//             listening: updatedListening,
//           },
//         }));

//         resetForm();
//       } catch (error) {
//         console.error("Error uploading audio:", error);
//       } finally {
//         setIsUploading(false);
//       }
//     }
//   };

//   const editSentence = (index: number) => {
//     const itemToEdit = lessonData.sections.listening[index];
//     setNewSentence(itemToEdit.sentence);
//     setShowTime(`${Math.floor(itemToEdit.showQuestionAtSecond / 60).toString().padStart(2, '0')}:${(itemToEdit.showQuestionAtSecond % 60).toString().padStart(2, '0')}`);
//     setCorrectAnswers(itemToEdit.correctAnswers);
//     setEditingIndex(index);
//   };

//   const deleteSentence = (index: number) => {
//     const updatedListening = lessonData.sections.listening.filter((_, i) => i !== index);
//     setLessonData((prev: Lesson) => ({
//       ...prev,
//       sections: {
//         ...prev.sections,
//         listening: updatedListening,
//       },
//     }));
//   };

//   const resetForm = () => {
//     setNewSentence('');
//     setShowTime('00:00');
//     setCorrectAnswers([]);
//     setAudioFile(null);
//     setEditingIndex(null);
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Listening Section</Typography>
//       <input type="file" accept="audio/*" onChange={handleAudioUpload} />
//       {audioUrl && (
//         <div>
//           <audio controls>
//             <source src={audioUrl} type="audio/mpeg" />
//             Ваш браузер не поддерживает аудиоэлемент.
//           </audio>
//         </div>
//       )}
//       <TextField
//         label="New Sentence"
//         value={newSentence}
//         onChange={handleSentenceChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Show Time"
//         value={showTime}
//         onChange={handleTimeChange}
//         fullWidth
//         margin="normal"
//       />
//       {correctAnswers.map((answer, index) => (
//         <TextField
//           key={index}
//           label={`Correct Answer ${index + 1}`}
//           value={answer}
//           onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//       ))}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={addOrUpdateSentence}
//         disabled={isUploading}
//       >
//         {isUploading ? "Uploading..." : editingIndex !== null ? "Update Sentence" : "Add Sentence"}
//       </Button>
//       <List>
//         {lessonData.sections.listening.map((item, index) => (
//           <ListItem key={index}>
//             <Typography variant="body1">{item.sentence}</Typography>
//             <IconButton onClick={() => editSentence(index)}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={() => deleteSentence(index)}>
//               <DeleteIcon />
//             </IconButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default ListeningSectionCMS;



import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ListeningItem, Lesson } from '../../../../../types/types';
import uploadFiles from '../../../../../services/uploadService';

interface ListeningSectionCMSProps {
  lessonData: Lesson;
  setLessonData: React.Dispatch<React.SetStateAction<Lesson>>;
}

const ListeningSectionCMS: React.FC<ListeningSectionCMSProps> = ({ lessonData, setLessonData }) => {
  const [newSentence, setNewSentence] = useState('');
  const [showTime, setShowTime] = useState('00:00');
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Используем один URL для всего аудиофайла в текущем уроке
  const [audioUrl, setAudioUrl] = useState<string | null>(lessonData.sections.listening[0]?.audioUrl || null);

  useEffect(() => {
    if (lessonData.sections.listening.length > 0) {
      setCorrectAnswers([]);
    }
  }, [lessonData]);

  const handleSentenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSentence(e.target.value);
    setCorrectAnswers(Array((e.target.value.match(/______+/g) || []).length).fill(''));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowTime(e.target.value);
  };

  const handleCorrectAnswerChange = (index: number, value: string) => {
    setCorrectAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value || '';
      return newAnswers;
    });
  };

  const convertTimeToSeconds = (time: string) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAudioFile(file);
    }
  };

  const addOrUpdateSentence = async () => {
    if (newSentence && (audioFile || audioUrl || editingIndex !== null)) {
      setIsUploading(true);
      try {
        let newAudioUrl = audioUrl;

        if (audioFile) {
          const uploadResponse = await uploadFiles({ listeningAudio: audioFile });
          if (uploadResponse.listeningAudio && uploadResponse.listeningAudio.length > 0) {
            newAudioUrl = uploadResponse.listeningAudio[0];
            setAudioUrl(newAudioUrl);
          }
        }

        const timeInSeconds = convertTimeToSeconds(showTime);

        const newQuestion: ListeningItem = {
          audioUrl: newAudioUrl!,
          sentence: newSentence,
          showQuestionAtSecond: timeInSeconds,
          blanks: newSentence.match(/______+/g) || [],
          correctAnswers: correctAnswers,
        };

        let updatedListening = [...lessonData.sections.listening];

        if (editingIndex !== null) {
          updatedListening[editingIndex] = newQuestion;
        } else {
          updatedListening.push(newQuestion);
        }

        setLessonData((prev: Lesson) => ({
          ...prev,
          sections: {
            ...prev.sections,
            listening: updatedListening,
          },
        }));

        resetForm();
      } catch (error) {
        console.error("Error uploading audio:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const editSentence = (index: number) => {
    const itemToEdit = lessonData.sections.listening[index];
    setNewSentence(itemToEdit.sentence);
    setShowTime(`${Math.floor(itemToEdit.showQuestionAtSecond / 60).toString().padStart(2, '0')}:${(itemToEdit.showQuestionAtSecond % 60).toString().padStart(2, '0')}`);
    setCorrectAnswers(itemToEdit.correctAnswers);
    setEditingIndex(index);
  };

  const deleteSentence = (index: number) => {
    const updatedListening = lessonData.sections.listening.filter((_, i) => i !== index);
    setLessonData((prev: Lesson) => ({
      ...prev,
      sections: {
        ...prev.sections,
        listening: updatedListening,
      },
    }));
  };

  const resetForm = () => {
    setNewSentence('');
    setShowTime('00:00');
    setCorrectAnswers([]);
    setAudioFile(null);
    setEditingIndex(null);
  };

  return (
    <Box sx={{ margin: '20px 0', padding: '20px', backgroundColor: '#f7f9fc', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2d3436' }}>
        Listening Section
      </Typography>
      
      <Button
        variant="contained"
        component="label"
        sx={{
          marginTop: 2,
          backgroundColor: '#2980b9',
          padding: '10px 20px',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#3498db',
          },
        }}
      >
        Upload Audio
        <input
          type="file"
          accept="audio/*"
          onChange={handleAudioUpload}
          hidden
        />
      </Button>

      {audioUrl && (
        <Box sx={{ marginTop: '20px' }}>
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}

      <TextField
        label="New Sentence"
        value={newSentence}
        onChange={handleSentenceChange}
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
      />
      
      <TextField
        label="Show Time"
        value={showTime}
        onChange={handleTimeChange}
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
      />
      
      {correctAnswers.map((answer, index) => (
        <TextField
          key={index}
          label={`Correct Answer ${index + 1}`}
          value={answer}
          onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
        />
      ))}
      
      <Button
        variant="contained"
        onClick={addOrUpdateSentence}
        disabled={isUploading}
        sx={{
          marginTop: 2,
          backgroundColor: '#2980b9',
          padding: '10px 20px',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#3498db',
          },
        }}
      >
        {isUploading ? "Uploading..." : editingIndex !== null ? "Update Sentence" : "Add Sentence"}
      </Button>

      <List sx={{ marginTop: '20px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        {lessonData.sections.listening.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #e0e0e0',
              '&:last-child': {
                borderBottom: 'none',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1">
                {item.sentence}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => editSentence(index)} sx={{ color: '#2980b9' }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteSentence(index)} sx={{ color: '#e74c3c' }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListeningSectionCMS;
