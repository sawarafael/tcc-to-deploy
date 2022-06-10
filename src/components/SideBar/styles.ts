import styled from "styled-components";

export const Container = styled.aside`
  max-width: 50%;
  width: 20%;
  height: 100vw;
  padding: 5px;
  background: #f0f0f0;
  position: relative;

  svg {
    position: absolute;
    top: 20px;
    right: 8px;
  }

  header {
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .information {
      margin-left: 10px;
      text-align: left;
      line-height: 3px;

      span {
        font-weight: bold;
      }

      p {
        font-size: 14px;
        color: #ababab;
      }
    }
  }
`;
