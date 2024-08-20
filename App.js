import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NosotrosScreen from './screens/NosotrosScreen';
import ImagenScreen from './screens/ImagenScreen';
import ContadorScreen from './screens/ContadorScreen';
import FormularioScreen from './screens/FormularioScreen';
import ListaScreen from './screens/ListaScreen';
import ProductosScreen from './screens/ProductosScreen';
import DetalleProductoScreen from './screens/DetalleProductoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nosotros" component={NosotrosScreen} />
        <Stack.Screen name="Imagen" component={ImagenScreen} />
        <Stack.Screen name="Contador" component={ContadorScreen} />
        <Stack.Screen name="Formulario" component={FormularioScreen} />
        <Stack.Screen name="Tareas" component={ListaScreen} />
        <Stack.Screen name="Productos" component={ProductosScreen} />
        <Stack.Screen name="DetalleProducto" component={DetalleProductoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}