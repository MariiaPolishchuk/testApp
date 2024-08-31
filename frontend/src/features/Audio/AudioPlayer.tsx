import React, { useRef, useEffect, useCallback } from "react";
import { AudioQuestion } from "./AudioQuestion";

interface AudioPlayerProps {
  audioFile: string;
  questions: AudioQuestion[];
  onQuestionDisplay: (question: AudioQuestion) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile, questions, onQuestionDisplay }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioFile));

  const handleTimeUpdate = useCallback(() => {
    const currentTime = Math.floor(audioRef.current.currentTime);

    const questionObj = questions.find(q => Math.abs(q.showQuestionAtSecond - currentTime) < 1);

    if (questionObj) {
      audioRef.current.pause();
      onQuestionDisplay(questionObj);
    }
  }, [questions, onQuestionDisplay]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const timeUpdateHandler = () => handleTimeUpdate();

    if (audioElement) {
      audioElement.addEventListener('timeupdate', timeUpdateHandler);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', timeUpdateHandler);
      }
    };
  }, [handleTimeUpdate]);

  return (
    <audio id="audioPlayer" controls ref={audioRef}>
      <source src={audioFile} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
