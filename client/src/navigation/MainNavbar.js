import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import "./MainNavbar.css";
import { Link } from "@mui/material";

function MainNavbar() {
  return (
    <>
      <Box sx={{ flexGrow: 5 }}>
        <AppBar position="static" className="link">
          <Toolbar variant="dense" style={{ width: "100px" }}>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
            ></Typography>
            <Link href="home">
              <Button color="inherit">Home </Button>
            </Link>
            <Link href="signup">
              {" "}
              <Button color="inherit">Signup</Button>
            </Link>
            <Link href="login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link href="profile">
              <Button color="inherit">Profile</Button>
            </Link>
            ..
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
