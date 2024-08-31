import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import AddLessonPage from "../AddLesson/AddLessonPage/AddLessonPage";


const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/add-lesson" element={<AddLessonPage />} />
        <Route path="/admin-panel/edit-lesson/:id" element={<EditLessonPage />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
