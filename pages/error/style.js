import styled from "styled-components";

export const Warn = styled.div`
  margin-bottom: 60px;

  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

export const Description = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #fff;
  font-size: 40px;
  margin-left: 15px;
  font-weight: bold;
  margin-right: 30px;
  text-align: center;
  background: salmon;
  padding: 5px;
  border-radius: 4px;

  p {
    margin: 5px;
  }
`;
