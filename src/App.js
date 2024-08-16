import './App.css';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import Verify from './pages/Verify';
import AboutUs from './pages/AboutUs';
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Home, History, Info } from '@mui/icons-material';
import React, { useState } from 'react';

const drawerWidth = 240;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ overflow: 'auto' }}>
      <Typography variant="h5" sx={{ padding: 2 }}>
        CheckMed
      </Typography>
      <Divider sx={{ margin: '0 16px' }} />
      <List>
        <ListItem
          button
          component={Link}
          to="/verify"
          selected={location.pathname === "/verify"}
          sx={{ 
            backgroundColor: location.pathname === "/verify" ? 'rgba(0, 0, 0, 0.08)' : 'inherit'
          }}
        >
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Verify" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          selected={location.pathname === "/about"}
          sx={{ 
            backgroundColor: location.pathname === "/about" ? 'rgba(0, 0, 0, 0.08)' : 'inherit'
          }}
        >
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="About The System" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: { xs: 'block', sm: 'none' }, // Only show AppBar on small screens
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              CheckMed
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            mt: { xs: 7, sm: 0 }, // Adjust main content position for AppBar
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/verify" />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
