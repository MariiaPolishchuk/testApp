import React from "react";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import { TransitionProps } from "@mui/material/transitions";
import { Zoom } from "@mui/material";

interface CustomTooltipProps {
  title: string;
  arrow?: boolean;
  children: React.ReactElement<any, any>;
  TransitionComponent?: React.ComponentType<TransitionProps>;
  placement?: TooltipProps["placement"];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  arrow = true,
  children,
  TransitionComponent = Zoom as React.ComponentType<TransitionProps>,
  placement = "top",
}: CustomTooltipProps) => {
  return (
    <Tooltip
      className="tooltip"
      title={title}
      arrow={arrow}
      TransitionComponent={TransitionComponent}
      placement={placement}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;

