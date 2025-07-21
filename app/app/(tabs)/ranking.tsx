
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";

const { width, height } = Dimensions.get('window');

export default function App() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch('http://192.168.2.122:3000/jugadores')
      .then(res => res.json())
      .then(data => setJugadores(data))
      .catch(console.error);
  }, []);

  return (
    <View style = {{  }}>
      <ScrollView contentContainerStyle = {styles.body}>
        {jugadores.map((jugador, index) => (
          
          <View key = {jugador.id} style = {[styles.containerJugador, index !== jugadores.length - 1 && { borderBottomWidth: 0 }]}>
            
            <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
              
              <View style = {{ width: '10%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style = {{ fontSize: 15, fontWeight: 'bold' }}>{jugador.ranking}.</Text>
              </View>
              
              <View style = {{ width: '30%', height: 100, overflow: 'hidden'}}>
                <Image
                  source = {{ uri: jugador.foto1 }}
                  style = {{ width: '100%', height: 200 }}
                />
              </View>

              <View style = {{ width: '30%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Text style = {{ fontSize: 13 }}>{jugador.nombre}</Text>
              </View>

            </View>

            <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
              
              <View style = {{ marginVertical: 10, alignItems: 'center', marginHorizontal: 10}}>
                <Text style = {{ fontSize: 13 }}>Puntos</Text>
                <Text style = {{ fontWeight: 'bold' }}>{jugador.puntos}</Text>
              </View>

              <View style = {{ marginVertical: 10, alignItems: 'center', marginHorizontal: 10}}>
                <Text style = {{ fontSize: 13 }}>Torneo Actual</Text>
                <Text style = {{ fontWeight: 'bold' }}>{jugador.torneo_actual}</Text>
              </View>

            </View>

          </View>
        ))}
      </ScrollView>

    </View> 
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: '25%'
  },

  containerJugador: {
    flexDirection: 'column',

    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',

    width: '100%',

    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

});

