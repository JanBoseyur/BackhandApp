
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

import CountryFlag from "react-native-country-flag";

export default function App() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch('http://192.168.2.105:3000/jugadores')
      .then(res => res.json())
      .then(data => setJugadores(data))
      .catch(console.error);
  }, []);

  return (
    <View style = {styles.body}>
      {jugadores.map(jugador => (
      
        <View style = {styles.containerJugador}>

          <View style = {styles.containerFoto}>
            <Image
              source = {{ uri: jugador.foto1 }}
              style = {{ width: '100%', height: '100%'}}
            />
          </View>

          <View style = {{ flexDirection: 'column', width: '100%'}}>
            
            <View style = {styles.containerRank}>
              <Text>{jugador.ranking}</Text>
            </View>

            <View style = {styles.containerPuntos}>
              <Text>{jugador.puntos}</Text>
            </View>

          </View>

           <View style = {{ flexDirection: 'column', width: '100%'}}>
            
            <View style = {styles.containerRank}>
              <Text>{jugador.ranking}</Text>
            </View>

            <View style = {styles.containerPuntos}>
              <Text>{jugador.puntos}</Text>
            </View>

          </View>

        </View>

      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {    
    color: 'black',

    marginTop: '20%',
    borderWidth: 2
  },

  containerJugador: {
    flexDirection: 'row',

    width: '100%',
    height: '100%'
  },

  containerFoto: {
    borderWidth: 2,
    width: '25%',
    height: '30%',
  },

  containerRank: {
    borderWidth: 2,
    width: '25%',
    height: '10%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  containerNombre: {
    borderWidth: 2,
    width: '25%',
    height: '10%',

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  containerPuntos: {
    borderWidth: 2,
    width: '25%',
    height: '10%',

    justifyContent: 'center',
    alignItems: 'center'
  }

});
