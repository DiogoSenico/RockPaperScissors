import Styled from 'styled-components';

export const Container = Styled.div`
  display: grid;
  max-height: 20rem;
  overflow: overlay;
  border-style: solid;
  border-width: 2px;
  border-color: white;
`;

export const RoundWrapper = Styled.div`
  text-align: left;
  border-bottom-style: solid;
  border-bottom-color: white;
  padding: 1rem 3rem 1rem 1rem;
`;

export const Players = Styled.p`
  padding:2px;
`;

export const Result = Styled.h2`
  padding:2px;
`;

export const GlobalScore = Styled.small`
  padding:2px;
`;
