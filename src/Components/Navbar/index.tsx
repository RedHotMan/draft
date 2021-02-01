import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();

  const onGithubIconClic = () => {
    window.open("https://github.com/RedHotMan/draft");
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Draft
          </Typography>
          <GitHubIcon fontSize="small" onClick={onGithubIconClic} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
