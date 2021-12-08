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

const MyProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper size={size}>
      <Progress
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={value}
        size={size}
        value={value}
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Progress>
    </ProgressWrapper>
  );
};

export default MyProgressBar;

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

const JoshProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;
