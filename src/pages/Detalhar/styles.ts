import {
  Button as MButton,
  Typography as MTypography,
} from "@material-ui/core";
import styled from "styled-components";

export const Container = styled("div")`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const Column = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
`;

export const Box = styled("div")`
  width: 100%;
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

export const LabelTitle = styled(MTypography)`
  font-size: 25px;
  margin: 30px 0px 0px 220px;
`;

export const Label = styled(MTypography)``;

export const ButtonBox = styled("div")`
  display: flex;
  flex-direction: reverse-row;
`;

export const Button = styled(MButton)`
  margin-left: 2%;
`;
