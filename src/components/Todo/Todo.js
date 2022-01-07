import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const Todo = ({todo, checkTodo}) => {
  const handleCheck = () => {
    checkTodo(todo.id);
  };

  const isComplete = () => {
    return todo.complete ? true : false;
  };

  return (
    <View style={styles.view}>
      <BouncyCheckbox onPress={handleCheck} />
      <Text style={styles[todo.complete ? 'lineThrough' : 'noLineThrough']}>
        {todo.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  noLineThrough: {
    textDecorationLine: 'none',
  },
});
