import React from "react";
import GrammarMFM from "./GrammarMFM";
import GrammarInput from "../../../../GrammarInput/GrammarInput";

const Grammar: React.FC = () => {
  return (
    <div className="grammar-page fade-in">
      <GrammarInput game={GrammarMFM} />
    </div>
  );
};

export default Grammar;
