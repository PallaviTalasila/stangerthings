import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Open Sans Condensed, sans-serif",
    color: "white",
    fontSize: "18px",
    marginTop: "0",
    padding: "8px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    fontWeight: "600",
    marginLeft: "10px",
  },
  linkColor: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function Header({
  username,
  setUsername,
  setPassword,
  loggedIn,
  setLoggedIn,
}) {
  console.log(loggedIn);

  const history = useHistory();

  const classes = useStyles();
  const handleClick = (event) => {
    event.preventDefault();
    localStorage.removeItem(`${username}Token`);
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    history.push("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        Stranger's Things
        <Link className={classes.linkColor} to="/">
          <Button color="inherit">HOME</Button>
        </Link>
        {!loggedIn ? null : (
          <Link className={classes.linkColor} to="/profile">
            <Button color="inherit">Profile</Button>
          </Link>
        )}
        <Link className={classes.linkColor} to="/posts">
          <Button color="inherit">POSTS</Button>
        </Link>
        {loggedIn ? null : (
          <Link className={classes.linkColor} to="/login">
            <Button color="inherit">LOGIN</Button>
          </Link>
        )}
        {!loggedIn ? null : (
          <Button color="inherit" onClick={handleClick}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
