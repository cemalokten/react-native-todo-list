import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
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
    setText('');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.view}>
      <ScrollView style={[style.scrollView]}>
        <TodoList todos={todos} checkTodo={checkTodo} />
      </ScrollView>

      <TextInput
        onChangeText={value => setText(value)}
        defaultValue={text}
        placeholder="What's Next?"
        style={[style.textInput]}
      />

      <Pressable
        onPress={addTodo}
        style={({pressed}) => [
          style.button,
          style.purpleButton,
          {opacity: pressed ? 0.8 : 1},
          {transform: pressed ? [{scale: 0.97}] : [{scale: 1}]},
        ]}>
        <Text style={style.buttonText}>Add</Text>
      </Pressable>

      <Pressable
        onPress={clearComplete}
        style={({pressed}) => [
          style.button,
          style.greenButton,
          {opacity: pressed ? 0.8 : 1},
          {transform: pressed ? [{scale: 0.97}] : [{scale: 1}]},
        ]}>
        <Text style={style.buttonText}>Clear</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'blue',
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  view: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: 'black',
  },
  textInput: {
    marginTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000',
    width: 326,
    elevation: 3,
    fontSize: 25,
    fontFamily: 'MabryPro-Medium',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontFamily: 'MabryPro-Medium',
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000',
    width: 326,
    elevation: 3,
  },
  purpleButton: {
    backgroundColor: '#696FFF',
  },
  greenButton: {
    backgroundColor: '#6CFF69',
    marginBottom: 40,
  },
});

export default App;
