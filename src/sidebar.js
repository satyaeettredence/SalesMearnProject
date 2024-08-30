// src/components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={() => toggleSidebar(false)}
    >
      <List>
        {['Sales Analytics ', 'User Activities', 'Inventory Status'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
