
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions = {{
        
        tabBarStyle: {
          backgroundColor: 'black',   
          height: 140,           
        },

        tabBarIconStyle: {
          width: '100%',
          marginTop: 12,        
        },

        tabBarLabelStyle: {
          width: '100%',
          fontSize: 12,
          marginBottom: 12, 
          marginTop: 5
        },

        tabBarActiveTintColor: 'white',  
        tabBarInactiveTintColor: 'gray',   
        headerShown: false, 
      }}>

      <Tabs.Screen
        name = "index"
        options = {{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name = "home" size = {30} color = {color}/>,
        }}
      />

      <Tabs.Screen
        name = "ranking"
        options = {{
          title: 'Ranking',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name = "podium" size = {30} color = {color}/>,
        }}
      />

    </Tabs>
  );
}
