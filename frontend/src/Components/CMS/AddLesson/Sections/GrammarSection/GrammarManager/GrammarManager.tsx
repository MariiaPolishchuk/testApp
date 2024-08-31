// GrammarManager.tsx
import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Sentence {
  id: string;
  text: string;
  correctWord: string;
}

interface GrammarManagerProps {
  sentences: Sentence[];
  onUpdateSentences: (sentences: Sentence[]) => void;
}

const GrammarManager: React.FC<GrammarManagerProps> = ({ sentences, onUpdateSentences }) => {
  const [sentence, setSentence] = useState<string>('');
  const [correctWord, setCorrectWord] = useState<string>('');

  const handleAddSentence = () => {
    const match = sentence.match(/\(([^)]+)\)/);
    if (match && correctWord) {
      const newSentence: Sentence = {
        id: `${sentences.length + 1}`,
        text: sentence,
        correctWord: correctWord,
      };

      onUpdateSentences([...sentences, newSentence]);

      setSentence('');
      setCorrectWord('');
    } else {
      alert('Введите предложение с правильным словом в скобках и правильное слово.');
    }
  };

  const handleDeleteSentence = (id: string) => {
    const updatedSentences = sentences.filter(sentence => sentence.id !== id);
    onUpdateSentences(updatedSentences);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Добавить предложение</Typography>
      <TextField
        fullWidth
        label="Предложение"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Правильное слово"
        value={correctWord}
        onChange={(e) => setCorrectWord(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddSentence}
      >
        Добавить
      </Button>

      <List>
        {sentences.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteSentence(item.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            {item.text} (правильное слово: {item.correctWord})
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GrammarManager;
