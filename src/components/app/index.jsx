import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Link,
} from '@material-ui/core';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Main } from '../main';
import { Lesson } from '../lesson';
import { Home } from '../home';

const theme = createMuiTheme();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Main>
          <Switch>
            <Route path="/lessons/:lessonId">
              <Lesson />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
};
