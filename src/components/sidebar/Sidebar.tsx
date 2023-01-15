import { useNavigate } from "react-router-dom";
import { COIN_LIST_ROUTE, DASHBOARD_ROUTE } from 'router';

import { Divider, ListItem, ListItemButton, ListItemIcon, Box, List, ListItemText, Toolbar, Drawer } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import flixxoCoin from "assets/flixx-coin.png";
import { useActivePath } from "hooks";
import Typography from "@mui/material/Typography";

type SidebarProps = {
  drawerWidth: number;
  window?: () => Window;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

export const Sidebar = ({ window, drawerWidth, handleDrawerToggle, mobileOpen }: SidebarProps) => {
  const { activeColorItem } = useActivePath();
  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();

  const drawer = <>
    <Toolbar>
      <Box px={4} pt={2}>
        <Typography variant="button" onClick={() => navigate(DASHBOARD_ROUTE)}>
          <img src={flixxoCoin} alt="Flixxo" width={110} />
        </Typography>
      </Box>
    </Toolbar>
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate(DASHBOARD_ROUTE)}>
          <ListItemIcon >
            <DashboardIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ ...activeColorItem(DASHBOARD_ROUTE) }} />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate(COIN_LIST_ROUTE)}>
          <ListItemIcon>
            <CurrencyBitcoinIcon color='primary' />
          </ListItemIcon>
          <ListItemText primary="All coins" primaryTypographyProps={{ ...activeColorItem(COIN_LIST_ROUTE) }} />
        </ListItemButton>
      </ListItem>
    </List>
  </>

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
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
  );
};
