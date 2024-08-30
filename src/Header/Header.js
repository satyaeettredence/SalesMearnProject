// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'; // Import the CSS file

const Header = ({ onMenuClick, onClose, isSidebarOpen }) => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
