import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg id="svg" width="400" height="400" viewBox="0, 0, 400,400">
    <g id="svgg"><path id="path0" d="" stroke="none" fill="#fcfcfc" fill-rule="evenodd">
      </path>
      <path id="path1" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd">
      </path><path id="path2" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd"></path>
      <path id="path3" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd">
      </path>
      <path id="path4" d="" stroke="none" fill="#100fcfc" fill-rule="evenodd">
      </path>
    </g>
  </svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
