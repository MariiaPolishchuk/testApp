import React, { useState } from "react";
import { Button, IconButton, Box, Typography, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface SynonymItem {
  id: string;
  word: string;
  synonym: string;
}

interface SynonymsCMSProps {
  lessonData: any;
  setLessonData: (data: any) => void;
}

const SynonymsCMS: React.FC<SynonymsCMSProps> = ({
  lessonData,
  setLessonData,
}) => {
  const [word, setWord] = useState<string>("");
  const [synonym, setSynonym] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const resetForm = () => {
    setWord("");
    setSynonym("");
    setEditingIndex(null);
  };

  const addOrUpdateSynonym = () => {
    if (word && synonym) {
      const newSynonym: SynonymItem = {
        id:
          editingIndex !== null
            ? lessonData.sections.synonyms[editingIndex].id
            : `${Date.now()}`,
        word,
        synonym,
      };

      const updatedSynonyms =
        editingIndex !== null
          ? lessonData.sections.synonyms.map((s: SynonymItem, index: number) =>
              index === editingIndex ? newSynonym : s
            )
          : [...(lessonData.sections.synonyms || []), newSynonym];

      setLessonData({
        ...lessonData,
        sections: {
          ...lessonData.sections,
          synonyms: updatedSynonyms,
        },
      });

      resetForm();
    } else {
      alert("Please provide both a word and its synonym.");
    }
  };

  const deleteSynonym = (index: number) => {
    const updatedSynonyms = lessonData.sections.synonyms.filter(
      (_: SynonymItem, i: number) => i !== index
    );
    setLessonData({
      ...lessonData,
      sections: {
        ...lessonData.sections,
        synonyms: updatedSynonyms,
      },
    });
  };

  const editSynonym = (index: number) => {
    const synonymToEdit = lessonData.sections.synonyms[index];
    setWord(synonymToEdit.word);
    setSynonym(synonymToEdit.synonym);
    setEditingIndex(index);
  };

  return (
    <Box>
      <Box className="form-group">
        <TextField
          label="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Synonym"
          value={synonym}
          onChange={(e) => setSynonym(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addOrUpdateSynonym}
          sx={{ mt: 2 }}
        >
          {editingIndex !== null ? "Update Synonym" : "Add Synonym"}
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Added Synonyms:
        </Typography>
        {lessonData.sections.synonyms &&
        lessonData.sections.synonyms.length > 0 ? (
          <ul>
            {lessonData.sections.synonyms.map(
              (s: SynonymItem, index: number) => (
                <li
                  key={s.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <span>
                    {s.word} - {s.synonym}
                  </span>
                  <Box>
                    <IconButton
                      color="primary"
                      onClick={() => editSynonym(index)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => deleteSynonym(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </li>
              )
            )}
          </ul>
        ) : (
          <Typography>No synonyms available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SynonymsCMS;
