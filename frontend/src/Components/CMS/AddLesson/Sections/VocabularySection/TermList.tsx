import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import VolumeUpIcon from "@material-ui/icons/VolumeUp"; 

interface Term {
  word: string;
  description: string;
}

interface Props {
  terms: Term[];
}

const TermList: React.FC<Props> = ({ terms }) => {
  const playSound = (description: string) => {
    console.log("Playing sound for:", description);
  };

  return (
    <>
      {terms.map((term, index) => (
        <div key={index}>
          <Tooltip title={term.description}>
            <span>{term.word}</span>
          </Tooltip>
          <IconButton onClick={() => playSound(term.description)}>
          <VolumeUpIcon className="custom-icon" />
          </IconButton>
          <br />
        </div>
      ))}
    </>
  );
};

export default TermList;
