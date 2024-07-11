import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View ,Button
  
} from 'react-native';

export default function App() {
  const [name, setname] = useState('Abubakkar');
  const [person, setPerson] = useState({name: "siddique", age: 24});

  const clickHandler = () =>{
    setname('Anabiya');
    setPerson({name: 'Sumaiya', age: 23})
  }

  return (
    <View style={styles.container}>
     <Text style = {styles.boldText}> Hello World</Text>
     

     <View>
      <Text>My first name is {name} last name is {'\n'} {person.name}  and I am {person.age}.</Text> 
      <Button title = 'update state' onPress={clickHandler}/>
     </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boldText:{
    fontWeight: 'bold',
    color: 'yellow',
  }

 
});

