import React from 'react';
import {Todo} from '../Todo/Todo';

export const TodoList = ({todos}) => {
  return todos.map(todo => {
    return <Todo key={todos.id} todo={todo.title} />;
  });
};
