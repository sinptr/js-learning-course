import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import { Main } from '../main';
import { Lesson } from '../lesson';
import { Home } from '../home';
import { About } from '../about';

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
            <Route path="/about">
              <About />
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
