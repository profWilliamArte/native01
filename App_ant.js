import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola Mundo</Text>
      <Text style={styles.titulo}>Desde React Native</Text>
      <Text style={styles.titulo}>En Home</Text>
      <Button
          buttonStyle={styles.button}
          title="Ir a Nosotros"
          onPress={() => navigation.navigate('Nosotros')}
        />
      <view style={styles.contenedorBotones}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Nosotros')}
        >
          <Text style={styles.buttonText}>Ir a Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Imagen')}
        >
          <Text style={styles.buttonText}>Imagenes</Text>
        </TouchableOpacity>

      </view>
      <StatusBar style="auto" />
    </View>
  );
}

function NosotrosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nosotros</Text>
      <Button
        buttonStyle={styles.button}
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Ir a Home</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
function ImagenScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Imagen</Text>
      <Button
        buttonStyle={styles.button}
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Ir a Home</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nosotros" component={NosotrosScreen} />
        <Stack.Screen name="Imagen" component={ImagenScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  contenedorBotones: {
   display: 'flex',
   justifyContent: 'space-between',
   gap: 20,
   marginTop: 20
    

  },
  button: {
  
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
});