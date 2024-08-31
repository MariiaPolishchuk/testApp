

import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "@mui/material";

interface VideoTextProps {
  text: string[];
  tooltips: { term: string; definition: string }[];
}

const VideoText: React.FC<VideoTextProps> = ({ text, tooltips }) => {
  const [showTooltips, setShowTooltips] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTooltips = () => {
    setShowTooltips(!showTooltips);
  };

  return (
    <div className="video-text">
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="video-tooltips ">
        <p>Vocabulary</p>
        {isSmallScreen ? (
          <Button
            className="lesson-button"
            variant="contained"
            onClick={toggleTooltips}
          >
            {showTooltips ? "Hide Terms" : "Show Terms"}
          </Button>
        ) : (
          tooltips.map((tooltip, index) => (
            <Tooltip key={index} title={tooltip.definition} arrow>
              <span>{tooltip.term}</span>
            </Tooltip>
          ))
        )}
        {isSmallScreen && showTooltips && (
          <div>
            <ul>
              {tooltips.map((tooltip, index) => (
                <li key={index}>
                  <strong className="tooltip-video-terms">{tooltip.term}</strong>:    {tooltip.definition}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoText;
