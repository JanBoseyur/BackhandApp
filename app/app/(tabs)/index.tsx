
import { Image } from 'expo-image';
import { View, Text, StyleSheet, TextInput } from 'react-native';

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

      <View style = {styles.formContainer}>
        
        <Text style = {{ fontSize: 25, fontWeight: 'bold' }}>
          Iniciar Sesión
        </Text>

        <Text style = {{ marginTop: 20, marginBottom: 5  }}>
          Correo electronico
        </Text>

        <TextInput
          style = {styles.input}
          placeholder = "Correo Electronico"
          placeholderTextColor = "#888"
          keyboardType = "default"
        />

        <Text style = {{ marginTop: 20, marginBottom: 5 }}>
          Contraseña
        </Text>

        <TextInput
          style = {styles.input}
          placeholder = "Contraseña"
          placeholderTextColor = "#888"
          keyboardType = "default"
        />

        <Text style = {{ marginTop: 10, fontWeight: 'bold' }}>
          ¿No tienes cuenta? Registrate aquí
        </Text>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,                 
    backgroundColor: 'white',
  },

  banner: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: '30%',
  },

  containerLogo: {
    width: '50%',
    height: '50%'
  },

  fondoLogo: {
    width: '100%',
    height: 250,
  },

  containerTitulo: {
    alignSelf: 'flex-end',
    width: '50%'
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
  },

  formContainer: {

    color: 'white',
    backgroundColor: 'white',

    justifyContent: 'center', 
    alignItems: 'center',    
  },

  input: {
    alignSelf: 'center',
    textAlign: 'center',
    borderColor: 'black',
    
    borderWidth: 1.5,
    width: '70%',
    height: '13%',

    borderRadius: 100,
  },

});
