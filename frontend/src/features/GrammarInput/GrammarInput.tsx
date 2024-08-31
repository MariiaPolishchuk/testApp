import React, { useState, useEffect } from "react";
import { Button, ListItem, List } from "@mui/material";
import { WordsGame } from "../Levels/Intermediate/MyFascinatingMorning/GrammarPage/GrammarMFM";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 10px;
  width: auto;
  min-width: 250px;
  max-width: 100%;

  &:focus {
    outline: none;
  }
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  game: WordsGame;
}

const GrammarInput: React.FC<Props> = ({ game }) => {
  const [answersShown, setAnswersShown] = useState(false);

  useEffect(() => {
    const updateInputWidth = (event: Event) => {
      const input = event.target as HTMLInputElement;
      input.style.width = `${(input.value.length + 1) * 8}px`;
    };

    const inputs = document.querySelectorAll(".word");
    inputs.forEach((input) => {
      input.addEventListener("input", updateInputWidth);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", updateInputWidth);
      });
    };
  }, []);

  const checkAnswer = (wordId: string, correctAnswers: string[]) => {
    const userAnswer = (
      document.getElementById(wordId) as HTMLInputElement
    ).value
      .trim()
      .toLowerCase();
    const wordElement = document.getElementById(wordId);

    if (!answersShown) {
      const lowerCaseCorrectAnswers = correctAnswers.map((answer) =>
        answer.toLowerCase()
      );

      if (lowerCaseCorrectAnswers.includes(userAnswer)) {
        wordElement?.classList.remove("incorrect", "missing");
        wordElement?.classList.add("correct");
      } else if (userAnswer !== "") {
        wordElement?.classList.remove("correct");
        wordElement?.classList.add("incorrect");
      } else {
        wordElement?.classList.remove("correct", "incorrect");
        wordElement?.classList.add("missing");
      }
    }
  };

  const resetWord = (wordId: string) => {
    const wordElement = document.getElementById(wordId) as HTMLInputElement;
    if (wordElement) {
      wordElement.value = "";
      wordElement.classList.remove("correct", "incorrect", "missing");
    }
  };

  const resetForm = () => {
    setAnswersShown(false);

    game.sentences.forEach((sentence, index) => {
      sentence.text.split(/(\([^)]+\))/).forEach((part, partIndex) => {
        if (partIndex % 2 !== 0) {
          resetWord(`word${index + 1}-${partIndex}-answer`);
        }
      });
    });
  };

  const showCorrectAnswers = () => {
    setAnswersShown(true);

    game.sentences.forEach((sentence, index) => {
      let gapIndex = 0;
      sentence.text.split(/(\([^)]+\))/).forEach((part, partIndex) => {
        if (partIndex % 2 !== 0) {
          const wordId = `word${index + 1}-${partIndex}-answer`;
          const wordAnswer = document.getElementById(
            wordId
          ) as HTMLInputElement;
          wordAnswer.value = sentence.correctWords[gapIndex];
          wordAnswer.style.width = `${wordAnswer.scrollWidth}px`;
          gapIndex++;
        }
      });
    });
  };

  const submitAnswers = () => {
    game.sentences.forEach((sentence, index) => {
      let gapIndex = 0;
      sentence.text.split(/(\([^)]+\))/).forEach((part, partIndex) => {
        if (partIndex % 2 !== 0) {
          const wordId = `word${index + 1}-${partIndex}-answer`;
          checkAnswer(wordId, [sentence.correctWords[gapIndex]]);
          gapIndex++;
        }
      });
    });
  };

  return (
    <div className="quiz block" id="quiz">
      <div className="block-name dotted">
        <h4>
          Write the correct form of the verbs in brackets and check your
          answers! Don't forget this topic refers to the Present Tenses! So use
          the Present Simple, Continuous, Perfect and Perfect-Continuous!
        </h4>
      </div>
      <List className="quiz-list forms">
        {game.sentences.map((sentence, index) => (
          <StyledListItem className="quiz-li" key={sentence.id}>
            {sentence.text.split(/(\([^)]+\))/).map((part, partIndex) => (
              <React.Fragment key={partIndex}>
                {partIndex % 2 === 0 ? (
                  <span key={partIndex}>{part}</span>
                ) : (
                  <StyledInput
                    id={`word${index + 1}-${partIndex}-answer`}
                    className="word"
                    key={partIndex}
                    placeholder={part}
                  />
                )}
              </React.Fragment>
            ))}
          </StyledListItem>
        ))}
      </List>
      <div className="choose-buttons">
        <Button
          className="lesson-button"
          variant="contained"
          onClick={submitAnswers}
        >
          Check
        </Button>
        <Button
          className="lesson-button"
          variant="contained"
          onClick={resetForm}
        >
          Start again
        </Button>
        <Button
          className="lesson-button"
          variant="contained"
          onClick={showCorrectAnswers}
        >
          Show Answers
        </Button>
      </div>
    </div>
  );
};

export default GrammarInput;