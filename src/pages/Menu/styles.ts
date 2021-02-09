import Styled from 'styled-components';

export const Container = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-gap: 2vh;
  
`;

export const Title = Styled.h1`
  text-align:center;
`;

export const Button = Styled.button`
  background-color: #010101;
  text-align: center;
  text-decoration: none;
  color: #efefef;
  border-style: solid;
  padding: 2vh;
  width: 100%;
  font-size: 1em;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #717171;
  }
`;
