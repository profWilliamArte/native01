// screens/ListaScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton'; // Asegúrate de que el nombre del archivo sea correcto (Boton.js)

const ListaScreen = ({ navigation }) => { // Asegúrate de recibir navigation como prop
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim()) {
      setListaTareas((prevTareas) => [
        ...prevTareas,
        { id: Date.now().toString(), texto: tarea, completada: false },
      ]);
      setTarea('');
    }
  };

  const marcarCompletada = (id) => {
    setListaTareas((prevTareas) =>
      prevTareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };



  const eliminarTarea = (id) => {
    setListaTareas((prevTareas) => prevTareas.filter((t) => t.id !== id));
  };



  return (
    <Pantalla title="Lista de Tareas">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Agregar nueva tarea"
          value={tarea}
          onChangeText={setTarea}
        />
        <Button title="Agregar" onPress={agregarTarea} />
        <FlatList
          data={listaTareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tareaContainer}>
              <TouchableOpacity onPress={() => marcarCompletada(item.id)}>
                <Text style={[styles.tareaTexto, item.completada && styles.completada]}>
                  {item.texto}
                </Text>
              </TouchableOpacity>
              <Button title="Eliminar" onPress={() => eliminarTarea(item.id)} />
            </View>
          )}
          contentContainerStyle={styles.listContainer} // Estilo para el contenedor de la lista
        />
      </View>
      <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
    </Pantalla>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: '70%',

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'white', // Cambia el color a negro para que sea visible
  },
  tareaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#353b48',
    marginTop: 10,
  },
  tareaTexto: {
    fontSize: 18,
    flex: 1,
    color: 'white',
  },
  completada: {
    textDecorationLine: 'line-through',
    color: '#fff',
    opacity: 0.5,
   
  },
  listContainer: {
    paddingBottom: 120, // Espacio adicional en la parte inferior
  },
});

export default ListaScreen;