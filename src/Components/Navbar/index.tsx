import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const onGithubIconClic = () => {
    window.open("https://github.com/RedHotMan/draft");
  }

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          Draft
        </Typography>
        <GitHubIcon fontSize="small" onClick={onGithubIconClic} />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
