import styled from "styled-components";

export const Button = styled.button`
  width: 97%;
  margin: 4px 5px;
  padding: 20px 40px;
  background: #c4c4c4;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: filter 0.5s;

  &:hover {
    filter: brightness(0.8);
  }
`;
