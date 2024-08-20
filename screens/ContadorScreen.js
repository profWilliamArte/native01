// screens/ContadorScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';

const ContadorScreen = ({ navigation }) => {
  // Estado para el contador
  const [contador, setContador] = useState(0);

  // Funciones para manejar el contador
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador > 0 ? contador - 1 : 0); // Evita que el contador sea negativo

  return (
    <Pantalla title="Contador">
      <View style={styles.container}>
        <Text style={styles.contadorText}>{contador}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Incrementar" onPress={incrementar} />
          <Button title="Decrementar" onPress={decrementar} />
        
        </View>
        <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </Pantalla>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contadorText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  
  },
});

export default ContadorScreen;