import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { theme } from "../../components/Styles/theme";

export const StyledDiv = styled(Box)`
  width: 90%;
  margin: 170px auto;
  height: 21vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinksPages = styled(Link)`
  text-decoration: none;
  padding: 10px 40px;
  background: ${theme.palette.primary.main};
  border-radius: 16px;
  margin-top: 20px;
  transition: transform 0.5s;

  &:hover {
    transform: translateX(2px) translateY(-2px);
    box-shadow: 2px 2px 7px black;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;

export const Information = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  i {
    color: #ababab;
  }
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
