import { Toolbar, Button, Typography, IconButton, AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          APP
        </Typography>
        <Button color="inherit">Entrar</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
