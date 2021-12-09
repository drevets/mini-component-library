import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    fontSize: "14px",
    borderSize: "1",
    iconSize: "16px",
    paddingLeft: "18px",
  },
  large: {
    fontSize: "18px",
    borderSize: "2",
    iconSize: "20px",
    paddingLeft: "26px",
  },
};

const Wrapper = styled.div`
  position: relative;
  width: ${(p) => p.width}px;
  color: ${COLORS.gray700};
`;

const NativeInput = styled.input`
  width: 100%;
  font-size: ${(p) => sizes[p.size].fontSize};
  border: none;
  border-bottom: ${(p) => sizes[p.size].borderSize}px solid;
  padding-left: ${(p) => sizes[p.size].paddingLeft};
  font-weight: 700;
  color: inherit;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: ${(p) => sizes[p.size].iconSize};

  ${NativeInput}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 150, size, placeholder, id }) => {
  return (
    <Wrapper width={width}>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <NativeInput id={id} placeholder={placeholder} size={size} />
      <IconWrapper size={size}>
        <Icon
          id={icon}
          size={sizes[size].iconSize}
          strokeWidth={sizes[size].borderSize}
        />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const JoshIconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  // TODO: validate size

  return (
    <JoshWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <JoshIconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </JoshIconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
          "--border-thickness": styles.borderThickness + "px",
          "--font-size": styles.fontSize / 16 + "rem",
        }}
      />
    </JoshWrapper>
  );
};

const JoshWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const JoshIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
