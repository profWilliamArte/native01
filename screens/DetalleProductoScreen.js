// screens/DetalleProductoScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';

const DetalleProductoScreen = ({ route, navigation }) => {
  const { producto } = route.params;

  return (
    <Pantalla title={producto.nombre}>
      <View style={styles.container}>
        <Image source={producto.imagen} style={styles.imagen} />
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.descripcion}>Descripción del producto aquí.</Text>
      </View>
      <Boton title="Ir a Productos" onPress={() => navigation.navigate('Productos')} />

    </Pantalla>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagen: {
 
    borderRadius: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default DetalleProductoScreen;