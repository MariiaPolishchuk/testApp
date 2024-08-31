// import axios from "axios";

// const API_BASE_URL = "http://localhost:5001/api";

// export default async function uploadFile(files: {
//   [key: string]: File | File[];
// }): Promise<{ [key: string]: string[] }> {
//   const formData = new FormData();

//   for (const key in files) {
//     if (files[key] instanceof Array) {
//       files[key].forEach((file) => formData.append(key, file));
//     } else {
//       formData.append(key, files[key]);
//     }
//   }

//   const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   const result: { [key: string]: string[] } = {};
//   for (const key in response.data) {
//     result[key] = response.data[key].map(
//       (filePath: string) => `http://localhost:5001${filePath}`
//     );
//   }

//   return result;
// }



import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api";

export default async function uploadFiles(files: {
  [key: string]: File | File[];
}): Promise<{ [key: string]: string[] }> {
  const formData = new FormData();

  for (const key in files) {
    if (files[key] instanceof Array) {
      files[key].forEach((file) => formData.append(key, file));
    } else {
      formData.append(key, files[key]);
    }
  }

  const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const result: { [key: string]: string[] } = {};
  for (const key in response.data) {
    result[key] = response.data[key].map(
      (filePath: string) => `http://localhost:5001${filePath}`
    );
  }

  return result;
}
