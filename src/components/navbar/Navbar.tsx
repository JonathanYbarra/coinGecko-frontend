import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import flixxo from "assets/flixxo-logo.png";

type NavbarProps = {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

export const Navbar = ({ drawerWidth, handleDrawerToggle }: NavbarProps) => {
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
        <Typography variant="h6">
          <img src={flixxo} alt="Flixxo" />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
