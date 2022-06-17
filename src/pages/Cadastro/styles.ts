import styled from "styled-components";
import {
  Typography as MTypography,
  TextField as MTextfield,
} from "@material-ui/core";
import { theme } from "../../components/Styles/theme";

export const Label = styled(MTypography)`
  display: flex;
`;

export const LabelTitle = styled(MTypography)`
  font-weight: bold;
  font-size: 25px;
  margin: 30px 0px 0px 17px;
`;

export const Form = styled.form`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  padding: 10px;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

export const InputsForm = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
`;

export const Select = styled.select`
  width: 250px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
`;

export const Input = styled(MTextfield)`
  width: 250px;
  height: 28px;
  border-radius: 5px;
  border: none;
`;

export const Submit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  background: ${theme.palette.primary.main};
  border-radius: 10px;
  border: none;
  color: #fff;
  padding: 10px 40px;

  transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: translateX(2px) translateY(-2px);
    box-shadow: 2px 2px 7px black;
  }

  #cancel {
    background-color: transparent;
  }

  #cad {
    background-color: #283c64;
    border: none;
    margin-left: 20px;
    color: white;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
