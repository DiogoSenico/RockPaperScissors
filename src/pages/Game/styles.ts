import Styled from 'styled-components';

export const Container = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-height: 100%;
  overflow-y: auto;
  padding: 0 1vw;

  display: grid;
  grid-gap: 3vh;
  
`;

export const Title = Styled.h1`
  text-align:center;
`;
