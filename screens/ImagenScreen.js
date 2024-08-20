// screens/ImagenScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Pantalla from '../components/Pantalla';
import Boton from '../components/Boton';

const ImagenScreen = ({ navigation }) => {
    return (
        <Pantalla title="Imagenes">
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/foto1.png')} // Asegúrate de que la imagen esté en la carpeta correcta
                    style={styles.image}
                />
                <Image
                    source={require('../assets/foto2.png')}
                    style={styles.image}
                />
                 <Image
                    source={require('../assets/foto3.png')} // Asegúrate de que la imagen esté en la carpeta correcta
                    style={styles.image}
                />
                <Image
                    source={require('../assets/foto4.png')}
                    style={styles.image}
                />
                
                
            </View>
            <Boton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
        </Pantalla>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
      flexDirection: 'row', // Para mostrar las imágenes en fila
      justifyContent: 'space-around', // Espaciado entre las imágenes
      marginVertical: 20,
      gap: 20,
      flexWrap: 'wrap',
    },
    image: {
      width: 200, // Ancho de las imágenes
      height: 250, // Alto de las imágenes
      borderRadius: 10, // Bordes redondeados
    },
  });
  
export default ImagenScreen;