import React, { useState } from 'react';
import { Collapse, Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/default-highlight';

export function Task({ title, description, solution }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box my={2}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography>{description}</Typography>
        </Grid>
        {solution && (
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Button color="primary" onClick={() => setCollapsed(x => !x)}>
                  Показать решение
                </Button>
              </Grid>
              <Grid item>
                <Collapse in={collapsed}>
                  <SyntaxHighlighter language={solution.lang} style={docco}>
                    {solution.text}
                  </SyntaxHighlighter>
                </Collapse>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
