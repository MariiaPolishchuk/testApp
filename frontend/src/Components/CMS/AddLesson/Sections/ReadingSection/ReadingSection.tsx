// // src/components/CMS/AddLesson/ReadingSection.tsx

// // src/Components/CMS/AddLesson/ReadingSection.tsx
// import React, { useState } from 'react';

// interface ReadingSectionProps {
//   lessonData: any;
//   setLessonData: (data: any) => void;
// }

// const ReadingSection: React.FC<ReadingSectionProps> = ({ lessonData, setLessonData }) => {
//   const [tooltipText, setTooltipText] = useState('');
//   const [selectedText, setSelectedText] = useState('');
//   const [newQuestion, setNewQuestion] = useState('');

//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setLessonData((prevLesson: any) => ({
//       ...prevLesson,
//       sections: {
//         ...prevLesson.sections,
//         [name]: value,
//       },
//     }));
//   };

//   const handleTooltipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTooltipText(e.target.value);
//   };

//   const addTooltip = () => {
//     if (selectedText && tooltipText) {
//       const newText = lessonData.sections.reading.replace(
//         selectedText,
//         `<span data-tooltip="${tooltipText}">${selectedText}</span>`
//       );
//       setLessonData((prevLesson: any) => ({
//         ...prevLesson,
//         sections: {
//           ...prevLesson.sections,
//           reading: newText,
//         },
//       }));
//       setSelectedText('');
//       setTooltipText('');
//     }
//   };

//   const handleSelection = () => {
//     const selection = window.getSelection();
//     if (selection) {
//       setSelectedText(selection.toString().trim());
//     }
//   };

//   const handleNewQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewQuestion(e.target.value);
//   };

//   const addQuestion = () => {
//     if (newQuestion && !lessonData.sections.readingQuestions.includes(newQuestion)) {
//       setLessonData((prevLesson: any) => ({
//         ...prevLesson,
//         sections: {
//           ...prevLesson.sections,
//           readingQuestions: [...(prevLesson.sections.readingQuestions || []), newQuestion],
//         },
//       }));
//       setNewQuestion('');
//     } else {
//       alert('This question already exists or is empty.');
//     }
//   };

//   const removeQuestion = (index: number) => {
//     setLessonData((prevLesson: any) => {
//       const updatedQuestions = [...prevLesson.sections.readingQuestions];
//       updatedQuestions.splice(index, 1);
//       return {
//         ...prevLesson,
//         sections: {
//           ...prevLesson.sections,
//           readingQuestions: updatedQuestions,
//         },
//       };
//     });
//   };

//   return (
//     <div className="reading-page">
//       <h4 className="reading-task">
//         Task. Read the text carefully, pay attention to the highlighted words.
//         Tick the button to answer the questions.
//       </h4>

//       <textarea
//         id="reading"
//         name="reading"
//         value={lessonData.sections.reading}
//         onChange={handleTextChange}
//         onMouseUp={handleSelection}
//         placeholder="Enter reading text"
//         style={{ width: '100%', height: '150px' }}
//       />
//       <input
//         type="text"
//         value={tooltipText}
//         onChange={handleTooltipChange}
//         placeholder="Enter tooltip text"
//       />
//       <button onClick={addTooltip}>Add Tooltip</button>

//       <h4 className="questions-task">
//         Questions for this text:
//       </h4>
//       <input
//         type="text"
//         value={newQuestion}
//         onChange={handleNewQuestionChange}
//         placeholder="Enter a new question"
//       />
//       <button onClick={addQuestion}>Add Question</button>

//       <ul>
//         {lessonData.sections.readingQuestions && lessonData.sections.readingQuestions.map((question: string, index: number) => (
//           <li key={index}>
//             {question}
//             <button onClick={() => removeQuestion(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>

//       <div
//         className="preview"
//         dangerouslySetInnerHTML={{ __html: lessonData.sections.reading }}
//       />
//     </div>
//   );
// };

// export default ReadingSection;


// import React, { useState } from "react";

// interface ReadingSectionProps {
//   lessonData: any;
//   setLessonData: (data: any) => void;
// }

// const ReadingSection: React.FC<ReadingSectionProps> = ({ lessonData, setLessonData }) => {
//   const [tooltipText, setTooltipText] = useState('');
//   const [selectedText, setSelectedText] = useState('');
//   const [newQuestion, setNewQuestion] = useState('');

//   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setLessonData((prevLesson: any) => ({
//       ...prevLesson,
//       sections: {
//         ...prevLesson.sections,
//         [name]: value,
//       },
//     }));
//   };

//   const handleTooltipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTooltipText(e.target.value);
//   };

//   const addTooltip = () => {
//     if (selectedText && tooltipText) {
//       const newText = lessonData.sections.reading.replace(
//         selectedText,
//         `<span data-tooltip="${tooltipText}">${selectedText}</span>`
//       );
//       setLessonData((prevLesson: any) => ({
//         ...prevLesson,
//         sections: {
//           ...prevLesson.sections,
//           reading: newText,
//         },
//       }));
//       setSelectedText('');
//       setTooltipText('');
//     }
//   };

//   const handleSelection = () => {
//     const selection = window.getSelection();
//     if (selection) {
//       setSelectedText(selection.toString().trim());
//     }
//   };

//   const handleNewQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewQuestion(e.target.value);
//   };

//   const addQuestion = () => {
//     if (newQuestion && !lessonData.sections.readingQuestions.includes(newQuestion)) {
//       setLessonData((prevLesson: any) => ({
//         ...prevLesson,
//         sections: {
//           ...prevLesson.sections,
//           readingQuestions: [...(prevLesson.sections.readingQuestions || []), newQuestion],
//         },
//       }));
//       setNewQuestion('');
//     } else {
//       alert('This question already exists or is empty.');
//     }
//   };

//   const removeQuestion = (index: number) => {
//     setLessonData((prevLesson: any) => {
//       const updatedQuestions = [...prevLesson.sections.readingQuestions];
//       updatedQuestions.splice(index, 1);
//       return {
//         ...prevLesson,
//         sections: {
//           ...prevLesson.sections,
//           readingQuestions: updatedQuestions,
//         },
//       };
//     });
//   };

//   return (
//     <div className="reading-page">
//       <h4 className="reading-task">Task. Read the text carefully, pay attention to the highlighted words.</h4>

//       <textarea
//         id="reading"
//         name="reading"
//         value={lessonData.sections.reading}
//         onChange={handleTextChange}
//         onMouseUp={handleSelection}
//         placeholder="Enter reading text"
//         style={{ width: '100%', height: '150px' }}
//       />
//       <input
//         type="text"
//         value={tooltipText}
//         onChange={handleTooltipChange}
//         placeholder="Enter tooltip text"
//       />
//       <button onClick={addTooltip}>Add Tooltip</button>

//       <h4 className="questions-task">Questions for this text:</h4>
//       <input
//         type="text"
//         value={newQuestion}
//         onChange={handleNewQuestionChange}
//         placeholder="Enter a new question"
//       />
//       <button onClick={addQuestion}>Add Question</button>

//       <ul>
//         {lessonData.sections.readingQuestions &&
//           lessonData.sections.readingQuestions.map((question: string, index: number) => (
//             <li key={index}>
//               {question}
//               <button onClick={() => removeQuestion(index)}>Remove</button>
//             </li>
//           ))}
//       </ul>

//       <div className="preview" dangerouslySetInnerHTML={{ __html: lessonData.sections.reading }} />
//     </div>
//   );
// };

// export default ReadingSection;



// // Компонент для создания раздела чтения



 


// // ReadingSection.tsx



import React, { useState } from "react";
import { Button, TextField, List, ListItem } from "@mui/material";

interface ReadingSectionProps {
  lessonData: any;
  setLessonData: (data: any) => void;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ lessonData, setLessonData }) => {
  const [tooltipText, setTooltipText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [newQuestion, setNewQuestion] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLessonData((prevLesson: any) => ({
      ...prevLesson,
      sections: {
        ...prevLesson.sections,
        [name]: value,
      },
    }));
  };

  const handleTooltipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTooltipText(e.target.value);
  };

  const addTooltip = () => {
    if (selectedText && tooltipText) {
      const newText = lessonData.sections.reading.replace(
        selectedText,
        `<span data-tooltip="${tooltipText}">${selectedText}</span>`
      );
      setLessonData((prevLesson: any) => ({
        ...prevLesson,
        sections: {
          ...prevLesson.sections,
          reading: newText,
        },
      }));
      setSelectedText('');
      setTooltipText('');
    }
  };

  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection) {
      setSelectedText(selection.toString().trim());
    }
  };

  const handleNewQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuestion(e.target.value);
  };

  const addQuestion = () => {
    if (newQuestion && !lessonData.sections.readingQuestions.includes(newQuestion)) {
      setLessonData((prevLesson: any) => ({
        ...prevLesson,
        sections: {
          ...prevLesson.sections,
          readingQuestions: [...(prevLesson.sections.readingQuestions || []), newQuestion],
        },
      }));
      setNewQuestion('');
    } else {
      alert('This question already exists or is empty.');
    }
  };

  const removeQuestion = (index: number) => {
    setLessonData((prevLesson: any) => {
      const updatedQuestions = [...prevLesson.sections.readingQuestions];
      updatedQuestions.splice(index, 1);
      return {
        ...prevLesson,
        sections: {
          ...prevLesson.sections,
          readingQuestions: updatedQuestions,
        },
      };
    });
  };

  return (
    <div className="reading-page">
      <h4 className="reading-task">Task: Read the text carefully and pay attention to the highlighted words.</h4>

      <TextField
        id="reading"
        name="reading"
        multiline
        value={lessonData.sections.reading}
        onChange={handleTextChange}
        onMouseUp={handleSelection}
        placeholder="Enter reading text"
        fullWidth
        variant="outlined"
        rows={6}
        margin="normal"
      />

      <TextField
        label="Tooltip text"
        value={tooltipText}
        onChange={handleTooltipChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={addTooltip} style={{ marginBottom: '20px' }}>
        Add Tooltip
      </Button>

      <h4 className="questions-task">Questions for this text:</h4>
      <TextField
        label="New question"
        value={newQuestion}
        onChange={handleNewQuestionChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={addQuestion} style={{ marginBottom: '20px' }}>
        Add Question
      </Button>

      <List>
        {lessonData.sections.readingQuestions &&
          lessonData.sections.readingQuestions.map((question: string, index: number) => (
            <ListItem key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
              {question}
              <Button variant="text" color="secondary" onClick={() => removeQuestion(index)}>
                Remove
              </Button>
            </ListItem>
          ))}
      </List>

      <div className="preview" dangerouslySetInnerHTML={{ __html: lessonData.sections.reading }} />
    </div>
  );
};

export default ReadingSection;
