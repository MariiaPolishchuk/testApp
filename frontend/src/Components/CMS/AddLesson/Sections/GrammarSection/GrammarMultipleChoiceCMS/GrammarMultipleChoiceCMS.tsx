import React, { useState } from "react";
import { TextField, Button, List, ListItem, Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

interface MultipleChoiceQuestion {
  id: string;
  sentence: string;  // Предложение с пропуском
  options: string[]; // Варианты ответа
  correctAnswer: string; // Правильный ответ
}

interface GrammarMultipleChoiceCMSProps {
  lessonData: any;
  setLessonData: React.Dispatch<React.SetStateAction<any>>;
}

const GrammarMultipleChoiceCMS: React.FC<GrammarMultipleChoiceCMSProps> = ({ lessonData, setLessonData }) => {
  const [sentence, setSentence] = useState<string>('');
  const [options, setOptions] = useState<string[]>(['']);
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Убедитесь, что grammarMultipleChoice инициализировано как массив
  const grammarMultipleChoice = lessonData.sections.grammarMultipleChoice || [];

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = options.map((option, i) => (i === index ? value : option));
    setOptions(newOptions);
  };

  const handleAddOrUpdateQuestion = () => {
    if (sentence && correctAnswer && options.length > 1) {
      const newQuestion: MultipleChoiceQuestion = {
        id: editingIndex !== null ? grammarMultipleChoice[editingIndex].id : `${grammarMultipleChoice.length + 1}`,
        sentence,
        options,
        correctAnswer,
      };

      const updatedQuestions = editingIndex !== null
        ? grammarMultipleChoice.map((q: MultipleChoiceQuestion, index: number) => index === editingIndex ? newQuestion : q)
        : [...grammarMultipleChoice, newQuestion];

      setLessonData({
        ...lessonData,
        sections: {
          ...lessonData.sections,
          grammarMultipleChoice: updatedQuestions,
        },
      });

      resetForm();
    } else {
      alert('Please fill out the sentence, options, and correct answer.');
    }
  };

  const handleEditQuestion = (index: number) => {
    const questionToEdit = grammarMultipleChoice[index];
    setSentence(questionToEdit.sentence);
    setOptions(questionToEdit.options);
    setCorrectAnswer(questionToEdit.correctAnswer);
    setEditingIndex(index);
  };

  const handleDeleteQuestion = (id: string) => {
    const updatedQuestions = grammarMultipleChoice.filter((question: MultipleChoiceQuestion) => question.id !== id);
    setLessonData({
      ...lessonData,
      sections: {
        ...lessonData.sections,
        grammarMultipleChoice: updatedQuestions,
      },
    });
  };

  const resetForm = () => {
    setSentence('');
    setOptions(['']);
    setCorrectAnswer('');
    setEditingIndex(null);
  };

  return (
    <Box sx={{ margin: '20px 0', padding: '20px', backgroundColor: '#f7f9fc', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#2d3436' }}>
        Grammar Multiple Choice Section
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

      {options.map((option, index) => (
        <TextField
          key={index}
          label={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
        />
      ))}

      <Button
        variant="contained"
        onClick={handleAddOption}
        sx={{ marginTop: 2, backgroundColor: '#7f8c8d', '&:hover': { backgroundColor: '#95a5a6' } }}
        startIcon={<AddIcon />}
      >
        Add Option
      </Button>

      <TextField
        label="Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
      />

      <Button
        variant="contained"
        onClick={handleAddOrUpdateQuestion}
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
        {editingIndex !== null ? "Update Question" : "Add Question"}
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
        {grammarMultipleChoice.map((item: MultipleChoiceQuestion, index: number) => (
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
                {item.sentence}
              </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">
              Options: {item.options.join(', ')} | Correct: {item.correctAnswer}
            </Typography>
            <Box>
              <IconButton onClick={() => handleEditQuestion(index)} sx={{ color: '#2980b9' }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteQuestion(item.id)} sx={{ color: '#e74c3c' }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GrammarMultipleChoiceCMS;



