import styled from "styled-components";

export const User = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    margin-bottom: 20px;
    border: 5px solid salmon;
  }

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const Links = styled.header`
  margin-top: 30px;
  width: 380px;
  display: flex;
  justify-content: space-between;
`;
