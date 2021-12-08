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

const Select = ({ label, value, onChange, children }) => {
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

export default Select;
