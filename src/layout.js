// src/components/Layout.js
import React, { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './sidebar';
import { CssBaseline, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = (status) => {
    setOpen(status);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ position: 'fixed', top: 16, left: 16 }}
        onClick={() => toggleSidebar(!open)}
      >
        <MenuIcon />
      </IconButton>
      <Sidebar open={open} toggleSidebar={toggleSidebar}   background-color= '#1976d2'/>
      
    </Box>
    
  );
};

export default Layout;
