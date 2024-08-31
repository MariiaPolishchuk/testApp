export interface Word {
  id: string;
  text: string;
}

export interface Synonym {
  id: string;
  text: string;
}

export const words: Word[] = [
  { id: "word1", text: "hubbub" },
  { id: "word2", text: "develop" },
  { id: "word3", text: "imbibe" },
  { id: "word4", text: "create" },
  { id: "word5", text: "feeling" },
  { id: "word6", text: "scrupulous" },
  { id: "word7", text: "refuge" },
  { id: "word8", text: "usual" },
  { id: "word9", text: "to be in a future" },
  { id: "word10", text: "figure out" },
  { id: "word11", text: "explore" },
];

export const synonyms: Synonym[] = [
  { id: "syn1", text: "hustle and bustle" },
  { id: "syn2", text: "cultivate" },
  { id: "syn3", text: "sip on" },
  { id: "syn4", text: "craft" },
  { id: "syn5", text: "sensory experience" },
  { id: "syn6", text: "meticulously" },
  { id: "syn7", text: "sanctuary" },
  { id: "syn8", text: "mundane" },
  { id: "syn9", text: "lie ahead" },
  { id: "syn10", text: "unravel the layers" },
  { id: "syn11", text: "delve into" },
];
