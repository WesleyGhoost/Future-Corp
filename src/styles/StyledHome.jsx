import styled from 'styled-components'
import IntroImg from '../imgs/intro.jpg'

export const Main = styled.main`
  margin: 0 auto;
`

export const Intro = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${IntroImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, #000000, #00000094, #00000073);
    position: absolute;
    z-index: 2;
  }
`

export const IntroTitle = styled.h1`
padding: 8px;
  font-size: 50px;
  text-align: center;
  color: #00ffee;
  z-index: 3;
`

export const IntroSubTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  z-index: 3;
`

export const AboutUs = styled.section`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutUsTitle = styled.h1`
  font-size: 30px;
  border-bottom: 3px solid orange;
  padding-bottom: 15px;
`

export const AboutUsDescrip = styled.p`
  width: 75%;
  font-size: 19px;
  color: #000000;
`

export const Projects = styled.section`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #022525;
  column-gap: 120px;
`

export const ProjectsTitle = styled.h1`
  width: 20%;
  text-align: center;
  font-size: 30px;
  color: white;
  border-bottom: 3px solid orange;
  padding-bottom: 15px;

  @media screen and (min-width: 320px) and (max-width: 768px){
    width: 30%;
  }
`

export const ProjectsDescrip = styled.p`
  width: 80%;
  font-size: 19px;
  color: #ffffff;
`

export const ProjectsImg = styled.img`
  margin: 60px 0 50px 0;
  width: 190px;
  height: 180px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  
  :hover {
    width: 200px;
    height: 190px;
    transition: 0.3s;
  }
`

export const Corp = styled.section`
  margin: 80px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CorpTitle = styled.h1`
  font-size: 30px;
  color: #000000;
  border-bottom: 3px solid orange;
  padding-bottom: 15px;
`

export const CorpInfos = styled.div`
  width: 97%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #11324f;
  border-radius: 18px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
  }
`

export const CorpImage = styled.img`
  width: 300px;
  height: 180px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`

export const CorpInfo = styled.h3`
  width: 70%;
  height: 160px;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #174065;

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 65%;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: 55%;
    font-size: 17px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
    text-align: center;
    font-size: 17px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 180px;
    width: 90%;
    text-align: center;
    font-size: 15px;
  }
`