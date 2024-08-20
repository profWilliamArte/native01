// components/Boton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10, // Espaciado vertical
    width: '50%', // Ajustar el ancho
  },
  buttonText: {
    fontSize: 20,
    color: '#2c3e50',
    textAlign: 'center',
  },
});

export default Boton;