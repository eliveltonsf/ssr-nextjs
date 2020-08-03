import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  width: 800px;
  height: 500px;

  background: salmon;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-top: 30px;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 15px;
  font-weight: bold;
  width: 330px;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    width: 330px;
  }
`;
