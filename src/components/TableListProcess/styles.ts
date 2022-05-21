import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid black;

  h1 {
    margin-top: 10px;
    margin-bottom: 0;
  }

  table {
    width: 100%;
    line-height: 2;
    
    tr {
      text-align: center;

      th {
        border-bottom: 1px solid black;
      }
    }

    .thead {
      border-bottom: 1px solid black;
    }
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
