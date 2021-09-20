import styled, { createGlobalStyle } from 'styled-components';

export const PrivateBackground = createGlobalStyle`
body{
    font-family: 'Comfortaa', cursive;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    overflow-x: hidden;
  }  
`;

export const Background = createGlobalStyle`
body{
    display: flex;
    min-width: 100%;
    min-height: 100%;
    justify-content: center;
    font-family: 'Comfortaa', cursive;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    align-items: center;
    overflow-x: hidden;
    background-size: cover;
  }   
`;

export const PriceBody = styled.div`
  border: 1px solid #757979;
  color: #000;
  background-color: #fff;
`;

export const PriceHeader = styled.div`
  background-color: #dbe0e0;
  color: #000;
  padding: .99rem;
  font-weight: 700;
  text-align: center;
`;

export const PriceItem = styled.div`
  text-align: center;
  padding: .56rem;
  font-weight: 400;
`;

export const InputCard = styled.div`
  border: 1px solid #000;
  border-radius: 1rem;
  padding: .99rem;
`;