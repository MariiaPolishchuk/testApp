import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLessonsByLevel, getLevels } from "../../../services/api";
import { Lesson, Level } from "../../../types/types";
import './style.css'

const LessonList: React.FC = () => {
  const { level } = useParams<{ level: string }>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [levelId, setLevelId] = useState<string | null>(null);

  useEffect(() => {
    const fetchLevelId = async () => {
      try {
        const response = await getLevels();
        const selectedLevel = response.data.find(
          (lvl: Level) => lvl.name.toLowerCase() === level?.toLowerCase()
        );
        if (selectedLevel) {
          setLevelId(selectedLevel._id);
        } else {
          console.error("Level not found");
        }
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    fetchLevelId();
  }, [level]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        if (!levelId) {
          return;
        }
        const response = await getLessonsByLevel(levelId);
        setLessons(response.data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, [levelId]);

  return (
    <div>
      <h1>Lessons for {level}</h1>
      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="lesson-card">
            <Link to={`/course/${level}/${lesson._id}`}>
              {lesson.titleImage ? (
                <img
                  src={lesson.titleImage}
                  alt="Title"
                  className="lesson-image"
                />
              ) : (
                <p>No Image Available</p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonList;
