import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 50%;
    margin: 0 auto;
    padding: 39px 89px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 8px;

    h1 {
      margin-bottom: 50px;
    }

    .inputs-container {
      div {
        display: flex;
        flex-direction: column;

        label {
          text-align: left;
          font-size: 16px;
        }

        input {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #c4c4c4;
          background: #ffffff;
        }

        & + div {
          margin-top: 32px;
        }
      }

      strong {
        display: block;
        margin-top: 10px;
        margin-bottom: 60px;
        font-size: 14px;
        text-align: left;
        color: #162d59;

        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      }

      button {
        margin-bottom: 33px;
        padding: 14px 69px;
        border: none;
        border-radius: 8px;
        background: #162d59;
        font-weight: bold;
        color: #ffffff;

        transition: opacity 0.2s;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    p {
      cursor: default;
    }

    strong {
      font-weight: bold;
      color: #162d59;
      transition: opacity 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    }
  }
`;
