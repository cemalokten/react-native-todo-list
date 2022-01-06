import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export const Todo = ({todo, id}) => {
  return (
    <View style={styles.view}>
      <Text>{todo}</Text>
      <Button title={'X'} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
