import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, Typography } from '@material-ui/core';

export function Home() {
  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h4" component="h1">
          Учебно-методический комплекс для электронного обучения языку
          JavaScript
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h2">
          Список дополнительных источников:
        </Typography>
      </Grid>
      <Grid item>
        <ul>
          <li>
            <Link target="_blank" href="https://developer.mozilla.org/ru/">
              MDN Web Docs
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.freecodecamp.org/">
              Code Camp
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.intuit.ru/studies/courses">
              ИНТУИТ
            </Link>
          </li>
          <li>
            <Link target="_blank" href="http://welcome.stepik.org/ru">
              Stepic
            </Link>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
