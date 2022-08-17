import { TextField } from "@mui/material";
import React from "react";
import Sheet from "@mui/joy/Sheet";

// import TextField from "@mui/joy/TextField";
function LoginView() {
  return (
    <>
      {" "}
      <Sheet
        sx={
          {
            // ...
          }
        }
      >
        <TextField
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Email"
        />
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
      </Sheet>
    </>
  );
}
export default LoginView;
