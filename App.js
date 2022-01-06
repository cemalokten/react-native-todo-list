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

  return (
    <View style={style.view}>
      <Text>TO DO LIST</Text>
      <TextInput
        onChangeText={value => setText(value)}
        defaultValue={text}
        placeholder="Add a todo"
      />
      <Button title={'Add'} color="red" onPress={addTodo} />
      <Button title={'Clear Completed'} color="red" />
      <Text style={style.text}>0 Left to do</Text>
      <TodoList todos={todos} />
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
