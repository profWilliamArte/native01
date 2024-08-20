// screens/FormularioScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';
const FormularioScreen = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarFormulario = () => {
    // Lógica para enviar el formulario
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
    // Mostrar un mensaje de confirmación
    alert(`¡Formulario enviado!\n\nNombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`);

  };

  return (
    <Pantalla title="Formulario">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Mensaje"
          value={mensaje}
          onChangeText={setMensaje}
          multiline
        />
        <Button title="Enviar" onPress={enviarFormulario} />
      </View>
      <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
    </Pantalla>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '50%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'white',
  },
  messageInput: {
    height: 100,
  },
});

export default FormularioScreen;