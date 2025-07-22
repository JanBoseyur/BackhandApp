
import { Image } from 'expo-image';
import React, { useEffect, useState, useCallback  } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useRouter } from 'expo-router';

import { createClient } from '@supabase/supabase-js';

import { MaterialIcons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";

const supabaseUrl = 'https://uxfgnnhbqutkuiedbrjx.supabase.co';
const supabaseAnonKey = 'sb_publishable_3jNniYefGMbf_lvEqf4Zgw_wK_uRBT_';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const router = useRouter();

export default function App() {
  const [jugadores, setJugadores] = useState([]);

  useFocusEffect(
    useCallback(() => {
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
    }, [])
  );

  return (
    <View>
      
      <ScrollView contentContainerStyle = {styles.body}>
        {jugadores.map((jugador, index) => (
          
          <TouchableOpacity key = {jugador.id} 
            style = {[styles.containerJugador, index !== jugadores.length - 1 && { borderBottomWidth: 0 }]}
            onPress = {() => router.push(`/perfil/${jugador.id}`)}>
            
            <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
              
              <View style = {{ width: '10%', height: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                <Text style = {{ fontSize: 15, fontWeight: 'bold' }}>{jugador.ranking}.</Text>
              </View>
              
              <View style = {{ width: '32%', height: 200, overflow: 'hidden'}}>
                <Image
                  source = {{ uri: jugador.foto1 }}
                  style = {{ width: '100%', height: 200 }}
                />
              </View>

              <View style = {{ width: '40%', height: 200, alignItems: 'center', alignContent: 'center', alignSelf: 'center', justifyContent: 'center'}}>
                <Text style = {{ fontSize: 14, fontWeight: 'bold', marginBottom: '5%', textAlign: 'center' }}>{jugador.nombre}</Text>

                <View style = {{ alignItems: 'center', alignContent: 'center', alignSelf: 'center', marginVertical: 5}}>
                  <CountryFlag isoCode = {jugador.pais} size = {15} />
                </View>

                <Text style = {{ fontSize: 13, marginTop: '5%' }}>Torneo Actual</Text>
                <Text style = {{ fontWeight: 'bold' }}>{jugador.torneo_actual}</Text>

                <Text style = {{ fontSize: 13, marginTop: '5%' }}>Puntos</Text>
                <Text style = {{ fontWeight: 'bold' }}>{jugador.puntos}</Text>

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
  },

  containerJugador: {
    flexDirection: 'column',

    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 200,

    borderTopWidth: 1,
    borderBottomWidth: 1,

    padding: 15
  },

});

