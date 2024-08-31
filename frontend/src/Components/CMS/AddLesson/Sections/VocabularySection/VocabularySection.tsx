// import React, { useState, useEffect } from 'react';
// import SynonymsCMS from './Synonyms/SynonymsCMS';
// import './VocabulartSection.css';

// interface VocabularySectionCMSProps {
//   lessonData: any;
//   setLessonData: (data: any) => void;
// }

// interface BlankWord {
//   id: string;
//   correctWord: string;
// }

// interface TestItem {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// const VocabularySectionCMS: React.FC<VocabularySectionCMSProps> = ({ lessonData, setLessonData }) => {
//   const [sentence, setSentence] = useState<string>("");
//   const [blankWords, setBlankWords] = useState<BlankWord[]>([]);
//   const [newWord, setNewWord] = useState<string>("");
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   const [testQuestion, setTestQuestion] = useState<string>("");
//   const [testOptions, setTestOptions] = useState<string[]>([]);
//   const [correctAnswer, setCorrectAnswer] = useState<string>("");
//   const [newOption, setNewOption] = useState<string>("");
//   const [editingTestIndex, setEditingTestIndex] = useState<number | null>(null);

//   useEffect(() => {
//     // Убедимся, что vocabulary и test всегда являются массивами
//     lessonData.sections.vocabulary = Array.isArray(lessonData.sections.vocabulary) ? lessonData.sections.vocabulary : [];
//     lessonData.sections.test = Array.isArray(lessonData.sections.test) ? lessonData.sections.test : [];
//   }, [lessonData]);

//   const addOrUpdateSentence = () => {
//     if (sentence && blankWords.length > 0) {
//       const newSentence = {
//         id: editingIndex !== null ? `${editingIndex + 1}` : `${(lessonData.sections.vocabulary || []).length + 1}`,
//         text: sentence,
//         correctWords: blankWords.map((blank) => blank.correctWord),
//       };

//       const updatedVocabulary = editingIndex !== null
//         ? lessonData.sections.vocabulary.map((s: any, index: number) => index === editingIndex ? newSentence : s)
//         : [...(lessonData.sections.vocabulary || []), newSentence];

//       setLessonData({
//         ...lessonData,
//         sections: {
//           ...lessonData.sections,
//           vocabulary: updatedVocabulary,
//         },
//       });

//       resetForm();
//     } else {
//       alert("Please provide a sentence and at least one correct word.");
//     }
//   };

//   const addBlankWord = () => {
//     if (newWord) {
//       const newBlankWord: BlankWord = {
//         id: `${blankWords.length + 1}`,
//         correctWord: newWord,
//       };
//       setBlankWords([...blankWords, newBlankWord]);
//       setNewWord("");
//     }
//   };

//   const removeBlankWord = (id: string) => {
//     setBlankWords(blankWords.filter((blank) => blank.id !== id));
//   };

//   const deleteSentence = (index: number) => {
//     const updatedVocabulary = lessonData.sections.vocabulary.filter((_: any, i: number) => i !== index);
//     setLessonData({
//       ...lessonData,
//       sections: {
//         ...lessonData.sections,
//         vocabulary: updatedVocabulary,
//       },
//     });
//   };

//   const editSentence = (index: number) => {
//     const sentenceToEdit = lessonData.sections.vocabulary[index];
//     setSentence(sentenceToEdit.text);
//     setBlankWords(sentenceToEdit.correctWords.map((word: any, i: number) => ({
//       id: `${i + 1}`,
//       correctWord: word,
//     })));
//     setEditingIndex(index);
//   };

//   const addTestOption = () => {
//     if (newOption) {
//       setTestOptions([...testOptions, newOption]);
//       setNewOption("");
//     }
//   };

//   const addOrUpdateTestQuestion = () => {
//     if (testQuestion && correctAnswer && testOptions.length > 0) {
//       const newTestItem: TestItem = {
//         question: testQuestion,
//         options: testOptions,
//         correctAnswer: correctAnswer,
//       };

//       const updatedTests = editingTestIndex !== null
//         ? lessonData.sections.test.map((test: any, index: number) => index === editingTestIndex ? newTestItem : test)
//         : [...(lessonData.sections.test || []), newTestItem];

//       setLessonData({
//         ...lessonData,
//         sections: {
//           ...lessonData.sections,
//           test: updatedTests,
//         },
//       });

//       resetTestForm();
//     } else {
//       alert("Please provide a question, correct answer, and at least one option.");
//     }
//   };

//   const deleteTestQuestion = (index: number) => {
//     const updatedTests = lessonData.sections.test.filter((_: any, i: number) => i !== index);
//     setLessonData({
//       ...lessonData,
//       sections: {
//         ...lessonData.sections,
//         test: updatedTests,
//       },
//     });
//   };

//   const editTestQuestion = (index: number) => {
//     const testToEdit = lessonData.sections.test[index];
//     setTestQuestion(testToEdit.question);
//     setTestOptions(testToEdit.options);
//     setCorrectAnswer(testToEdit.correctAnswer);
//     setEditingTestIndex(index);
//   };

//   const resetForm = () => {
//     setSentence("");
//     setNewWord("");
//     setBlankWords([]);
//     setEditingIndex(null);
//   };

//   const resetTestForm = () => {
//     setTestQuestion("");
//     setTestOptions([]);
//     setCorrectAnswer("");
//     setNewOption("");
//     setEditingTestIndex(null);
//   };

//   return (
//     <div className="vocabulary-section-cms">
//       <h4>Add Vocabulary Section</h4>
//       <div className="form-group">
//         <label htmlFor="sentence">Sentence:</label>
//         <input
//           type="text"
//           id="sentence"
//           value={sentence}
//           onChange={(e) => setSentence(e.target.value)}
//           placeholder="Enter a sentence with blanks using ____ (e.g., 'The quick brown ____ jumps over the lazy _____.')"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="new-word">Correct Word:</label>
//         <input
//           type="text"
//           id="new-word"
//           value={newWord}
//           onChange={(e) => setNewWord(e.target.value)}
//           placeholder="Enter a correct word (e.g., 'fox', 'dog')"
//         />
//         <button type="button" onClick={addBlankWord}>Add Correct Word</button>
//       </div>
//       <ul>
//         {blankWords.map((blank) => (
//           <li key={blank.id}>
//             <span>{blank.correctWord}</span>
//             <button type="button" onClick={() => removeBlankWord(blank.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button type="button" onClick={addOrUpdateSentence}>
//         {editingIndex !== null ? "Update Sentence" : "Add Sentence"}
//       </button>
//       <button type="button" onClick={resetForm}>Reset</button>
//       <div className="form-group">
//         <h5>Added Sentences:</h5>
//         <ul>
//           {(lessonData.sections.vocabulary || []).map((sentence: any, index: number) => (
//             <li key={sentence.id}>
//               <span>{sentence.text}</span> (Correct Words: {sentence.correctWords.join(", ")})
//               <button type="button" onClick={() => editSentence(index)}>Edit</button>
//               <button type="button" onClick={() => deleteSentence(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <h4>Add Synonyms</h4>
//       <SynonymsCMS lessonData={lessonData} setLessonData={setLessonData} />

//       <h4>Add Test Questions</h4>
//       <div className="form-group">
//         <label htmlFor="test-question">Question:</label>
//         <input
//           type="text"
//           id="test-question"
//           value={testQuestion}
//           onChange={(e) => setTestQuestion(e.target.value)}
//           placeholder="Enter a test question"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="new-option">Option:</label>
//         <input
//           type="text"
//           id="new-option"
//           value={newOption}
//           onChange={(e) => setNewOption(e.target.value)}
//           placeholder="Enter an option"
//         />
//         <button type="button" onClick={addTestOption}>Add Option</button>
//       </div>
//       <div className="form-group">
//         <label htmlFor="correct-answer">Correct Answer:</label>
//         <select
//           id="correct-answer"
//           value={correctAnswer}
//           onChange={(e) => setCorrectAnswer(e.target.value)}
//         >
//           <option value="">Select the correct answer</option>
//           {testOptions.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="button" onClick={addOrUpdateTestQuestion}>
//         {editingTestIndex !== null ? "Update Test Question" : "Add Test Question"}
//       </button>
//       <button type="button" onClick={resetTestForm}>Reset</button>
//       <div className="form-group">
//         <h5>Added Test Questions:</h5>
//         <ul>
//           {(lessonData.sections.test || []).map((test: TestItem, index: number) => (
//             <li key={index}>
//               <span>{test.question}</span> (Correct Answer: {test.correctAnswer})
//               <ul>
//                 {test.options.map((option, i) => (
//                   <li key={i}>{option}</li>
//                 ))}
//               </ul>
//               <button type="button" onClick={() => editTestQuestion(index)}>Edit</button>
//               <button type="button" onClick={() => deleteTestQuestion(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default VocabularySectionCMS;



// import React, { useState, useEffect } from 'react';
// import SynonymsCMS from './Synonyms/SynonymsCMS';
// import TestQuestionsCMS from './TestQuestions/TestQuestionsCMS';
// import './VocabulartSection.css';

// interface VocabularySectionCMSProps {
//   lessonData: any;
//   setLessonData: (data: any) => void;
// }

// interface BlankWord {
//   id: string;
//   correctWord: string;
// }

// const VocabularySectionCMS: React.FC<VocabularySectionCMSProps> = ({ lessonData, setLessonData }) => {
//   const [sentence, setSentence] = useState<string>("");
//   const [blankWords, setBlankWords] = useState<BlankWord[]>([]);
//   const [newWord, setNewWord] = useState<string>("");
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   useEffect(() => {
//     // Убедимся, что vocabulary всегда является массивом
//     lessonData.sections.vocabulary = Array.isArray(lessonData.sections.vocabulary) ? lessonData.sections.vocabulary : [];
//   }, [lessonData]);

//   const addOrUpdateSentence = () => {
//     if (sentence && blankWords.length > 0) {
//       const newSentence = {
//         id: editingIndex !== null ? `${editingIndex + 1}` : `${(lessonData.sections.vocabulary || []).length + 1}`,
//         text: sentence,
//         correctWords: blankWords.map((blank) => blank.correctWord),
//       };

//       const updatedVocabulary = editingIndex !== null
//         ? lessonData.sections.vocabulary.map((s: any, index: number) => index === editingIndex ? newSentence : s)
//         : [...(lessonData.sections.vocabulary || []), newSentence];

//       setLessonData({
//         ...lessonData,
//         sections: {
//           ...lessonData.sections,
//           vocabulary: updatedVocabulary,
//         },
//       });

//       resetForm();
//     } else {
//       alert("Please provide a sentence and at least one correct word.");
//     }
//   };

//   const addBlankWord = () => {
//     if (newWord) {
//       const newBlankWord: BlankWord = {
//         id: `${blankWords.length + 1}`,
//         correctWord: newWord,
//       };
//       setBlankWords([...blankWords, newBlankWord]);
//       setNewWord("");
//     }
//   };

//   const removeBlankWord = (id: string) => {
//     setBlankWords(blankWords.filter((blank) => blank.id !== id));
//   };

//   const deleteSentence = (index: number) => {
//     const updatedVocabulary = lessonData.sections.vocabulary.filter((_: any, i: number) => i !== index);
//     setLessonData({
//       ...lessonData,
//       sections: {
//         ...lessonData.sections,
//         vocabulary: updatedVocabulary,
//       },
//     });
//   };

//   const editSentence = (index: number) => {
//     const sentenceToEdit = lessonData.sections.vocabulary[index];
//     setSentence(sentenceToEdit.text);
//     setBlankWords(sentenceToEdit.correctWords.map((word: any, i: number) => ({
//       id: `${i + 1}`,
//       correctWord: word,
//     })));
//     setEditingIndex(index);
//   };

//   const resetForm = () => {
//     setSentence("");
//     setNewWord("");
//     setBlankWords([]);
//     setEditingIndex(null);
//   };

//   return (
//     <div className="vocabulary-section-cms">
//       <h4>Add sentences for dragging</h4>
//       <div className="form-group">
//         <label htmlFor="sentence">Sentence:</label>
//         <input
//           type="text"
//           id="sentence"
//           value={sentence}
//           onChange={(e) => setSentence(e.target.value)}
//           placeholder="Enter a sentence with blanks using ____ (e.g., 'The quick brown ____ jumps over the lazy _____.')"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="new-word">Correct Word:</label>
//         <input
//           type="text"
//           id="new-word"
//           value={newWord}
//           onChange={(e) => setNewWord(e.target.value)}
//           placeholder="Enter a correct word (e.g., 'fox', 'dog')"
//         />
//         <button type="button" onClick={addBlankWord}>Add Correct Word</button>
//       </div>
//       <ul>
//         {blankWords.map((blank) => (
//           <li key={blank.id}>
//             <span>{blank.correctWord}</span>
//             <button type="button" onClick={() => removeBlankWord(blank.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button type="button" onClick={addOrUpdateSentence}>
//         {editingIndex !== null ? "Update Sentence" : "Add Sentence"}
//       </button>
//       <button type="button" onClick={resetForm}>Reset</button>
//       <div className="form-group">
//         <h5>Added Sentences:</h5>
//         <ul>
//           {(lessonData.sections.vocabulary || []).map((sentence: any, index: number) => (
//             <li key={sentence.id}>
//               <span>{sentence.text}</span> (Correct Words: {sentence.correctWords.join(", ")})
//               <button type="button" onClick={() => editSentence(index)}>Edit</button>
//               <button type="button" onClick={() => deleteSentence(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <h4>Add Synonyms</h4>
//       <SynonymsCMS lessonData={lessonData} setLessonData={setLessonData} />

//       <h4>Add Test Questions</h4>
//       <TestQuestionsCMS lessonData={lessonData} setLessonData={setLessonData} />
//     </div>
//   );
// };

// export default VocabularySectionCMS;



// import React, { useState, useEffect } from 'react';
// import SynonymsCMS from './Synonyms/SynonymsCMS';
// import TestQuestionsCMS from './TestQuestions/TestQuestionsCMS';
// import { Button, IconButton, Box, Typography, TextField } from "@mui/material";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import './VocabulartSection.css';

// interface VocabularySectionCMSProps {
//   lessonData: any;
//   setLessonData: (data: any) => void;
// }

// interface BlankWord {
//   id: string;
//   correctWord: string;
// }

// const VocabularySectionCMS: React.FC<VocabularySectionCMSProps> = ({ lessonData, setLessonData }) => {
//   const [sentence, setSentence] = useState<string>("");
//   const [blankWords, setBlankWords] = useState<BlankWord[]>([]);
//   const [newWord, setNewWord] = useState<string>("");
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   useEffect(() => {
//     lessonData.sections.vocabulary = Array.isArray(lessonData.sections.vocabulary) ? lessonData.sections.vocabulary : [];
//   }, [lessonData]);

//   const addOrUpdateSentence = () => {
//     if (sentence && blankWords.length > 0) {
//       const newSentence = {
//         id: editingIndex !== null ? `${editingIndex + 1}` : `${(lessonData.sections.vocabulary || []).length + 1}`,
//         text: sentence,
//         correctWords: blankWords.map((blank) => blank.correctWord),
//       };

//       const updatedVocabulary = editingIndex !== null
//         ? lessonData.sections.vocabulary.map((s: any, index: number) => index === editingIndex ? newSentence : s)
//         : [...(lessonData.sections.vocabulary || []), newSentence];

//       setLessonData({
//         ...lessonData,
//         sections: {
//           ...lessonData.sections,
//           vocabulary: updatedVocabulary,
//         },
//       });

//       resetForm();
//     } else {
//       alert("Please provide a sentence and at least one correct word.");
//     }
//   };

//   const addBlankWord = () => {
//     if (newWord) {
//       const newBlankWord: BlankWord = {
//         id: `${blankWords.length + 1}`,
//         correctWord: newWord,
//       };
//       setBlankWords([...blankWords, newBlankWord]);
//       setNewWord("");
//     }
//   };

//   const removeBlankWord = (id: string) => {
//     setBlankWords(blankWords.filter((blank) => blank.id !== id));
//   };

//   const deleteSentence = (index: number) => {
//     const updatedVocabulary = lessonData.sections.vocabulary.filter((_: any, i: number) => i !== index);
//     setLessonData({
//       ...lessonData,
//       sections: {
//         ...lessonData.sections,
//         vocabulary: updatedVocabulary,
//       },
//     });
//   };

//   const editSentence = (index: number) => {
//     const sentenceToEdit = lessonData.sections.vocabulary[index];
//     setSentence(sentenceToEdit.text);
//     setBlankWords(sentenceToEdit.correctWords.map((word: any, i: number) => ({
//       id: `${i + 1}`,
//       correctWord: word,
//     })));
//     setEditingIndex(index);
//   };

//   const resetForm = () => {
//     setSentence("");
//     setNewWord("");
//     setBlankWords([]);
//     setEditingIndex(null);
//   };

//   return (
//     <Box className="vocabulary-section-cms">
//       <Typography variant="h4" gutterBottom>
//         Add sentences for dragging
//       </Typography>
//       <Box className="form-group">
//         <label htmlFor="sentence">Sentence:</label>
//         <TextField
//           id="sentence"
//           value={sentence}
//           onChange={(e) => setSentence(e.target.value)}
//           placeholder="Enter a sentence with blanks using ____ (e.g., 'The quick brown ____ jumps over the lazy _____.')"
//           fullWidth
//           variant="outlined"
//         />
//       </Box>
//       <Box className="form-group">
//         <label htmlFor="new-word">Correct Word:</label>
//         <TextField
//           id="new-word"
//           value={newWord}
//           onChange={(e) => setNewWord(e.target.value)}
//           placeholder="Enter a correct word (e.g., 'fox', 'dog')"
//           fullWidth
//           variant="outlined"
//         />
//         <Button variant="contained" color="primary" onClick={addBlankWord} sx={{ mt: 2 }}>
//           Add Correct Word
//         </Button>
//       </Box>
//       <ul>
//         {blankWords.map((blank) => (
//           <li key={blank.id}>
//             <span>{blank.correctWord}</span>
//             <IconButton color="secondary" onClick={() => removeBlankWord(blank.id)}>
//               <DeleteIcon />
//             </IconButton>
//           </li>
//         ))}
//       </ul>
//       <Button variant="contained" color="primary" onClick={addOrUpdateSentence} sx={{ mt: 2 }}>
//         {editingIndex !== null ? "Update Sentence" : "Add Sentence"}
//       </Button>
//       <Button variant="outlined" onClick={resetForm} sx={{ mt: 2, ml: 2 }}>
//         Reset
//       </Button>
//       <Box className="form-group">
//         <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
//           Added Sentences:
//         </Typography>
//         <ul>
//           {(lessonData.sections.vocabulary || []).map((sentence: any, index: number) => (
//             <li key={sentence.id}>
//               <span>{sentence.text}</span> (Correct Words: {sentence.correctWords.join(", ")})
//               <IconButton color="primary" onClick={() => editSentence(index)}>
//                 <EditIcon />
//               </IconButton>
//               <IconButton color="secondary" onClick={() => deleteSentence(index)}>
//                 <DeleteIcon />
//               </IconButton>
//             </li>
//           ))}
//         </ul>
//       </Box>

//       <Typography variant="h4" gutterBottom>
//         Add Synonyms
//       </Typography>
//       <SynonymsCMS lessonData={lessonData} setLessonData={setLessonData} />

//       <Typography variant="h4" gutterBottom>
//         Add Test Questions
//       </Typography>
//       <TestQuestionsCMS lessonData={lessonData} setLessonData={setLessonData} />
//     </Box>
//   );
// };

// export default VocabularySectionCMS;






import React, { useState, useEffect } from 'react';
import SynonymsCMS from './Synonyms/SynonymsCMS';
import TestQuestionsCMS from './TestQuestions/TestQuestionsCMS';
import { Button, IconButton, Box, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './VocabulartSection.css';  // Подключаем стили

interface VocabularySectionCMSProps {
  lessonData: any;
  setLessonData: (data: any) => void;
}

interface BlankWord {
  id: string;
  correctWord: string;
}

const VocabularySectionCMS: React.FC<VocabularySectionCMSProps> = ({ lessonData, setLessonData }) => {
  const [sentence, setSentence] = useState<string>("");
  const [blankWords, setBlankWords] = useState<BlankWord[]>([]);
  const [newWord, setNewWord] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    lessonData.sections.vocabulary = Array.isArray(lessonData.sections.vocabulary) ? lessonData.sections.vocabulary : [];
  }, [lessonData]);

  const addOrUpdateSentence = () => {
    if (sentence && blankWords.length > 0) {
      const newSentence = {
        id: editingIndex !== null ? `${editingIndex + 1}` : `${(lessonData.sections.vocabulary || []).length + 1}`,
        text: sentence,
        correctWords: blankWords.map((blank) => blank.correctWord),
      };

      const updatedVocabulary = editingIndex !== null
        ? lessonData.sections.vocabulary.map((s: any, index: number) => index === editingIndex ? newSentence : s)
        : [...(lessonData.sections.vocabulary || []), newSentence];

      setLessonData({
        ...lessonData,
        sections: {
          ...lessonData.sections,
          vocabulary: updatedVocabulary,
        },
      });

      resetForm();
    } else {
      alert("Please provide a sentence and at least one correct word.");
    }
  };

  const addBlankWord = () => {
    if (newWord) {
      const newBlankWord: BlankWord = {
        id: `${blankWords.length + 1}`,
        correctWord: newWord,
      };
      setBlankWords([...blankWords, newBlankWord]);
      setNewWord("");
    }
  };

  const removeBlankWord = (id: string) => {
    setBlankWords(blankWords.filter((blank) => blank.id !== id));
  };

  const deleteSentence = (index: number) => {
    const updatedVocabulary = lessonData.sections.vocabulary.filter((_: any, i: number) => i !== index);
    setLessonData({
      ...lessonData,
      sections: {
        ...lessonData.sections,
        vocabulary: updatedVocabulary,
      },
    });
  };

  const editSentence = (index: number) => {
    const sentenceToEdit = lessonData.sections.vocabulary[index];
    setSentence(sentenceToEdit.text);
    setBlankWords(sentenceToEdit.correctWords.map((word: any, i: number) => ({
      id: `${i + 1}`,
      correctWord: word,
    })));
    setEditingIndex(index);
  };

  const resetForm = () => {
    setSentence("");
    setNewWord("");
    setBlankWords([]);
    setEditingIndex(null);
  };

  return (
    <Box className="vocabulary-section-cms">
      <Typography variant="h4" gutterBottom>
        Add sentences for dragging
      </Typography>
      <Box className="form-group">
        <label htmlFor="sentence">Sentence:</label>
        <TextField
          id="sentence"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          placeholder="Enter a sentence with blanks using ____ (e.g., 'The quick brown ____ jumps over the lazy _____.')"
          fullWidth
          variant="outlined"
        />
      </Box>
      <Box className="form-group">
        <label htmlFor="new-word">Correct Word:</label>
        <TextField
          id="new-word"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Enter a correct word (e.g., 'fox', 'dog')"
          fullWidth
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={addBlankWord} sx={{ mt: 2 }}>
          Add Correct Word
        </Button>
      </Box>
      <ul>
        {blankWords.map((blank) => (
          <li key={blank.id}>
            <span>{blank.correctWord}</span>
            <IconButton className="delete" onClick={() => removeBlankWord(blank.id)}>
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary" onClick={addOrUpdateSentence} sx={{ mt: 2 }}>
        {editingIndex !== null ? "Update Sentence" : "Add Sentence"}
      </Button>
      <Button variant="outlined" onClick={resetForm} sx={{ mt: 2, ml: 2 }}>
        Reset
      </Button>
      <Box className="form-group">
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Added Sentences:
        </Typography>
        <ul>
          {(lessonData.sections.vocabulary || []).map((sentence: any, index: number) => (
            <li key={sentence.id}>
              <span>{sentence.text}</span> (Correct Words: {sentence.correctWords.join(", ")})
              <IconButton className="edit" onClick={() => editSentence(index)}>
                <EditIcon />
              </IconButton>
              <IconButton className="delete" onClick={() => deleteSentence(index)}>
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      </Box>

      <Typography variant="h4" gutterBottom>
        Add Synonyms
      </Typography>
      <SynonymsCMS lessonData={lessonData} setLessonData={setLessonData} />

      <Typography variant="h4" gutterBottom>
        Add Test Questions
      </Typography>
      <TestQuestionsCMS lessonData={lessonData} setLessonData={setLessonData} />
    </Box>
  );
};

export default VocabularySectionCMS;

