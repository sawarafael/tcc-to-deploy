import styled from "styled-components";
import { Button as MButton } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  border-top: 1px solid black;

  h1 {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

export const Search = styled.div`
  margin-bottom: 30px;

  button {
    margin-left: 10px;
    padding: 1px 20px;
    cursor: pointer;
  }
`;

export const Button = styled(MButton)`
  margin-left: 10px;
  padding: 1px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
    color: black;
  }
`;
