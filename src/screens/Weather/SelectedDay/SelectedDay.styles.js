import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  cursor: pointer;
  .content {
    display: flex;
  }
`;
export const Temperature = styled.div`
  font-size: 120px;
  line-height: 0.7;
  margin: 0;
`;
export const Location = styled.h4`
  margin: 20px 0 20px 0;
  font-size: fontSize(14px);
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
`;
export const Icon = styled.div`
  display: flex;
  align-content: center;
  height: 100px;
  width: 100px;
`;
export const Description = styled.div`
  font-size: fontSize(13px);
  text-align: center;
`;

export const Border = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  min-width: 100%;
  margin: 15px;
  border: 3px solid darkslategrey;
`;
export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

