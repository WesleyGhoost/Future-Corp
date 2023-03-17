import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  padding: 5px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 100px;
  position: fixed;
  z-index: 5;

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    column-gap: 80px;
  }
`

export const NavImg = styled.img`
  width: 140px;
  height: 65px;

  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
`

export const NavList = styled.ul`
  width: 40%;
  display: flex;
  justify-content: center;
  column-gap: 120px;

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    column-gap: 80px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 50px;
    column-gap: 50px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-right: 50px;
    column-gap: 50px;
  }
`

export const NavItem = styled.li`
  color: #00b3ff;
  font-size: 20px;

  :hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 17px;
  }
`