import styled from "styled-components";

export const ForecastWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 30px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected === props.index ? "rgb(220,220,220)" : "rgb(245,245,245)"};
  &:hover {
    background-color: rgba(220, 220, 220, 0.65);
  }
`;
