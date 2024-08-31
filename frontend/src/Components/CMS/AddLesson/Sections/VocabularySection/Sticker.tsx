import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TermList from "./TermList";

interface Term {
  word: string;
  description: string;
}

interface Props {
  terms: Term[];
}

const Sticker: React.FC<Props> = ({ terms }) => {
  const [showTerms, setShowTerms] = useState(true);
  const [isStickerFixed, setIsStickerFixed] = useState(false);
  const [stickerHeight, setStickerHeight] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 926);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowTerms(!isSmallScreen);
  }, [isSmallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const blocksElement = document.querySelector(".blocks");
      const blocksTop = blocksElement
        ? blocksElement.getBoundingClientRect().top
        : 0;
      const windowHeight = window.innerHeight;
      const stickerHeight = windowHeight - blocksTop;

      if (stickerHeight > 0) {
        setStickerHeight(stickerHeight);
        setIsStickerFixed(true);
      } else {
        setIsStickerFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticker-container ${isStickerFixed ? "fixed-sticker" : ""}`}
      style={{ maxHeight: stickerHeight }}
    >
      <div className="tooltip-lesson">
        <p>Vocabulary</p>
        {isSmallScreen && (
          <Button
            className="lesson-button"
            onClick={() => setShowTerms(!showTerms)}
          >
            {showTerms ? "Hide Terms" : "Show Terms"}
          </Button>
        )}
        {showTerms && <TermList terms={terms} />}
      </div>
    </div>
  );
};

export default Sticker;
