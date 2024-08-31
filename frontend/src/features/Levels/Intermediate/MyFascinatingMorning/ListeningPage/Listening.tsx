import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyFascinatingMorningAudio from "./MyFascinatingMorningAudio";

const Listening = () => {
  const navigate = useNavigate();

  const handleWatchVideo = () => {
    navigate("/course/intermediate/my-fascinating-morning/lesson/listening/video");
  };

  return (
    <div className="listening-page fade-in">
      <MyFascinatingMorningAudio />
      <Button className="lesson-button" variant="contained" onClick={handleWatchVideo}>Watch the Video</Button>
    </div>
  );
};

export default Listening;

