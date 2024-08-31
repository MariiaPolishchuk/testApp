import React from "react";
import AudioComponent from "../../../../Audio/AudioComponent";

const MyFascinatingMorningAudio: React.FC = () => {
  const MFMAudioQuestions = [
    {
      id: 0,
      showQuestionAtSecond: 14,
      blanks: ["blank1"],
      sentence:
        "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and ______ on news or social media to stay informed about current events.",
      answers: ["catching up"],
    },
    {
      id: 1,
      showQuestionAtSecond: 22,
      blanks: ["blank2"],
      sentence:
        "In the midst of the hustle and bustle of daily life, a morning routine ______ an anchor, providing a sense of purpose and direction.",
      answers: ["serves as"],
    },
  ];

  const audioFile = "/audio/audio.mp3";

  return (
    <div>
      <AudioComponent audioFile={audioFile} questions={MFMAudioQuestions} />
    </div>
  );
};

export default MyFascinatingMorningAudio;