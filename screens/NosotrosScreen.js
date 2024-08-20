// screens/NosotrosScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';

const NosotrosScreen = ({ navigation }) => {
  return (
    <Pantalla title="Nosotros">
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.jpg')} // Asegúrate de que la ruta sea correcta
          style={styles.logo}
        />
        <Text style={styles.description}>
          Somos un equipo apasionado por la tecnología y la innovación. Nuestra misión es crear aplicaciones que mejoren la vida de las personas y faciliten su día a día.
        </Text>
        <Text style={styles.description}>
          Con años de experiencia en desarrollo de software, nos comprometemos a ofrecer soluciones de alta calidad y un excelente servicio al cliente.
        </Text>
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
  logo: {
    width: 150, // Ajusta el tamaño según sea necesario
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default NosotrosScreen;