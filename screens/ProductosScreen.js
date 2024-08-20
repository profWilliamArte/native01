// screens/ProductosScreen.js
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';

const productos = [
  { id: '1', nombre: 'Producto 1', imagen: require('../assets/p1.png') },
  { id: '2', nombre: 'Producto 2', imagen: require('../assets/p2.png') },
  { id: '3', nombre: 'Producto 3', imagen: require('../assets/p3.png') },
  { id: '4', nombre: 'Producto 4', imagen: require('../assets/p4.png') },
  { id: '5', nombre: 'Producto 5', imagen: require('../assets/p5.png') },
  { id: '6', nombre: 'Producto 6', imagen: require('../assets/p6.png') },
  { id: '7', nombre: 'Producto 7', imagen: require('../assets/p7.png') },
  { id: '8', nombre: 'Producto 8', imagen: require('../assets/p8.png') },
];

const ProductosScreen = ({ navigation }) => {
  const irADetalle = (producto) => {
    navigation.navigate('DetalleProducto', { producto });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productoContainer} onPress={() => irADetalle(item)}>
      <Image source={item.imagen} style={styles.imagen} />
      <Text style={styles.nombre}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <Pantalla title="Productos">
      <FlatList
        data={productos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Mostrar 2 columnas
      />
        <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
    </Pantalla>
  );
};

const styles = StyleSheet.create({
  productoContainer: {

    margin: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 200, // Ancho de las imágenes
    height: 250, // Alto de las imágenes
    borderRadius: 10, // Bordes redondeados
    backgroundColor: 'white',
  },
  nombre: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default ProductosScreen;