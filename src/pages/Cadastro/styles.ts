import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Title = styled.h1``;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Content = styled.div`
  width: 100%;
  margin: 15px;
  background-color: #c4c4c4;
  border-radius: 16px;
  border: 1px solid #ccc;
  display: flex;
`;

export const InputsForm = styled.div`
  width: 100%;
  margin: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 1px;

  #input-left {
    float: left;
    width: 30%;
    font-family: "Roboto", sans-serif;
  }

  #input-right {
    float: right;
    width: 30%;
    /* margin-top: 0px;
    margin-left: 150px; */
  }

  #act-type {
    border-radios: 10px;
  }

  input {
    width: 250px;
    height: 28px;
    border-radius: 5px;
    border: none;
  }

  select {
    width: 250px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
  }

  #data {
    width: 170px;
    text-align: center;
    font-size: 18px;
  }
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
  height: 35px;
  border-radius: 5px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
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
