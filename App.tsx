import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, Switch, ScrollView } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Next: undefined;
  Profile: undefined;
  Settings: undefined;
  Payment: undefined;
  Login: undefined;
  CreateAccount: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
type NextScreenProps = StackScreenProps<RootStackParamList, 'Next'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go Next"
          onPress={() => navigation.navigate('Next')}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button
          title="Payment"
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
    </View>
  );
}

function NextScreen({ navigation }: NextScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Believe in Allah</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={require('./assets/pp.png')} // Use the local image file
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileBio}>Software Developer | Tech Enthusiast</Text>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor suscipit sem, eget tincidunt massa pharetra sit amet.</Text>
      </View>
      <Button
        title="Edit Profile"
        onPress={() => {
          // Handle edit profile action here
        }}
      />
    </ScrollView>
  );
}

function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <View style={styles.container}>
      <Text>Payment Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        onChangeText={setCardNumber}
        value={cardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date"
        onChangeText={setExpiryDate}
        value={expiryDate}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        secureTextEntry
        onChangeText={setCvv}
        value={cvv}
      />
      <Button
        title="Make Payment"
        onPress={() => {
          // Handle payment action here
        }}
      />
    </View>
  );
}

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button
        title="Login"
        onPress={() => {
          // Handle login action here
        }}
      />
    </View>
  );
}

function CreateAccountScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Create Account Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button
        title="Create Account"
        onPress={() => {
          // Handle create account action here
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    
  },
  buttonContainer: {
    marginTop: 20,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  profileDetails: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});
