import React from 'react';
import {Todo} from '../Todo/Todo';

export const TodoList = ({todos, checkTodo}) => {
  return todos.map(todo => {
    return <Todo key={todo.id} todo={todo} checkTodo={checkTodo} />;
  });
};
