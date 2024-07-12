import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Believe in Allah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    height: 50,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Screen;
