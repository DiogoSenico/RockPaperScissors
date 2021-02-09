import Styled from 'styled-components';

export const Container = Styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const PlayerName = Styled.h3`
  grid-column: 1 / span 3;
  grid-row: 1;
  text-align: center;
`;

interface CardWrapperProps {
  hasAction?: boolean;
}
export const CardWrapper = Styled.button<CardWrapperProps>`
  background-color: transparent;
  padding: 2vh 1vw;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: white;
  &:hover {
    background-color: ${(props) =>
      props.hasAction ? '#717171' : 'transparent'};
  }
  
  cursor: ${(props) => (props.hasAction ? 'pointer' : 'default')};
`;
export const CardImg = Styled.img`
  grid-column: 1;
  grid-row: 1;
  max-width: 16vw;
  max-height: 16vh;
`;
