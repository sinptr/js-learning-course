import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { NestedList } from '../ui/NestedList';

export function Navigation() {
  return (
    <>
      <List>
        <NestedList
          title="Основы JavaScript"
          items={[
            { title: 'Привет, мир!', link: '/lessons/hello-world' },
            { title: 'Структура кода', link: '/lessons/code-structure' },
            {
              title: 'Строгий режим — "use strict"',
              link: '/lessons/use-strict',
            },
            {
              title: 'Переменные',
              link: '/lessons/variables',
            },
          ]}
        />
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/about">
          <ListItemText>Об авторе</ListItemText>
        </ListItem>
      </List>
    </>
  );
}
