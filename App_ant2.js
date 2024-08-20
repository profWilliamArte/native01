import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Pantalla from './components/Pantalla';
import Boton from './components/Boton';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Pantalla title="Home">
      <Boton title="Ir a Nosotros" onPress={() => navigation.navigate('Nosotros')} />
      <Boton title="Ir a Imágenes" onPress={() => navigation.navigate('Imagen')} />
      <StatusBar style="auto" />
    </Pantalla>
  );
}

function NosotrosScreen({ navigation }) {
  return (
    <Pantalla title="Nosotros">
      <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style="auto" />
    </Pantalla>
  );
}

function ImagenScreen({ navigation }) {
  return (
    <Pantalla title="Imagen">
      <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style="auto" />
    </Pantalla>
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