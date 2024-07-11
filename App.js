import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

 function App() {
  const [name, setName] = useState('Abubakkar');
  const [age, setAge] = useState('23');

  return (
    <View style={styles.container}>
    
    <Text>Enter age:</Text>
      <TextInput
        style = {styles.input}

        placeholder='e.g Abubakkar'
        onChangeText={(val) => setName(val)} />

      <Text>Enter age:</Text>
      <TextInput
        style = {styles.input}
        placeholder='e.g 20'
        onChangeText={(val) => setAge(val)} />
      <Text>Name: {name}, Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});

export default App;

