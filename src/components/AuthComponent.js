import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  link: {
    color: "white",
    textDecoration: "none",
  },
});

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  const sendRequest = () => {
    axios
      .post("https://private-052d6-testapi4528.apiary-mock.com/authenticate", {
        email: email,
        password: password,
      })
      .then((response) =>
        localStorage.setItem("userData", JSON.stringify(response.data[0]))
      );
  };

  return (
    <Box
      sx={{
        display: "grid",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{
        padding: "3rem"
      }}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>Email</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel>Password</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={password}
            type="password"
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Link className={classes.link} to="/info">
            <Button fullWidth onClick={sendRequest} variant="contained">
              Login
            </Button>
          </Link>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default AuthComponent;
