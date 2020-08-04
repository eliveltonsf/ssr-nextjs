import styled from "styled-components";

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  margin: 15px 0;
`;

export const Member = styled.ul`
  list-style: none;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px 0;

  li {
    color: #fff;
    font-size: 16px;
    text-decoration: none;

    background: salmon;
    border-radius: 4px;

    padding: 5px 10px;
    width: 230px;
    height: 50px;
    margin: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
