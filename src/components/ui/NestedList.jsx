import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export function NestedList({ title = '', items = [] }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText>
          <strong>{title}</strong>
        </ListItemText>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map(({ title, link }) => (
            <ListItem
              key={title}
              button
              className={classes.nested}
              onClick={() => history.push(link)}
            >
              <ListItemText>{title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
