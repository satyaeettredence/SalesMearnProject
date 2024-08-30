// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './ReduxState/store';
import Layout from './layout';
import Grid from '@mui/material/Grid2';
import SalesLineChart from './sales/salesLinechart'
import UsersList from './test/userList';

function App() {
  return (
    <Provider store={store}>
    <div className="App"  sx={{ display: 'flex'}}>
      <div className='header'>
      <Layout />
      </div>
    <div className='content row'>
    <Grid container spacing={2}>
        <Grid size={1}>
        </Grid>
        <Grid size={11}>
        <SalesLineChart/>
        <h1>User List</h1>
        <UsersList />
        </Grid>
      </Grid>
    </div>
      <footer>@copy</footer>
    </div>
    </Provider>
  );
}

export default App;
