import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/sidebar';
import { Navbar } from 'components/navbar';
import { Box } from '@mui/material';

const drawerWidth = 240;

export const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />

      <Sidebar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Box
        component="main"
        sx={{ flexGrow: 1, py: 11, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}