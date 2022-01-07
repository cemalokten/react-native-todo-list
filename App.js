import React, {useState, useRef} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {TodoList} from './src/components/TodoList/TodoList';
import uuid from 'react-native-uuid';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const title = text;
    if (title === '') return;
    setTodos(allTodos => [
      ...allTodos,
      {id: uuid.v4(), title: title, complete: false},
    ]);
  };

  const checkTodo = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(t => t.id === id);
    todo.complete = !todo.complete;
    console.log(JSON.stringify(todos, null, 2));
    setTodos(newTodos);
  };

  const clearComplete = () => {
    const incompleteTodos = todos.filter(todo => !todo.complete);
    setTodos(incompleteTodos);
  };

  return (
    <View style={style.view}>
      <TextInput
        onChangeText={value => setText(value)}
        defaultValue={text}
        placeholder="Add a todo"
      />
      <Button title={'Add'} onPress={addTodo} />
      <Button title={'Clear Completed'} onPress={clearComplete} />
      <Text>{todos.filter(todo => !todo.complete).length} Left to do</Text>
      <TodoList todos={todos} checkTodo={checkTodo} />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'blue',
    borderRadius: 5,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
