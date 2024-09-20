import React from 'react';
import { Grid } from '@mui/material';
import Navbar from './Navbar';
import UserTable from './UserTable';

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <UserTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard;