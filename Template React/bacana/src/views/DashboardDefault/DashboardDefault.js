import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  PerformanceOverTime
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  }
}));

const DashboardDefault = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Default Dashboard"
    >
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid item lg={12} xs={12}>
          <PerformanceOverTime />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DashboardDefault;
