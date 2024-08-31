
// import React, { useState } from "react";
// import { TextField, Button, List, ListItem, Box, Typography, IconButton } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';

// interface Sentence {
//   id: string;
//   text: string; // Полное предложение с placeholders
//   correctWord: string; // Правильное слово для проверки
// }

// interface GrammarSectionCMSProps {
//   lessonData: any;
//   setLessonData: React.Dispatch<React.SetStateAction<any>>;
// }

// const GrammarSectionCMS: React.FC<GrammarSectionCMSProps> = ({ lessonData, setLessonData }) => {
//   const [sentence, setSentence] = useState<string>('');
//   const [correctWord, setCorrectWord] = useState<string>('');
//   const [sentences, setSentences] = useState<Sentence[]>(lessonData.sections.grammar || []);

//   const handleAddSentence = () => {
//     const match = sentence.match(/\(([^)]+)\)/);
//     if (match && correctWord) {
//       const newSentence: Sentence = {
//         id: `${sentences.length + 1}`,
//         text: sentence,
//         correctWord: correctWord,
//       };

//       setSentences([...sentences, newSentence]);
//       setLessonData({
//         ...lessonData,
//         sections: {
//           ...lessonData.sections,
//           grammar: [...sentences, newSentence],
//         },
//       });

//       setSentence('');
//       setCorrectWord('');
//     } else {
//       alert('Please enter a sentence with a placeholder and the correct word.');
//     }
//   };

//   const handleDeleteSentence = (id: string) => {
//     const updatedSentences = sentences.filter(sentence => sentence.id !== id);
//     setSentences(updatedSentences);
//     setLessonData({
//       ...lessonData,
//       sections: {
//         ...lessonData.sections,
//         grammar: updatedSentences,
//       },
//     });
//   };

//   return (
//     <Box sx={{ margin: '20px 0', padding: '20px', backgroundColor: '#f7f9fc', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
//       <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2d3436' }}>
//         Grammar Section
//       </Typography>

//       <TextField
//         label="Enter a sentence with a placeholder"
//         value={sentence}
//         onChange={(e) => setSentence(e.target.value)}
//         fullWidth
//         variant="outlined"
//         margin="normal"
//         sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
//       />

//       <TextField
//         label="Enter the correct word"
//         value={correctWord}
//         onChange={(e) => setCorrectWord(e.target.value)}
//         fullWidth
//         variant="outlined"
//         margin="normal"
//         sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
//       />

//       <Button
//         variant="contained"
//         onClick={handleAddSentence}
//         sx={{
//           marginTop: 2,
//           backgroundColor: '#2980b9',
//           padding: '10px 20px',
//           fontWeight: 'bold',
//           '&:hover': {
//             backgroundColor: '#3498db',
//           },
//         }}
//       >
//         Add Sentence
//       </Button>

//       <List sx={{ marginTop: '20px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
//         {sentences.map((item) => (
//           <ListItem
//             key={item.id}
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               padding: '10px 0',
//               borderBottom: '1px solid #e0e0e0',
//               '&:last-child': {
//                 borderBottom: 'none',
//               },
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <Typography variant="body1">
//                 {item.text}
//               </Typography>
//             </Box>
//             <Typography variant="body2" color="textSecondary">
//               Correct Word: {item.correctWord}
//             </Typography>
//             <IconButton onClick={() => handleDeleteSentence(item.id)}>
//               <DeleteIcon />
//             </IconButton>
//           </ListItem>
//         ))}
//       </List>
      
//     </Box>
    
//   );
// };

// export default GrammarSectionCMS;




import React, { useState } from "react";
import { TextField, Button, List, ListItem, Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import GrammarMultipleChoiceCMS from './GrammarMultipleChoiceCMS/GrammarMultipleChoiceCMS'; // Импорт нового компонента


interface Sentence {
  id: string;
  text: string; // Полное предложение с placeholders
  correctWord: string; // Правильное слово для проверки
}

interface GrammarSectionCMSProps {
  lessonData: any;
  setLessonData: React.Dispatch<React.SetStateAction<any>>;
}

const GrammarSectionCMS: React.FC<GrammarSectionCMSProps> = ({ lessonData, setLessonData }) => {
  const [sentence, setSentence] = useState<string>('');
  const [correctWord, setCorrectWord] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [sentences, setSentences] = useState<Sentence[]>(lessonData.sections.grammar || []);

  const handleAddOrUpdateSentence = () => {
    const match = sentence.match(/\(([^)]+)\)/);
    if (match && correctWord) {
      const newSentence: Sentence = {
        id: editingIndex !== null ? sentences[editingIndex].id : `${sentences.length + 1}`,
        text: sentence,
        correctWord: correctWord,
      };

      const updatedSentences = editingIndex !== null
        ? sentences.map((s, index) => index === editingIndex ? newSentence : s)
        : [...sentences, newSentence];

      setSentences(updatedSentences);
      setLessonData({
        ...lessonData,
        sections: {
          ...lessonData.sections,
          grammar: updatedSentences,
        },
      });

      resetForm();
    } else {
      alert('Please enter a sentence with a placeholder and the correct word.');
    }
  };

  const handleDeleteSentence = (id: string) => {
    const updatedSentences = sentences.filter(sentence => sentence.id !== id);
    setSentences(updatedSentences);
    setLessonData({
      ...lessonData,
      sections: {
        ...lessonData.sections,
        grammar: updatedSentences,
      },
    });
  };

  const handleEditSentence = (index: number) => {
    const sentenceToEdit = sentences[index];
    setSentence(sentenceToEdit.text);
    setCorrectWord(sentenceToEdit.correctWord);
    setEditingIndex(index);
  };

  const resetForm = () => {
    setSentence('');
    setCorrectWord('');
    setEditingIndex(null);
  };

  return (
    <Box sx={{ margin: '20px 0', padding: '20px', backgroundColor: '#f7f9fc', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2d3436' }}>
        Grammar Section
      </Typography>

      <TextField
        label="Enter a sentence with a placeholder"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
      />

      <TextField
        label="Enter the correct word"
        value={correctWord}
        onChange={(e) => setCorrectWord(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
      />

      <Button
        variant="contained"
        onClick={handleAddOrUpdateSentence}
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
        {editingIndex !== null ? "Update Sentence" : "Add Sentence"}
      </Button>
      <Button
        variant="outlined"
        onClick={resetForm}
        sx={{
          marginTop: 2,
          marginLeft: 2,
          color: '#7f8c8d',
          borderColor: '#7f8c8d',
          '&:hover': {
            backgroundColor: '#ecf0f1',
          },
        }}
      >
        Reset
      </Button>

      <List sx={{ marginTop: '20px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        {sentences.map((item, index) => (
          <ListItem
            key={item.id}
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
                {item.text}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              Correct Word: {item.correctWord}
            </Typography>
            <Box>
              <IconButton onClick={() => handleEditSentence(index)} sx={{ color: '#2980b9' }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteSentence(item.id)} sx={{ color: '#e74c3c' }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Добавляем рендеринг нового компонента */}
      <GrammarMultipleChoiceCMS lessonData={lessonData} setLessonData={setLessonData} />
    </Box>
  );
};

export default GrammarSectionCMS;