import React from 'react';
import List from '@material-ui/core/List';
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
          ]}
        />
      </List>
    </>
  );
}
