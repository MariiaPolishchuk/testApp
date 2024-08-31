import React, { useRef } from "react";
import Zoom from "@mui/material/Zoom";
import { TransitionProps } from "@mui/material/transitions";
import CustomTooltip from "../../../TooltipReading/TooltipReading";

const ReadingText = () => {
  const ambitiousRef = useRef(null);
  const confidentRef = useRef(null);
  const generousRef = useRef(null);
  const impatientRef = useRef(null);
  const cheerfulRef = useRef(null);
  const easyGoingRef = useRef(null);
  const honestRef = useRef(null);
  const hardWorkingRef = useRef(null);
  const tolerantRef = useRef(null);
  const arrogantRef = useRef(null);
  const aggressiveRef = useRef(null);
  const responsibleRef = useRef(null);
  const dullRef = useRef(null);
  const caringRef = useRef(null);
  const intelligentRef = useRef(null);
  const strictRef = useRef(null);
  const creativeRef = useRef(null);
  const determinedRef = useRef(null);
  const messyRef = useRef(null);
  const patientRef = useRef(null);
  const neatRef = useRef(null);
  const quietRef = useRef(null);
  const shyRef = useRef(null);
  const rudeRef = useRef(null);
  const boringRef = useRef(null);

  return (
    <div className="reading-page">
      <h4 className="reading-task">
        Task. Read the text carefully, pay attention to the highlighted words.
        Tick the button to answer the questions.
      </h4>

      <div className="reading">
        <div className="read">
        <p>
            There are a lot of different
            personality traits! Let's take a look at some of these traits and
            what they mean!
          </p>
          <h3 className="theme-start">
            Exploring Different Character Traits
          </h3>
          <p>
            First, there's Tom. He's very{" "}
            <CustomTooltip
              title="having or showing a strong desire and determination to succeed"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={ambitiousRef}> ambitious </span>
            </CustomTooltip>
            . He always dreams big and works hard to achieve his goals.
          </p>
          <p>
            Then there's Sarah. She's{" "}
            <CustomTooltip
              title="feeling sure about your own ability to do things and be successful"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={confidentRef}> self-confident </span>
            </CustomTooltip>
            . She believes in herself and is not afraid to try new things.
          </p>
          <p>
            Emily is known for being{" "}
            <CustomTooltip
              title="willing to give money, help, kindness, etc., especially more than is usual or expected"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={generousRef}> generous </span>
            </CustomTooltip>
            . She always shares what she has with others.
          </p>
          <p>
            On the other hand, Jack can be quite{" "}
            <CustomTooltip
              title="eager or quick to become angry or annoyed"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={impatientRef}> impatient </span>
            </CustomTooltip>
            . He doesn't like to wait for anything.
          </p>
          <p>
            Chris, on the other hand, is always{" "}
            <CustomTooltip
              title="feeling or showing happiness"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={cheerfulRef}> cheerful </span>
            </CustomTooltip>
            . He has a big smile on his face and spreads joy wherever he goes.
          </p>
          <p>
            Anna is very{" "}
            <CustomTooltip
              title="relaxed and not easily upset or worried"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={easyGoingRef}> easy-going </span>
            </CustomTooltip>
            . She gets along with everyone and doesn't let things bother her.
          </p>
          <p>
            Mark is always{" "}
            <CustomTooltip
              title="speaking or acting in a way that is not honest, fair, or kind"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={honestRef}> honest </span>
            </CustomTooltip>
            . He never lies and always tells the truth.
          </p>
          <p>
            Lucy is known for being{" "}
            <CustomTooltip
              title="working with a lot of effort"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={hardWorkingRef}> hard-working </span>
            </CustomTooltip>
            . She puts in a lot of effort into everything she does.
          </p>
          <p>
            Mike is{" "}
            <CustomTooltip
              title="showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={tolerantRef}> tolerant </span>
            </CustomTooltip>
            . He respects everyone's opinions and beliefs, even if they're
            different from his own.
          </p>
          <p>
            On the other hand, Max can be quite{" "}
            <CustomTooltip
              title="having or revealing an exaggerated sense of one's own importance or abilities"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={arrogantRef}> arrogant </span>
            </CustomTooltip>
            . He thinks he's better than everyone else.
          </p>
          <p>
            Sarah can sometimes be{" "}
            <CustomTooltip
              title="behaving in an angry or violent way towards another person"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={aggressiveRef}> aggressive </span>
            </CustomTooltip>
            . She gets into fights easily.
          </p>
          <p>
            Tim is very{" "}
            <CustomTooltip
              title="having an obligation to do something, or having control over or care for someone, as part of one's job or role"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={responsibleRef}> responsible </span>
            </CustomTooltip>
            . He always does what he's supposed to do.
          </p>
          <p>
            Sometimes, school can be{" "}
            <CustomTooltip
              title="not interesting or exciting; dull"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={dullRef}> dull </span>
            </CustomTooltip>
            , but Emily always finds a way to make it fun.
          </p>
          <p>
            Katie is very{" "}
            <CustomTooltip
              title="giving care to others; affectionate"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={caringRef}> caring </span>
            </CustomTooltip>
            . She always looks out for her friends and family.
          </p>
          <p>
            David is incredibly{" "}
            <CustomTooltip
              title="having or showing intelligence, especially of a high level"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={intelligentRef}> intelligent </span>
            </CustomTooltip>
            . He's always at the top of his class.
          </p>
          <p>
            Mr. Johnson, the teacher, is very{" "}
            <CustomTooltip
              title="demanding that rules concerning behavior are obeyed and observed"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={strictRef}> strict </span>
            </CustomTooltip>
            . He expects everyone to follow the rules.
          </p>
          <p>
            Emma is very{" "}
            <CustomTooltip
              title="having the ability to create"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={creativeRef}> creative </span>
            </CustomTooltip>
            . She loves to paint and draw.
          </p>
          <p>
            John is{" "}
            <CustomTooltip
              title="having made a firm decision and being resolved not to change it"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={determinedRef}> determined </span>
            </CustomTooltip>
            . Once he sets his mind to something, he doesn't give up.
          </p>
          <p>
            Tim's room is always{" "}
            <CustomTooltip
              title="untidy or dirty"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={messyRef}> messy </span>
            </CustomTooltip>
            . He never cleans up after himself.
          </p>
          <p>
            On the other hand, Sarah's room is always{" "}
            <CustomTooltip
              title="clean and tidy"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={neatRef}> neat </span>
            </CustomTooltip>
            . She likes everything to be in its place.
          </p>
          <p>
            Peter is very{" "}
            <CustomTooltip
              title="making very little noise"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={quietRef}> quiet </span>
            </CustomTooltip>
            . He hardly ever speaks loudly.
          </p>
          <p>
            Rachel is quite{" "}
            <CustomTooltip
              title="feeling nervous and uncomfortable about meeting and talking to people"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={shyRef}> shy </span>
            </CustomTooltip>
            . She doesn't like being the center of attention.
          </p>
          <p>
            Sometimes, Tom can be a bit{" "}
            <CustomTooltip
              title="having or showing a lack of respect or courtesy; impolite"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={rudeRef}> rude </span>
            </CustomTooltip>
            . He needs to learn some manners.
          </p>
          <p>
            Emily finds math class{" "}
            <CustomTooltip
              title="not interesting or exciting; dull"
              placement="top"
              TransitionComponent={
                Zoom as React.ComponentType<TransitionProps> | undefined
              }
              arrow
            >
              <span ref={boringRef}> boring </span>
            </CustomTooltip>
            . She prefers more fun subjects like art or music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingText;
