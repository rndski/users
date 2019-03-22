import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UIContext } from "../Data/UIContext";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

let scrollHandle = null;

const NavBar = props => {
  const scrollStart = e => {
    if (scrollHandle !== null) clearTimeout(scrollHandle);

    scrollHandle = setTimeout(() => {
      scrollEnd();
    }, 100);
    context.setBusy(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollStart);
    return () => {
      window.removeEventListener("scroll", scrollStart);
    };
  });

  const scrollEnd = e => {
    context.setBusy(false);
    scrollHandle = null;
  };

  const { classes } = props;
  const context = useContext(UIContext);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            {context.busy ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              <MenuIcon />
            )}
          </IconButton>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            Users
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
