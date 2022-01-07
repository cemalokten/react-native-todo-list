import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const Todo = ({todo, checkTodo}) => {
  const handleCheck = () => {
    checkTodo(todo.id);
  };

  return (
    <View style={styles.view}>
      <BouncyCheckbox
        onPress={handleCheck}
        size={25}
        fillColor="#6CFF69"
        iconStyle={{
          borderColor: 'black',
          borderTopWidth: 3,
          borderBottomWidth: 3,
          borderLeftWidth: 3,
          borderRightWidth: 3,
        }}
        checkIconImageSource="/"
      />
      <Text style={styles[todo.complete ? 'lineThrough' : 'noLineThrough']}>
        {todo.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,

    height: 80,
    paddingLeft: 33,
  },
  item: {
    fontSize: 25,
    fontFamily: 'MabryPro-Medium',
    paddingLeft: 20,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    fontSize: 25,
    fontFamily: 'MabryPro-Medium',
    paddingLeft: 20,
  },
  noLineThrough: {
    textDecorationLine: 'none',
    fontSize: 25,
    fontFamily: 'MabryPro-Medium',
    paddingLeft: 20,
  },
});
