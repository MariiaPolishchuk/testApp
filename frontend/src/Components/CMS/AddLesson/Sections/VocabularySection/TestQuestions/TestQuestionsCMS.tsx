import React, { useState, useEffect } from "react";
import {
  Button,
  IconButton,
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TestQuestionsCMSProps {
  lessonData: any;
  setLessonData: (data: any) => void;
}

interface TestItem {
  question: string;
  options: string[];
  correctAnswer: string;
}

const TestQuestionsCMS: React.FC<TestQuestionsCMSProps> = ({
  lessonData,
  setLessonData,
}) => {
  const [testQuestion, setTestQuestion] = useState<string>("");
  const [testOptions, setTestOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [newOption, setNewOption] = useState<string>("");
  const [editingTestIndex, setEditingTestIndex] = useState<number | null>(null);

  useEffect(() => {
    lessonData.sections.test = Array.isArray(lessonData.sections.test)
      ? lessonData.sections.test
      : [];
  }, [lessonData]);

  const addTestOption = () => {
    if (newOption) {
      setTestOptions([...testOptions, newOption]);
      setNewOption("");
    }
  };

  const addOrUpdateTestQuestion = () => {
    if (testQuestion && correctAnswer && testOptions.length > 0) {
      const newTestItem: TestItem = {
        question: testQuestion,
        options: testOptions,
        correctAnswer: correctAnswer,
      };

      const updatedTests =
        editingTestIndex !== null
          ? lessonData.sections.test.map((test: any, index: number) =>
              index === editingTestIndex ? newTestItem : test
            )
          : [...(lessonData.sections.test || []), newTestItem];

      setLessonData({
        ...lessonData,
        sections: {
          ...lessonData.sections,
          test: updatedTests,
        },
      });

      resetTestForm();
    } else {
      alert(
        "Please provide a question, correct answer, and at least one option."
      );
    }
  };

  const deleteTestQuestion = (index: number) => {
    const updatedTests = lessonData.sections.test.filter(
      (_: any, i: number) => i !== index
    );
    setLessonData({
      ...lessonData,
      sections: {
        ...lessonData.sections,
        test: updatedTests,
      },
    });
  };

  const editTestQuestion = (index: number) => {
    const testToEdit = lessonData.sections.test[index];
    setTestQuestion(testToEdit.question);
    setTestOptions(testToEdit.options);
    setCorrectAnswer(testToEdit.correctAnswer);
    setEditingTestIndex(index);
  };

  const resetTestForm = () => {
    setTestQuestion("");
    setTestOptions([]);
    setCorrectAnswer("");
    setNewOption("");
    setEditingTestIndex(null);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Test Questions Management
      </Typography>
      <Box className="form-group">
        <TextField
          label="Question"
          value={testQuestion}
          onChange={(e) => setTestQuestion(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </Box>
      <Box className="form-group">
        <TextField
          label="Option"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTestOption}
          sx={{ mt: 2 }}
        >
          Add Option
        </Button>
      </Box>
      <Box className="form-group">
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Correct Answer:
        </Typography>
        <Select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="">
            <em>Select the correct answer</em>
          </MenuItem>
          {testOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={addOrUpdateTestQuestion}
        sx={{ mt: 2 }}
      >
        {editingTestIndex !== null
          ? "Update Test Question"
          : "Add Test Question"}
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={resetTestForm}
        sx={{ mt: 2, ml: 2 }}
      >
        Reset
      </Button>
      <Box className="form-group" sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Added Test Questions:
        </Typography>
        <ul>
          {(lessonData.sections.test || []).map(
            (test: TestItem, index: number) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <span>{test.question}</span> (Correct Answer:{" "}
                {test.correctAnswer})
                <Box>
                  <IconButton
                    color="primary"
                    onClick={() => editTestQuestion(index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => deleteTestQuestion(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </li>
            )
          )}
        </ul>
      </Box>
    </Box>
  );
};

export default TestQuestionsCMS;
