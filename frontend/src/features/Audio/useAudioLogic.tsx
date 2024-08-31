import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button, Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import { AudioQuestion } from "./AudioQuestion";

const CustomTextField = styled.input`
  border: 1px solid #ccc;
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 4px;
`;

export const useAudioLogic = (audioFile: string, questions: AudioQuestion[]) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));

  const [audioQuestionObj, setAudioQuestionObj] = useState<AudioQuestion | null>(null);
  const [audioAnswerChecked, setAudioAnswerChecked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const autoExpand = useCallback(() => {
    const inputField = document.getElementById("blank1");
    if (inputField) {
      inputField.style.width = "auto";
      inputField.style.width = inputField.scrollWidth + 1 + "px";
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const currentTime = Math.floor(audioRef.current.currentTime);

    if (audioAnswerChecked || audioQuestionObj) {
      return;
    }

    if (currentTime === 0) {
      setAudioAnswerChecked(false);
      setAudioQuestionObj(null);
    }

    const questionObj = findQuestionToShow(currentTime, questions);

    if (questionObj) {
      handleQuestionDisplay(questionObj);
    }

    if (!audioQuestionObj && currentTime >= audioRef.current.duration) {
      handleAudioRestart();
    }
  }, [audioAnswerChecked, audioQuestionObj, questions]);

  useEffect(() => {
    const timeUpdateHandler = () => handleTimeUpdate();
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("timeupdate", timeUpdateHandler);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", timeUpdateHandler);
      }
    };
  }, [handleTimeUpdate]);

  const handleAnswerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, blank: string) => {
      autoExpand();
    },
    [autoExpand]
  );

  const displayResults = useCallback(
    (message: string, resultClass: string, correctAnswer?: string) => {
      showResultMessage(message, resultClass, correctAnswer);
      resetAndPlayAudio();
    },
    []
  );

  const checkAnswers = useCallback(
    (question: AudioQuestion) => {
      const { correct, correctAnswerMessage } = checkUserAnswers(question);
      displayResults(
        correct ? "Gorgeous!" : "You are wrong!",
        correct ? "audio-correct" : "audio-incorrect",
        correctAnswerMessage
      );
    },
    [displayResults]
  );

  const handleAnswerSubmit = useCallback(() => {
    if (!audioAnswerChecked || !audioQuestionObj) {
      console.error(
        "Answer check failed: audioAnswerChecked - false or audioQuestionObj - null"
      );
      return;
    }

    setAudioAnswerChecked(false);
    setModalOpen(false);
    if (audioQuestionObj) checkAnswers(audioQuestionObj);
  }, [audioAnswerChecked, audioQuestionObj, checkAnswers]);

  const renderAudio = () => (
    <audio id="audioPlayer" controls ref={audioRef}>
      <source src={audioFile} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );

  const renderModal = () => (
    <Modal
      className="modal-container fade-in-fast"
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <div className="modal-content">
        {audioQuestionObj && (
          <Box className="modal-body audio-questions" id="question">
            {audioQuestionObj.sentence
              .split("______")
              .map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < audioQuestionObj.blanks.length && (
                    <CustomTextField
                      key={audioQuestionObj.blanks[index]}
                      id={audioQuestionObj.blanks[index]}
                      className="userInput"
                      onChange={(e) =>
                        handleAnswerChange(
                          e,
                          audioQuestionObj.blanks[index]
                        )
                      }
                    />
                  )}
                </React.Fragment>
              ))}
          </Box>
        )}

        <Button
          className="lesson-button"
          variant="contained"
          id="checkAnswersBtnAudio"
          onClick={handleAnswerSubmit}
        >
          Submit Answer
        </Button>
      </div>
    </Modal>
  );

  return { audioQuestionObj, modalOpen, handleAnswerSubmit, handleAnswerChange, renderAudio, renderModal };

  function findQuestionToShow(currentTime: number, questions: AudioQuestion[]) {
    return questions.find(
      (q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1
    );
  }

  function handleQuestionDisplay(questionObj: AudioQuestion) {
    console.log("Displaying question");
    audioRef.current.pause();
    setAudioQuestionObj(questionObj);
    setAudioAnswerChecked(true);
    setModalOpen(true);
  }

  function handleAudioRestart() {
    console.log("Restarting audio");
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setAudioAnswerChecked(false);
  }

  function showResultMessage(message: string, resultClass: string, correctAnswer?: string) {
    const audioResultsElement = document.getElementById("audioResults");

    if (!audioResultsElement) {
      console.error('Element with id "audioResults" not found.');
      return;
    }

    audioResultsElement.innerHTML = "";

    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    if (!correctAnswer) {
      messageElement.classList.add(resultClass);
    } else {
      const correctAnswerElement = document.createElement("span");
      correctAnswerElement.textContent = " " + correctAnswer;
      correctAnswerElement.classList.add("audio-correct-answer");

      messageElement.appendChild(correctAnswerElement);
      messageElement.classList.add(resultClass);
    }

    audioResultsElement.appendChild(messageElement);
  }

  function resetAndPlayAudio() {
    setTimeout(() => {
      setAudioQuestionObj(null);
      audioRef.current.currentTime += 1;
      audioRef.current.play();

      const audioResultsElement = document.getElementById("audioResults");
      if (audioResultsElement) {
        audioResultsElement.innerHTML = "";
      }
    }, 3000);
  }

  function checkUserAnswers(question: AudioQuestion) {
    let correct = true;
    const correctAnswers: string[] = [];

    question.blanks.forEach((blank) => {
      const blankElement = document.getElementById(blank);

      if (!blankElement) {
        console.error(`Element with id ${blank} not found.`);
        return;
      }

      const userInput = (blankElement as HTMLInputElement).value.trim();
      const currentCorrectAnswer =
        question.answers[question.blanks.indexOf(blank)];

      if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
        correct = false;
        blankElement.classList.add("audio-incorrect");
        if (!correctAnswers.includes(currentCorrectAnswer)) {
          correctAnswers.push(currentCorrectAnswer);
        }
      } else {
        blankElement.classList.remove("audio-incorrect");
        blankElement.classList.add("audio-correct");
      }
    });

    const correctAnswerMessage = correctAnswers.join(", ");

    return { correct, correctAnswerMessage };
  }
};




