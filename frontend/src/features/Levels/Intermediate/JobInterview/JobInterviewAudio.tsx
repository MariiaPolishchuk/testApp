import React from "react";
import AudioComponent from "../../../Audio/AudioComponent"; 

const JobInterviewAudio: React.FC = () => {
  const AudioQuestions = [
    {
      showQuestionAtSecond: 19,
      blanks: ["blank1"],
      sentence:
        "Navigating a job interview effectively is ______ to make a positive impression and increase your chances of landing your desired position.",
      answers: ["essential"],
    },
    {
      showQuestionAtSecond: 47,
      blanks: ["blank2"],
      sentence:
        "IUnderstand the Job Description: Carefully review the job description to understand the specific requirements and ______ .",
      answers: ["responsibilities"],
    },
    {
        showQuestionAtSecond: 81,
        blanks: ["blank3"],
        sentence:
          "Hypothetical interview questions are similar to competency questions except that instead of asking you to talk about an experience you've had in the past, they present you with an imaginary situation that you ______ in your new job.",
        answers: ["might face"],
      },
  ];

  const audioFile = "/audio/JobInterview.mp3";

  return (
    <div>
      <AudioComponent audioFile={audioFile} questions={AudioQuestions} />
    </div>
  );
};

export default JobInterviewAudio;
