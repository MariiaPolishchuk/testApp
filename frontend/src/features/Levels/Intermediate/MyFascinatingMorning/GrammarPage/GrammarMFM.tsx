export interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

export interface WordsGame {
  sentences: Sentence[];
  words: string[];
}

const GrammarMFM: WordsGame = {
  sentences: [
    {
      id: "sentence1",
      text: "Every morning, she (practise)  mindfulness, which (contribute)  to her overall well-being.",
      correctWords: ["practises", "contributes"],
    },
    {
      id: "sentence2",
      text: "Right now, they (prepare)  a nutritious breakfast to start the day on a positive note.",
      correctWords: ["prepare"],
    },
    {
      id: "sentence3",
      text: "By the time she (arrive)  at work, she (already/complete)  her morning planning.",
      correctWords: ["arrives", "has already completed"],
    },
    {
      id: "sentence4",
      text: "Recently, he (incorporate)  new self-care practices into his morning routine, and he (feel)  more energized.",
      correctWords: ["incorporates", "feels"],
    },
    {
      id: "sentence5",
      text: "They (exercise)  for an hour every morning, and their physical health (improve)  significantly.",
      correctWords: ["exercise", "improves"],
    },
    {
      id: "sentence6",
      text: "I (try)  to establish a consistent morning routine, but I (face)  some challenges.",
      correctWords: ["am trying", "face"],
    },
    {
      id: "sentence7",
      text: "I (wait)  for you all morning! Where are you? (To be going/sip on)  this incredible moment without me?",
      correctWords: ["am waiting", "are going to sip on"],
    },
    {
      id: "sentence8",
      text: "Recently, I (craft)  a morning routine that (infuse)  my day with a sense of purpose.",
      correctWords: ["have crafted", "infuses"],
    },
    {
      id: "sentence9",
      text: "Recently, he (adopt)  a healthy lifestyle and (feel)  more invigorated.",
      correctWords: ["has adopted", "feels"],
    },
    {
      id: "sentence10",
      text: "For the past ten years they (cultivate)  a fulfilling and intentional life.",
      correctWords: ["have cultivated"],
    },
    {
      id: "sentence11",
      text: "She (shape)  their lives by adopting healthier habits over the months.",
      correctWords: ["shapes"],
    },
    {
      id: "sentence12",
      text: "She (not/read)  the newspaper yet because she (just/finish)  her morning meditation.",
      correctWords: ["has not read", "has just finished"],
    },
    {
      id: "sentence13",
      text: "I (think)  about my goals while (enjoy)  a quiet moment with a cup of tea.",
      correctWords: ["think", "enjoy"],
    },
    {
      id: "sentence14",
      text: "He (lie)  in bed, contemplating the fulfilling and intentional life he (try)  to foster.",
      correctWords: ["lies", "is trying"],
    },
    {
      id: "sentence15",
      text: "By the time she (get)  to work, she (already/unravel)  the layers of tasks that lie ahead.",
      correctWords: ["gets", "has already unraveled"],
    },
    {
      id: "sentence16",
      text: "How long (you actively cultivate)  a positive mindset?",
      correctWords: ["have you been actively cultivating"],
    },
    {
      id: "sentence17",
      text: "(You work)  on the project since last month?",
      correctWords: ["Have you been working"],
    },
    {
      id: "sentence18",
      text: "What aspects of your life (currently shape)  your future?",
      correctWords: ["is currently shaping"],
    },
    {
      id: "sentence19",
      text: "What specific areas of your interests (delve into)  these days?",
      correctWords: ["are delving into"],
    },
    {
      id: "sentence20",
      text: "(You ever experience)  something truly invigorating that (stay)  with you?",
      correctWords: ["Have you ever experienced", "has stayed"],
    },
  ],
  words: [
    "practises",
    "contributes",
    "prepares",
    "arrives",
    "has already completed",
    "incorporates",
    "feels",
    "exercises",
    "improves",
    "am trying",
    "face",
    "am waiting",
    "are going to sip on",
    "have crafted",
    "infuses",
    "adopts",
    "feels",
    "cultivate",
    "shapes",
    "has not read",
    "has just finished",
    "think",
    "enjoy",
    "lies",
    "is trying",
    "gets",
    "has already unraveled",
    "have been actively cultivating",
    "have you been working",
    "is currently shaping",
    "are delving into",
    "have you ever experienced",
    "has stayed",
  ],
};

export default GrammarMFM;





