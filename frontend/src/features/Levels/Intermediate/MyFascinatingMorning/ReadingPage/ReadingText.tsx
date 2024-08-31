import React, { useRef } from "react";
import Zoom from "@mui/material/Zoom";
import { TransitionProps } from "@mui/material/transitions";
import CustomTooltip from "../../../../TooltipReading/TooltipReading";

const ReadingText = () => {
  const hustleRef = useRef(null);

  return (
    <div className="reading-page">
      <h4 className="reading-task">
        Task. Read the text carefully, pay attention to the highlighted words.
        Tick the button to answer the questions.
      </h4>

      <div className="reading">
        <div className="read">
          <h3 className="theme-start">
            The Enchanting World of Morning Rituals
          </h3>
          <p>
            In the{" "}
            <CustomTooltip
              title="busy and noisy activity"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={hustleRef}> hustle and bustle </span>
            </CustomTooltip>
            of daily life, routines often provide the comforting rhythm that
            guides our days. While routines are commonly associated with the{" "}
            <CustomTooltip
              title="routine; lacking interest or excitement"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> mundane </span>
            </CustomTooltip>
            , there's a hidden beauty in the habits and rituals that shape our
            lives. This topic{" "}
            <CustomTooltip
              title="to make a careful or detailed search for information"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> delves into </span>
            </CustomTooltip>
            the{" "}
            <CustomTooltip
              title="details"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> intricacies </span>
            </CustomTooltip>
            of "My Fascinating Routine," exploring the elements that make
            everyday activities not only{" "}
            <CustomTooltip
              title="absolutely necessary; extremely important."
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> essential </span>
            </CustomTooltip>
            but also{" "}
            <CustomTooltip
              title="arousing one's curiosity or interest; fascinating."
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> intriguing </span>
            </CustomTooltip>
            .
          </p>
          <p>
            The early hours of the day hold a unique magic, and for many,
            morning rituals are the keys that unlock it. In this exploration of
            "Morning Rituals," we will unravel the layers of practices that
            greet the sunrise,{" "}
            <CustomTooltip
              title="to establish a particular mood or character for the next days"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> setting the tone for the day ahead </span>
            </CustomTooltip>
            . From the comforting warmth of a cup of coffee to the{" "}
            <CustomTooltip
              title="making one feel strong, healthy, and full of energy"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> invigorating </span>
            </CustomTooltip>
            power of mindful moments, these rituals shape a sanctuary in the
            midst of dawn. Morning rituals, with their rich tapestry of sensory
            experiences and mindful practices, serve as the sacred prologue to
            our daily narratives. Whether{" "}
            <CustomTooltip
              title="to drink in small quantities or little by little"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> sipping on </span>
            </CustomTooltip>
            a{" "}
            <CustomTooltip
              title="in a way that shows great attention to detail; very thoroughly."
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> meticulously </span>
            </CustomTooltip>
            brewed cup of coffee, finding solace in meditation, or{" "}
            <CustomTooltip
              title="taste (good food, drink or moment) and enjoy it to the full"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> savoring </span>
            </CustomTooltip>
            a nourishing breakfast, these rituals not only anchor us in the
            present but also{" "}
            <CustomTooltip
              title="fill; pervade"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> infuse </span>
            </CustomTooltip>
            our days with a sense of purpose and tranquility. By embracing the
            dawn and{" "}
            <CustomTooltip
              title="creating"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> crafting </span>
            </CustomTooltip>
            our unique morning symphony, we discover that the rituals we{" "}
            <CustomTooltip
              title="try to acquire or develop (a quality or skill)."
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> cultivate </span>
            </CustomTooltip>
            at sunrise become the threads that weave the fabric of a fulfilling
            and{" "}
            <CustomTooltip
              title="done on purpose; deliberate; consciously"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span> intentional </span>
            </CustomTooltip>
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingText;
