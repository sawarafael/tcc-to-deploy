import { Home } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleNavigate}
        >
          <Home />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LAWYER APP
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
