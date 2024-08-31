// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const InterviewTips = () => {
//   const [words, setWords] = useState([
//     'successful interview',
//     'confident',
//     'determine',
//     'fit for',
//     'values',
//     'appropriately',
//     'match',
//     'confident',
//     'ahead',
//     'contribute',
//     'showcase',
//   ]);

//   const [selectedWords, setSelectedWords] = useState<string[]>([]);

//   const handleDragStart = (e: React.DragEvent<HTMLSpanElement>, index: number) => {
//     e.dataTransfer.setData('index', index.toString());
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     const index = parseInt(e.dataTransfer.getData('index'));
//     const word = words[index];
//     setSelectedWords([...selectedWords, word]);

//     const newWords = [...words];
//     newWords.splice(index, 1);
//     setWords(newWords);
//   };

//   const handleDragEnd = (result: any) => {
//     const { source, destination } = result;
//     if (!destination) return;
//     const newWords = Array.from(words);
//     newWords.splice(source.index, 1);
//     newWords.splice(destination.index, 0, words[source.index]);
//     setWords(newWords);
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div>
//         <h1>Interview Tips</h1>
//         <p>
//           When it comes to a {selectedWords[0]}, it is important to present yourself as a competent and{' '}
//           {selectedWords[1]} worker. The interview is an opportunity for the employer to get to know you and{' '}
//           {selectedWords[2]} if you are a good {selectedWords[3]} the job. Here are a few tips to help
//           you prepare for your next job interview:
//         </p>

//         <div>
//           <Droppable droppableId="answers">
//             {(provided) => (
//               <div {...provided.droppableProps} ref={provided.innerRef}>
//                 {selectedWords.map((word, index) => (
//                   <Draggable key={index} draggableId={`word-${index}`} index={index}>
//                     {(provided) => (
//                       <span {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
//                         {word}
//                       </span>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>

//         <p>
//           Remember, the job interview is an opportunity for you to {selectedWords[10]} your skills and
//           qualifications. By preparing ahead of time and presenting yourself professionally, you can increase your
//           chances of landing the job. Good luck!
//         </p>

//         {/* Добавлено гнездо для вставки слов */}
//         <div>
//           <Droppable droppableId="words">
//             {(provided) => (
//               <div {...provided.droppableProps} ref={provided.innerRef}>
//                 {words.map((word, index) => (
//                   <Draggable key={index} draggableId={`word-${index}`} index={index}>
//                     {(provided) => (
//                       <span {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
//                         {word}
//                       </span>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// };

// export default InterviewTips;

// import React from 'react';
// import { Provider } from 'react-redux';
// import { connect } from 'react-redux';
// import { DragDropContext, Droppable, Draggable, DraggableProvided, DraggableStateSnapshot, DropResult } from 'react-beautiful-dnd';

// interface Props {
//   selectedWords: string[];
//   words: string[];
//   handleDragEnd: (result: DropResult) => void; // Изменено на DropResult
// }

// const InterviewTips: React.FC<Props> = ({ selectedWords, words, handleDragEnd }) => {
//   return (
//     <div>
//       <h1>Interview Tips</h1>
//       <p>
//         When it comes to a {selectedWords[0]}, it is important to present yourself as a competent and{' '}
//         {selectedWords[1]} worker. The interview is an opportunity for the employer to get to know you and{' '}
//         {selectedWords[2]} if you are a good {selectedWords[3]} the job. Here are a few tips to help
//         you prepare for your next job interview:
//       </p>

//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div>
//           <Droppable droppableId="answers">
//             {(provided) => (
//               <div {...provided.droppableProps} ref={provided.innerRef}>
//                 {selectedWords.map((word, index) => (
//                   <Draggable key={index.toString()} draggableId={`word-${index}`} index={index}>
//                     {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
//                       <span
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         ref={provided.innerRef}
//                         style={getDraggingStyle(snapshot)}
//                       >
//                         {word}
//                       </span>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       </DragDropContext>

//       <p>
//         Remember, the job interview is an opportunity for you to {selectedWords[10]} your skills and
//         qualifications. By preparing ahead of time and presenting yourself professionally, you can increase your
//         chances of landing the job. Good luck!
//       </p>

//       <div>
//         <Droppable droppableId="words">
//           {(provided) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {words.map((word, index) => (
//                 <Draggable key={index.toString()} draggableId={`word-${index}`} index={index}>
//                   {(provided: DraggableProvided) => (
//                     <span {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
//                       {word}
//                     </span>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//     </div>
//   );
// };

// const mapDispatchToProps = (_dispatch: any) => ({
//   handleDragEnd: (result: DropResult) => {
//     // Обработка окончания перетаскивания
//     // Вы можете использовать параметр "dispatch" здесь, чтобы диспатчить действия
//     // Например: dispatch(yourActionCreator(result));
//   },
// });

// export default connect(null, mapDispatchToProps)(InterviewTips);

// function getDraggingStyle(snapshot: DraggableStateSnapshot): React.CSSProperties {
//   if (!snapshot.isDragging) {
//     return {};
//   }
//   return {
//     background: snapshot.isDragging ? 'lightgreen' : 'transparent',
//   };
// }


