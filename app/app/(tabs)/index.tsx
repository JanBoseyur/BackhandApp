
import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    
    <View style = {styles.body}>

      <View style = {styles.banner}>
      
        <View style = {styles.containerLogo}>
          <Image
            source = {require('@/assets/images/roger_login.png')}
            style = {styles.fondoLogo}
          />
        </View>

        <View style = {styles.containerTitulo}>
          
          <Text style = {styles.titulo}>
            Backhand
          </Text>
        
        </View>

      </View>

      <View style = {styles.body}>
        
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: 'white',
  },

  banner: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: '20%',
  },

  containerTitulo: {
    alignSelf: 'flex-end',
    width: '50%'
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
  },

  containerLogo: {
    width: '50%',
    height: '50%'
  },

  fondoLogo: {
    width: '100%',
    height: 220,
  },
});
