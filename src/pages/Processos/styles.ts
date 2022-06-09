import styled from "styled-components";

export const Container = styled.aside`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  .content {
    width: 100%;
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
