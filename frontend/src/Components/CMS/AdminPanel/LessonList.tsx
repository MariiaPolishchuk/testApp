import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Lesson } from "../../../types/types";
import './admin.css';

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch("/api/lessons");

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setLessons(data);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to fetch lessons";
        setError(errorMessage);
        console.error("Failed to fetch lessons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  const handleDelete = async (lessonId: string) => {
    try {
      const response = await fetch(`/api/lessons/${lessonId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setLessons(lessons.filter((lesson) => lesson._id !== lessonId));
    } catch (error) {
      console.error("Failed to delete lesson:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="lesson-list">
      <h2>Lesson List</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson._id} className="lesson-item">
            {lesson.image && (
              <div className="img-container">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                />
              </div>
            )}
            <div className="lesson-info">
              <span>{lesson.title}</span>
              <div className="admin-buttons-lesson-list">
                <Link to={`/admin-panel/edit-lesson/${lesson._id}`}>
                  <button className="edit-lesson">Edit</button>
                </Link>
                <button
                  className="delete-lesson"
                  onClick={() => handleDelete(lesson._id ?? "")}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;

