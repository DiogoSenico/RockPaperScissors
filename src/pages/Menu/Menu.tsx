import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title, Button } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>Menu</Title>
      <Link to="/game">
        <Button>GAME</Button>
      </Link>
      <Link to="/history">
        <Button>HISTORY</Button>
      </Link>
    </Container>
  );
};

export default Menu;
