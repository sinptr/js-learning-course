import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export function About() {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h2" component="h1">
          Об авторе
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4" component="h2">
              Слинкин Пётр
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Студент Кубанского Государственного Университета,
              Frontend-разработчик.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
