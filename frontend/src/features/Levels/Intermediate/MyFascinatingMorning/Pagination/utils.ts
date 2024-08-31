// export const getPageRoute = (page: number) => {
//   switch (page) {
//     case 1:
//       return "test";
//     case 2:
//       return "drag-drop";
//     case 3:
//       return "find-synonyms";
//     case 4:
//       return "voc-practise";
//     default:
//       return "";
//   }
// };



// Файл: src/utils/utils.ts

export const getPageRoute = (page: number): string => {
  switch (page) {
    case 1:
      return "test";
    case 2:
      return "drag-drop";
    case 3:
      return "find-synonyms";
    case 4:
      return "voc-practise";
    default:
      return "";
  }
};

export const getFullPageRoute = (page: number): string => {
  const basePath = "/course/intermediate/my-fascinating-morning/lesson/test";
  
  const pagePath = `${basePath}/${getPageRoute(page)}`;
  
  return pagePath;
};
