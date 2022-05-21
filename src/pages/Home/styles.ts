import styled from "styled-components";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledDiv = styled(Box)`
  width: 90%;
  margin: 0 auto;
  height: 21vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinksPages = styled(Link)`
  text-decoration: none;
  padding: 20px;
  background: #c4c4c4;
  border-radius: 16px;
  margin-top: 20px;
  transition: transform 0.5s;

  &:hover {
    transform: translateX(2px) translateY(-2px);
    box-shadow: 2px 2px 7px black;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
  }
`;
