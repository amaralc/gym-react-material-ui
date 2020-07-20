import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { UseStyles } from './styles';

export default () => {
  const classes = UseStyles();
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane className={classes.paper} />
      </Grid>
      <Grid item sm>
        <RightPane className={classes.paper} />
      </Grid>
    </Grid>
  );
};
