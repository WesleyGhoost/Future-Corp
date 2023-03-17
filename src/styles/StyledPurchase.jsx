import styled from "styled-components";

export const PurchasePage = styled.div`
  height: 100vh;
  padding: 15px;
  background-color: black;
`

export const PurchaseTextOne = styled.h1`
  color: #00b7ff;
`

export const PurchaseTextTwo = styled.h2`
  color: #00b7ff;
`

export const PurchaseBack = styled.button`
  padding: 5px;
  font-size: 12px;
  color: #0066ff;
  background-color: #ffffffed;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    color: white;
    background-color: #0066ff;
    transition: 0.3s;
  }
`