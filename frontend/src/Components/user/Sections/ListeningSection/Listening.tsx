// import React from "react";
// import { Box } from "@material-ui/core";
// import { AudioQuestion } from "./AudioQuestion";
// import { useAudioLogic } from "./useAudioLogic";
// import './style.css'

// interface AudioProps {
//   audioFile: string;
//   questions: AudioQuestion[];
// }

// const AudioComponent: React.FC<AudioProps> = ({ audioFile, questions }) => {
//   const { audioQuestionObj, modalOpen, handleAnswerSubmit, handleAnswerChange, renderAudio, renderModal } = useAudioLogic(
//     audioFile,
//     questions
//   );

//   return (
//     <div className="task block">
//       <div className="block-name dotted"></div>
//       <div className="audio-task">
//         <h4>
//         Task. Now we are going to practice your listening skills. During this audio
//           will be playing you will see the questions. After each answer tick the
//           submit button to check yourself. Audio won't be playing without
//           answer!
//         </h4>
//       </div>
//       <Box className="play">
//         {renderAudio()}
//         {renderModal()}
//         <Box className="fade-in" id="audioResults"></Box>
//       </Box>
//     </div>
//   );
// };

// export default AudioComponent;




// import React from "react";
// import { Box } from "@material-ui/core";
// import { AudioQuestion } from "./AudioQuestion";
// import { useAudioLogic } from './useAudioLogic'
// import './style.css';

// interface AudioProps {
//   audioFile: string;
//   questions: AudioQuestion[];
// }

// const AudioComponent: React.FC<AudioProps> = ({ audioFile, questions }) => {
//   const {
//     audioQuestionObj,
//     modalOpen,
//     handleAnswerSubmit,
//     handleAnswerChange,
//     renderAudio,
//     renderModal
//   } = useAudioLogic(audioFile, questions);

//   return (
//     <div className="task block">
//       <div className="block-name dotted"></div>
//       <div className="audio-task">
//         <h4>
//           Task. Now we are going to practice your listening skills. During this
//           audio will be playing you will see the questions. After each answer,
//           tick the submit button to check yourself. Audio won't be playing
//           without answer!
//         </h4>
//       </div>
//       <Box className="play">
//         {renderAudio()}
//         {renderModal()}
//         <Box className="fade-in" id="audioResults"></Box>
//       </Box>
//     </div>
//   );
// };

// export default AudioComponent;




import React from "react";
import { Box } from "@material-ui/core";
import { AudioQuestion } from "./AudioQuestion";
import { useAudioLogic } from "./useAudioLogic";
import './style.css';

interface AudioProps {
  audioFile: string;
  questions: AudioQuestion[];
}

const AudioComponent: React.FC<AudioProps> = ({ audioFile, questions }) => {
  const {
    audioQuestionObj,
    modalOpen,
    handleAnswerSubmit,
    handleAnswerChange,
    renderAudio,
    renderModal,
    renderResultsModal
  } = useAudioLogic(audioFile, questions);

  return (
    <div className="task block">
      <div className="block-name dotted"></div>
      <div className="audio-task">
        <h4>
          Task. Now we are going to practice your listening skills. During this
          audio will be playing you will see the questions. After each answer,
          tick the submit button to check yourself. Audio won't be playing
          without answer!
        </h4>
      </div>
      <Box className="play">
        {renderAudio()}
        {renderModal()}
        {renderResultsModal()}
        <Box className="fade-in" id="audioResults"></Box>
      </Box>
    </div>
  );
};

export default AudioComponent;
