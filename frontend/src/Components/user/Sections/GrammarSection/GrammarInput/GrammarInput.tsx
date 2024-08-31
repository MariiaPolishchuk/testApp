import React, { useState } from "react";
import { Button, ListItem, List } from "@mui/material";
import styled from "styled-components";

const StyledInput = styled.input<{ value?: string | number }>`
  border: 1px solid #ccc;
  padding: 8px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  margin: 2px;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  min-width: 50px;
  width: ${(props) =>
      props.value && String(props.value).length > 0
        ? `calc(${String(props.value).length}ch + 0.1ch)`
        : `calc(${props.placeholder?.length ?? 0}ch + 0.1ch)`};
  
  &::placeholder {
    color: #888;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &.correct {
    border-color: #28a745;
    background-color: #d4edda;
    color: #155724;
  }

  &.incorrect {
    border-color: #dc3545;
    background-color: #f8d7da;
    color: #721c24;
  }

  &.missing {
    border-color: #ffc107;
    background-color: #fff3cd;
    color: #856404;
  }
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);;
`;

const StyledButton = styled(Button)`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const StyledGrammarContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .block-name h4 {
    font-size: 18px;
    color: #666;
   
  }

  .choose-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

interface Sentence {
  id: string;
  text: string;
  correctWord: string;
}

interface Props {
  sentences: Sentence[];
}

const GrammarInput: React.FC<Props> = ({ sentences }) => {
  const [answers, setAnswers] = useState<string[]>(
    Array(sentences.length).fill("")
  );
  const [checked, setChecked] = useState(false);

  const handleInputChange = (value: string, index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswer = (userAnswer: string, correctAnswer: string, index: number) => {
    return userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
  };

  const submitAnswers = () => {
    setChecked(true);
  };

  const resetForm = () => {
    setAnswers(Array(sentences.length).fill(""));
    setChecked(false);
  };

  const showCorrectAnswers = () => {
    setAnswers(sentences.map((sentence) => sentence.correctWord));
    setChecked(true);
  };

  return (
    <StyledGrammarContainer>
      <div className="block-name">
        <h4>Task. Fill in the blanks with the correct form of the words!</h4>
      </div>
      <List className="quiz-list forms">
        {sentences.map((sentence, index) => (
          <StyledListItem className="quiz-li" key={sentence.id}>
            {sentence.text.split('(').map((part, partIndex) => (
              <React.Fragment key={partIndex}>
                {partIndex === 0 ? (
                  <span>{part}</span>
                ) : (
                  <>
                    <StyledInput
                      id={`word${index}`}
                      className={`word ${
                        checked
                          ? checkAnswer(answers[index], sentence.correctWord, index)
                            ? "correct"
                            : "incorrect"
                          : ""
                      }`}
                      placeholder={sentence.text.split('(')[1]?.split(')')[0] || ""}
                      value={answers[index]}
                      onChange={(e) => handleInputChange(e.target.value, index)}
                    />
                    <span>{part.split(')')[1]}</span>
                  </>
                )}
              </React.Fragment>
            ))}
          </StyledListItem>
        ))}
      </List>
      <div className="choose-buttons">
        <StyledButton className="button" variant="contained" onClick={submitAnswers}>
          Check
        </StyledButton>
        <StyledButton className="button" variant="contained" onClick={resetForm}>
          Start again
        </StyledButton>
        <StyledButton className="button" variant="contained" onClick={showCorrectAnswers}>
          Show Answers
        </StyledButton>
      </div>
    </StyledGrammarContainer>
  );
};

export default GrammarInput;
