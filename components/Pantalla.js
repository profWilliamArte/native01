// components/Pantalla.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boton from './Boton';

const Pantalla = ({ navigation, title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{title}</Text>
      {children}
    </View>
  );
};

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
    marginBottom: 20,
  },
});

export default Pantalla;