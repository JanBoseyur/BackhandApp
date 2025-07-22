
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useNavigation, useRoute } from '@react-navigation/native';

import CountryFlag from 'react-native-country-flag';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uxfgnnhbqutkuiedbrjx.supabase.co';
const supabaseAnonKey = 'sb_publishable_3jNniYefGMbf_lvEqf4Zgw_wK_uRBT_';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function PerfilJugador() {
  const navigation = useNavigation();
  const route = useRoute();
  const { jugadorId } = route.params || {};

  const [jugador, setJugador] = useState(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    
    navigation.setOptions({
      title: 'Perfil',
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    });

  }, [navigation]);

  useEffect(() => {
    const fetchJugador = async () => {
      if (!jugadorId) return;

      const { data, error } = await supabase
        .from('jugadores')
        .select('*', '')
        .eq('id', jugadorId)
        .single();

      if (!error) setJugador(data);
      setLoading(false);
    };

    fetchJugador();
  }, [jugadorId]);

  if (loading) return <ActivityIndicator size = "large" style = {{ marginTop: 50 }} />;
  if (!jugador) return <Text style = {{ marginTop: 50 }}>Jugador no encontrado</Text>;

  return (
    <View style = {styles.container}>

      <Text style = {styles.nombre}>{jugador.nombre}</Text>
      <Image source = {{ uri: jugador.foto1 }} style = {styles.imagen} resizeMode = "contain" />
      <CountryFlag isoCode = {jugador.pais} size = {25} />
      <Text style = {styles.info}>Ranking: {jugador.ranking}</Text>
      <Text style = {styles.info}>Puntos: {jugador.puntos}</Text>
      <Text style = {styles.info}>Torneo actual: {jugador.torneo_actual}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20,
    alignItems: 'center',
  },

  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  info: {
    fontSize: 16,
    marginTop: 10,
  },
});