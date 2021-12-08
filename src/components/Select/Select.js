import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
/**
 * 
fit-content doesn't work for some reason...
maybe I could do something with width and min-width??
 */

const LabelWrapper = styled.label`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: inherit;
  padding: 12px 50px 12px 16px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 18px;
  pointer-events: none;
`;

const MySelect = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log("this is the displayed value", displayedValue);

  return (
    <LabelWrapper htmlFor="select" label={label}>
      <SelectWrapper value={value} onChange={onChange} id="select">
        {children}
      </SelectWrapper>
      <IconWrapper>
        <Icon id="chevron-down" size="24" strokeWidth="2" />
      </IconWrapper>
    </LabelWrapper>
  );
};

export default MySelect;

const JoshSelect = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <JoshIconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </JoshIconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const JoshIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;
