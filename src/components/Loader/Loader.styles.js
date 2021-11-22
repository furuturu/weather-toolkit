import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RoundLoader = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 10px solid transparent;
    border-left-color: black;
    border-top-color: black;
    animation: ${rotate} 1s infinite ease-in-out;
  }
`;
export const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 375px;
`;
