import { Sentence } from "./types";

export const initialWordsData: string[] = [
  "craft",
  "burst",
  "forth",
  "set forth",
  "they set forth",
];

export const sentencesData: Sentence[] = [
  {
    id: "sentence1",
    text: "______ of furniture making and sewing, glassblowing",
    correctWords: ["craft"],
  },
  { id: "sentence2", text: "Applause ______", correctWords: ["burst forth"] },
  { id: "sentence3", text: "dashing ______", correctWords: ["back and forth"] },
  {
    id: "sentence4",
    text: "they ______ on their travels in early June",
    correctWords: ["set forth"],
  },
  {
    id: "sentence5",
    text: "______ the conditions for her release",
    correctWords: ["they set forth"],
  },
];
