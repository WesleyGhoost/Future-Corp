import styled from "styled-components";

export const ReserveButton = styled.button`
  padding: 10px;
  margin: 50px 0 50px 0;
  font-size: 25px;
  color: #00bfff;
  background-color: #000000;
  position: relative;
  left: 300px;
  border-radius: 8px;
  box-shadow: 8px 5px 5px black;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: #000000;
    background-color: #00bfff;
    transition: 0.4s;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    left: 270px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    left: 90px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    left: 50px;
  }
`