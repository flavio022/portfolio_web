import styled, { css } from "styled-components";
import Tooltips from "../Tooltips";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #5497D6;
  border-radius: 10px;

  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #60d5f7;
      border-color: #60d5f7;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #60d5f7;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }


`;

export const Error = styled(Tooltips)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: none;
  }
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
