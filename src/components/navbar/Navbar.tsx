import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from 'router';

import { IconButton, Toolbar, Typography, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import flixxo from "assets/flixxo-logo.png";

type NavbarProps = {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

export const Navbar = ({ drawerWidth, handleDrawerToggle }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        background: "none"
      }}
    >
      <Toolbar >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' }, color: "black" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hello...
        </Typography>
        <Typography variant="button" onClick={() => navigate(DASHBOARD_ROUTE)}>
          <img src={flixxo} alt="Flixxo" />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
