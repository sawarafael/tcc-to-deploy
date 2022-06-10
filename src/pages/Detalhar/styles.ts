import {
  Button as MButton,
  Typography as MTypography,
} from "@material-ui/core";
import styled from "styled-components";

export const Container = styled("div")`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
`;

export const Box = styled("div")`
  width: 100%;
  margin: 15px;
  background-color: #c4c4c4;
  border-radius: 16px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export const Column = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
`;

export const Label = styled(MTypography)``;

export const ButtonBox = styled("div")`
  display: flex;
  flex-direction: reverse-row;
`;

export const Button = styled(MButton)`
  margin-left: 2%;
`;
