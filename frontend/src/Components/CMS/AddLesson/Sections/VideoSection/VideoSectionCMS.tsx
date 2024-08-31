import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import "./CMSVideoSection.css";

const CMSVideoSection: React.FC = () => {
  const [videoLink, setVideoLink] = useState("");
  const [questions, setQuestions] = useState<string[]>([""]);
  const [tooltips, setTooltips] = useState<{ term: string; definition: string }[]>([
    { term: "", definition: "" },
  ]);

  const handleAddQuestion = () => setQuestions([...questions, ""]);

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleAddTooltip = () => setTooltips([...tooltips, { term: "", definition: "" }]);

  const handleTooltipChange = (index: number, field: "term" | "definition", value: string) => {
    const newTooltips = [...tooltips];
    newTooltips[index][field] = value;
    setTooltips(newTooltips);
  };

  const handleSave = () => {
    // Логика сохранения данных
    console.log({ videoLink, questions, tooltips });
  };

  return (
    <Box className="cms-video-section">
      <Typography variant="h5" className="cms-title">
        Video Section Settings
      </Typography>
      
      <TextField
        label="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Typography variant="h6">Questions</Typography>
      {questions.map((question, index) => (
        <TextField
          key={index}
          label={`Question ${index + 1}`}
          value={question}
          onChange={(e) => handleQuestionChange(index, e.target.value)}
          fullWidth
          margin="normal"
        />
      ))}
      <Button variant="outlined" onClick={handleAddQuestion}>
        Add Question
      </Button>

      <Typography variant="h6" className="cms-subtitle">Vocabulary</Typography>
      {tooltips.map((tooltip, index) => (
        <Box key={index} className="tooltip-fields">
          <TextField
            label="Term"
            value={tooltip.term}
            onChange={(e) => handleTooltipChange(index, "term", e.target.value)}
            margin="normal"
          />
          <TextField
            label="Definition"
            value={tooltip.definition}
            onChange={(e) => handleTooltipChange(index, "definition", e.target.value)}
            margin="normal"
          />
        </Box>
      ))}
      <Button variant="outlined" onClick={handleAddTooltip}>
        Add Term
      </Button>

      <Button variant="contained" onClick={handleSave} className="save-button">
        Save Settings
      </Button>
    </Box>
  );
};

export default CMSVideoSection;
