import React from 'react';
import useRandomQuestion from '../../../CMS/AddLesson/Sections/ReadingSection/useRandomQuestion';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './css/style.css';

interface ReadingQuestionsProps {
  questions: string[];
}

const ReadingQuestions: React.FC<ReadingQuestionsProps> = ({ questions }) => {
  const { outputText, askRandomQuestion, isModalOpen, toggleModal } = useRandomQuestion(questions);

  return (
    <div>
      <div className="start-speaking-button-container">
        <button className="start-speaking-button" onClick={askRandomQuestion}>
          Start Speaking
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        BackdropProps={{
          className: 'modal-backdrop',
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          <h2 id="modal-title">Your Question</h2>
          <p id="modal-description">{outputText}</p>
          <Button variant="contained" color="secondary" onClick={askRandomQuestion}>
            Next Question
          </Button>
          <Button variant="outlined" color="primary" onClick={toggleModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReadingQuestions;
