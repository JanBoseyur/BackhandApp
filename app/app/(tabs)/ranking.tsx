
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { createClient } from '@supabase/supabase-js';

import { MaterialIcons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";

const supabaseUrl = 'https://uxfgnnhbqutkuiedbrjx.supabase.co';
const supabaseAnonKey = 'sb_publishable_3jNniYefGMbf_lvEqf4Zgw_wK_uRBT_';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('jugadores')
        .select('*')
        .order('ranking', { ascending: true });

      if (error) {
        console.error('Error al obtener datos:', error);
      } else {
        setJugadores(data);
      }
    };

    fetchData();
  }, []);

  return (
    <View style = {{  }}>
      <ScrollView contentContainerStyle = {styles.body}>
        {jugadores.map((jugador, index) => (
          
          <TouchableOpacity key = {jugador.id} style = {[styles.containerJugador, index !== jugadores.length - 1 && { borderBottomWidth: 0 }]}>
            
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
                <Text style = {{ fontSize: 13, fontWeight: 'bold' }}>{jugador.nombre}</Text>
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

          </TouchableOpacity>
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

