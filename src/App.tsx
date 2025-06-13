import React from 'react';
import CharacterList from './components/CharacterList';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Rick and Morty Likovi
      </Typography>
      <CharacterList />
    </Container>
  );
}

export default App;
