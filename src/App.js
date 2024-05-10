import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GridItem } from './components/grid'
import { AppBarItem } from './components/appbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBarItem />
        </Box>
        <GridItem />
      </header>
      <Button variant="contained" style={{ marginTop: '50px' }}>Tap here</Button>
    </div>
  );
}

export default App;
