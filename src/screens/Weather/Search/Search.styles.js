import styled from "styled-components";

export const SearchWrapper = styled.form`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 5px;
`;
export const TextField = styled.input`
  font-family: inherit;
  width: 500px;
  border: 0;
  border-bottom: 2px solid #0a4500;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
`;

export const SearchButton = styled.button`
  position: relative;
  display: block;
  width: 200px;
  height: 36px;
  border-radius: 18px;
  background-color: black;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: darkslategrey;
    border-color: #fff;
    transition: 0.3s ease-in-out;
  }
`;
