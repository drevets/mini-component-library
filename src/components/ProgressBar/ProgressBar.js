/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    progressHeight: "8px",
    wrapperHeight: "8px",
  },
  medium: {
    progressHeight: "12px",
    wrapperHeight: "12px",
  },
  large: {
    progressHeight: "16px",
    wrapperHeight: "24px",
  },
};

const ProgressWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  height: ${(p) => sizes[p.size].wrapperHeight};
  border-radius: ${(p) => (p.size === "large" ? "8px" : "4px")};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(p) => p.size === "large" && "4px"};
`;

const Progress = styled.div`
  width: ${(p) => p.value + "%"};
  background-color: ${COLORS.primary};
  height: ${(p) => sizes[p.size].progressHeight};
  border-radius: ${(p) => {
    if (p.value < 98.5) {
      return "4px 0px 0px 4px";
    }
    const remainder = Math.abs(98.5 - p.value) * (4 / 1.5);
    return `4px ${remainder}px ${remainder}px 4px`;
  }};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper size={size}>
      <Progress
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
        size={size}
        value={value}
      />
    </ProgressWrapper>
  );
};

export default ProgressBar;
