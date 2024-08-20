// screens/HomeScreen.js
import React from 'react';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';

const HomeScreen = ({ navigation }) => {
  return (
    <Pantalla title="Home">
      <Boton title="Ir a Nosotros" onPress={() => navigation.navigate('Nosotros')} />
      <Boton title="Ir a Imágenes" onPress={() => navigation.navigate('Imagen')} />
      <Boton title="Ir a Contador" onPress={() => navigation.navigate('Contador')} />
      <Boton title="Ir a Formulario" onPress={() => navigation.navigate('Formulario')} />
      <Boton title="Ir a Tareas" onPress={() => navigation.navigate('Tareas')} />
      <Boton title="Ir a Productos" onPress={() => navigation.navigate('Productos')} />
    </Pantalla>
  );
};

export default HomeScreen;