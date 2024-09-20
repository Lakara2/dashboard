import React from 'react';
import { Box } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Box sx={{
      margin:5,
      borderRadius:3,
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
      <Dashboard />
    </Box>
  );
}

export default App;