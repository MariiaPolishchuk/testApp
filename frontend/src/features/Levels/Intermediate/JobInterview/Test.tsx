
import React from "react";
import TestForm from "../../../TestForm/TestForm";
import Sticker from "../../../TooltipTest/TooltipTest";
import terms from "./TermListData";
import "../../../../styles/Test.css";
import "../../../../styles/JobInterview.css";

interface TestProps {
  navigateToTheNextTab: (newValue: number) => void;
}

const Test: React.FC<TestProps> = ({ navigateToTheNextTab }) => {
  const questionsAndAnswers = [
    {
      question: "suitable for something, be in shape for:",
      options: ["reflect", "fit for", "eager to", "maintain"],
      correctAnswer: "fit for",
    },
    {
      question: "to be devoted to something:",
      options: ["resourceful", "showcase", "be committed to", "keep up with"],
      correctAnswer: "be committed to",
    },
    {
      question: "exact, correct:",
      options: ["accurate", "thoughtful", "patient", "direct"],
      correctAnswer: "accurate",
    },
    {
      question: "stay updated with:",
      options: ["to be aware", "excel at", "keep up with", "catch up in"],
      correctAnswer: "keep up with",
    },
    {
      question: " smoothly, without interruption:",
      options: ["relevant", "crucial", "direct", "seamlessly"],
      correctAnswer: "seamlessly",
    },
    {
      question: "to preserve, keep in a certain state:",
      options: ["maintain", "strive", "evaluate", "secure"],
      correctAnswer: "maintain",
    },
    {
      question: "to be highly proficient in smth:",
      options: ["catch up in", "excel at", "involve", "bring to the table"],
      correctAnswer: "excel at",
    },
    {
      question: "have a proven history of success in...:",
      options: [
        "to involve (in) (involvement) ",
        "engage (in),",
        "have a strong track record in...",
        "well-organized",
      ],
      correctAnswer: "have a strong track record in...",
    },
    {
      question: "contribute, offer:",
      options: ["strive", "foster", "bring to the table", "identify"],
      correctAnswer: "cultivate",
    },
    {
      question: "to recognize, determine the nature of:",
      options: [
        "have a strong track record in...",
        "deal with ",
        "reflect",
        "identify",
      ],
      correctAnswer: "identify",
    },
    {
      question: "to handle, manage:",
      options: ["identify", "deal with ", "showcase", "determine"],
      correctAnswer: "deal with",
    },
    {
      question: "someone who can solve a problem:",
      options: ["purposeful", "supportive person", "troubleshooter", "manager"],
      correctAnswer: "troubleshooter",
    },
    {
      question: "skilled at examining and interpreting data:",
      options: ["accurate", "thoughtful", "analytical", "patient"],
      correctAnswer: "analytical ",
    },
    {
      question: "receptive to new ideas or perspectives:",
      options: ["open-minded", "flexible", "adaptable", "direct"],
      correctAnswer: "open-minded",
    },
    {
      question: "adhere to a plan until completion:",
      options: [
        "follow a plan by",
        "follow a plan accurate",
        "follow a plan through ",
        "follow a plan direct",
      ],
      correctAnswer: "follow a plan through ",
    },
  ];

  return (
    <div>
      <div className="lesson-block">
        <div className="sticker-container">
          <Sticker terms={terms} />
        </div>
        <div className="blocks">
          <TestForm questionsAndAnswers={questionsAndAnswers} />
        </div>
      </div>
    </div>
  );
};

export default Test;






