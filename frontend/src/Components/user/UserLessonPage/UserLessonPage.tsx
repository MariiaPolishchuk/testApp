

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getLessonById } from '../../../services/api';
// import { Box, Tabs, Tab } from '@mui/material';
// import VocabularySection from '../Sections/VocabularySection/VocabularySection';
// import ReadingText from '../Sections/ReadingSection/ReadingSection';
// import AudioComponent from '../Sections/ListeningSection/Listening';
// import Grammar from '../Sections/GrammarSection/Grammar';
// import { Lesson, GrammarItem } from '../../../types/types';
// import './css/style.css';

// const UserLessonPage: React.FC = () => {
//   const { lessonId } = useParams<{ lessonId: string }>();
//   const [lessonData, setLessonData] = useState<Lesson | null>(null);
//   const [currentTab, setCurrentTab] = useState<number>(0);

//   useEffect(() => {
//     const fetchLesson = async () => {
//       if (lessonId) {
//         try {
//           const response = await getLessonById(lessonId);
//           if (response.data) {
//             setLessonData(response.data);
//           } else {
//             console.error('No data received from API');
//           }
//         } catch (error) {
//           console.error('Error fetching lesson:', error);
//         }
//       }
//     };

//     fetchLesson();
//   }, [lessonId]);

//   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
//     setCurrentTab(newValue);
//   };

//   if (!lessonData) {
//     return <div>Loading...</div>;
//   }

//   const grammarSentences: GrammarItem[] = lessonData.sections.grammar || [];

//   return (
//     <div className="lesson-container">
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={currentTab} onChange={handleTabChange} centered>
//           <Tab label="Reading" />
//           <Tab label="Vocabulary" />
//           <Tab label="Grammar" />
//           <Tab label="Listening" />
//           <Tab label="Watching Video" />
//         </Tabs>
//       </Box>

//       <div className="lesson-content">
//         <h2>{lessonData.title}</h2>
//         {currentTab === 0 && (
//           <ReadingText 
//             text={lessonData.sections.reading} 
//             questions={lessonData.sections.readingQuestions || []} 
//           />
//         )}
//         {currentTab === 1 && (
//           <VocabularySection
//             sentences={lessonData.sections.vocabulary || []}
//             words={lessonData.sections.vocabulary.flatMap((sentence: any) => sentence.correctWords) || []}
//             synonyms={lessonData.sections.synonyms || []}
//           />
//         )}
//         {currentTab === 2 && (
//           <Grammar sentences={grammarSentences}/>
//         )}
//         {currentTab === 3 && lessonData.sections.listening.length > 0 && (
//          <AudioComponent
//          audioFile={lessonData.sections.listening[0].audioUrl}
//          questions={lessonData.sections.listening.map((item: any) => ({
//            id: item._id,
//            showQuestionAtSecond: item.showQuestionAtSecond,
//            blanks: item.blanks,
//            sentence: item.sentence,
//            answers: item.correctAnswers,
//          }))}
//        />
       
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserLessonPage;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getLessonById } from '../../../services/api';
// import { Box, Tabs, Tab } from '@mui/material';
// import VocabularySection from '../Sections/VocabularySection/VocabularySection';
// import ReadingText from '../Sections/ReadingSection/ReadingSection';
// import AudioComponent from '../Sections/ListeningSection/Listening';
// import Grammar from '../Sections/GrammarSection/Grammar';
// import { Lesson, GrammarItem } from '../../../types/types';
// import './css/style.css';

// const UserLessonPage: React.FC = () => {
//   const { lessonId } = useParams<{ lessonId: string }>();
//   const [lessonData, setLessonData] = useState<Lesson | null>(null);
//   const [currentTab, setCurrentTab] = useState<number>(0);

//   useEffect(() => {
//     const fetchLesson = async () => {
//       if (lessonId) {
//         try {
//           const response = await getLessonById(lessonId);
//           if (response.data) {
//             setLessonData(response.data);
//           } else {
//             console.error('No data received from API');
//           }
//         } catch (error) {
//           console.error('Error fetching lesson:', error);
//         }
//       }
//     };

//     fetchLesson();
//   }, [lessonId]);

//   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
//     setCurrentTab(newValue);
//   };

//   if (!lessonData) {
//     return <div>Loading...</div>;
//   }

//   const grammarSentences: GrammarItem[] = lessonData.sections.grammar || [];
//   const testQuestions = lessonData.sections.test || []; // Получаем тестовые вопросы из секции

//   return (
//     <div className="lesson-container">
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={currentTab} onChange={handleTabChange} centered>
//           <Tab label="Reading" />
//           <Tab label="Vocabulary" />
//           <Tab label="Grammar" />
//           <Tab label="Listening" />
//           <Tab label="Watching Video" />
//         </Tabs>
//       </Box>

//       <div className="lesson-content">
//         <h2>{lessonData.title}</h2>
//         {currentTab === 0 && (
//           <ReadingText 
//             text={lessonData.sections.reading} 
//             questions={lessonData.sections.readingQuestions || []} 
//           />
//         )}
//         {currentTab === 1 && (
//           <VocabularySection
//             sentences={lessonData.sections.vocabulary || []}
//             words={lessonData.sections.vocabulary.flatMap((sentence: any) => sentence.correctWords) || []}
//             synonyms={lessonData.sections.synonyms || []}
//             test={testQuestions} // Передаем тестовые вопросы в VocabularySection
//           />
//         )}
//         {currentTab === 2 && (
//           <Grammar sentences={grammarSentences}/>
//         )}
//         {currentTab === 3 && lessonData.sections.listening.length > 0 && (
//          <AudioComponent
//          audioFile={lessonData.sections.listening[0].audioUrl}
//          questions={lessonData.sections.listening.map((item: any) => ({
//            id: item._id,
//            showQuestionAtSecond: item.showQuestionAtSecond,
//            blanks: item.blanks,
//            sentence: item.sentence,
//            answers: item.correctAnswers,
//          }))}
//        />
       
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserLessonPage;



// UserLessonPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonById } from '../../../services/api';
import { Box, Tabs, Tab } from '@mui/material';
import VocabularySection from '../Sections/VocabularySection/VocabularySection';
import ReadingText from '../Sections/ReadingSection/ReadingSection';
import AudioComponent from '../Sections/ListeningSection/Listening';
import Grammar from '../Sections/GrammarSection/Grammar';
import { Lesson, GrammarItem } from '../../../types/types';
import './css/style.css';

const UserLessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [lessonData, setLessonData] = useState<Lesson | null>(null);
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    const fetchLesson = async () => {
      if (lessonId) {
        try {
          const response = await getLessonById(lessonId);
          if (response.data) {
            setLessonData(response.data);
          } else {
            console.error('No data received from API');
          }
        } catch (error) {
          console.error('Error fetching lesson:', error);
        }
      }
    };

    fetchLesson();
  }, [lessonId]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  if (!lessonData) {
    return <div>Loading...</div>;
  }

  const grammarSentences: GrammarItem[] = lessonData.sections.grammar || [];
  const multipleChoiceQuestions = lessonData.sections.grammarMultipleChoice || []; // Получаем вопросы с множественным выбором

  return (
    <div className="lesson-container">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          <Tab label="Reading" />
          <Tab label="Vocabulary" />
          <Tab label="Grammar" />
          <Tab label="Listening" />
          <Tab label="Watching Video" />
        </Tabs>
      </Box>

      <div className="lesson-content">
        <h2>{lessonData.title}</h2>
        {currentTab === 0 && (
          <ReadingText 
            text={lessonData.sections.reading} 
            questions={lessonData.sections.readingQuestions || []} 
          />
        )}
        {currentTab === 1 && (
          <VocabularySection
            sentences={lessonData.sections.vocabulary || []}
            words={lessonData.sections.vocabulary.flatMap((sentence: any) => sentence.correctWords) || []}
            synonyms={lessonData.sections.synonyms || []}
            test={lessonData.sections.test || []} 
          />
        )}
        {currentTab === 2 && (
          <Grammar 
            sentences={grammarSentences}
            multipleChoiceQuestions={multipleChoiceQuestions}
          />
        )}
        {currentTab === 3 && lessonData.sections.listening.length > 0 && (
          <AudioComponent
            audioFile={lessonData.sections.listening[0].audioUrl}
            questions={lessonData.sections.listening.map((item: any) => ({
              id: item._id,
              showQuestionAtSecond: item.showQuestionAtSecond,
              blanks: item.blanks,
              sentence: item.sentence,
              answers: item.correctAnswers,
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default UserLessonPage;

