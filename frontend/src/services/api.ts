import axios, { AxiosResponse } from "axios";
import { Lesson, Level } from "../types/types";

const API_BASE_URL = "http://localhost:5001/api";

// ======= Уровни =======

export const getLevels = async (): Promise<AxiosResponse<Level[]>> => {
  return axios.get(`${API_BASE_URL}/levels`);
};

export const getLevelById = async (
  id: string
): Promise<AxiosResponse<Level>> => {
  return axios.get(`${API_BASE_URL}/levels/${id}`);
};

export const addLevel = async (name: string): Promise<AxiosResponse<Level>> => {
  return axios.post(`${API_BASE_URL}/levels`, { name });
};

export const deleteLevel = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/levels/${id}`);
};

// ======= Уроки =======

export const getLessonsByLevel = async (
  levelId: string
): Promise<AxiosResponse<Lesson[]>> => {
  return axios.get(`${API_BASE_URL}/levels/${levelId}/lessons`);
};

export const getLessonById = async (
  id: string
): Promise<AxiosResponse<Lesson>> => {
  return axios.get(`${API_BASE_URL}/lessons/${id}`);
};

export const addLesson = async (
  lessonData: Partial<Lesson>
): Promise<AxiosResponse<Lesson>> => {
  return axios.post(`${API_BASE_URL}/lessons`, lessonData);
};

export const updateLesson = async (
  id: string,
  lessonData: Partial<Lesson>
): Promise<AxiosResponse<Lesson>> => {
  return axios.put(`${API_BASE_URL}/lessons/${id}`, lessonData);
};

export const deleteLesson = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/lessons/${id}`);
};

// ======= Загрузка файлов =======

// Загрузка файла
// export const uploadFile = async (file: File): Promise<string> => {
//   const formData = new FormData();
//   formData.append('file', file);

//   const response: AxiosResponse<{ filePath: string }> = await axios.post(`${API_BASE_URL}/upload`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   return response.data.filePath;
// };
