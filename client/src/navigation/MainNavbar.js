import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./MainNavbar.css";
import { Link } from "@mui/material";

function MainNavbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="link">
          <Toolbar variant="dense" style={{ width: "100px" }}>
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              color="inherit"
              component="div"
            ></Typography>
            <Link href="home">Home</Link>
            <Link href="signup">
              <Button color="inherit">Signup</Button>
            </Link>
            <Link href="login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="profile">
              <Button color="inherit">Profile</Button>
            </Link>
            ......
            <Link href="postmuseum">
              <Button color="inherit">NewMuseum</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default MainNavbar;
