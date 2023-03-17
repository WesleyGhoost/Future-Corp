import styled from "styled-components";
import Glasses from '../imgs/virtual-glasses.jpg'

export const Intro = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Glasses});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000000, #00000094, #00000073);
    z-index: 2;
    position: absolute;
  }
`

export const AboutGlasses = styled.section`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutGlassesTitle = styled.h1`
  font-size: 30px;
  border-bottom: 3px solid blue;
  padding-bottom: 15px;
`

export const AboutGlassesDescrip = styled.p`
  width: 75%;
  font-size: 19px;
  color: #000000;
`