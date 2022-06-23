import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Pressable, Linking } from 'react-native';

const  colorGitHub = '#010409'
const photoProfile = 'https://avatars.githubusercontent.com/u/96487287?s=400&v=4'
const urlToMyGithub='https://github.com/mtts021'

export default function App() {
    const handlePressGoToGithub=async()=>{
      console.log('Verificando link');
      const res = await Linking.canOpenURL(urlToMyGithub);
      if (res){
        console.log('Link Aprovado');
        console.log('Abrindo link');
        await Linking.openURL(urlToMyGithub);
        }
    };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGitHub}/>
      <View style = {styles.content}>
      <Image accessibilityLabel='foto de Perfil'
                style = {styles.avatar}
                source={{uri: photoProfile} 
                }/>
        <Text  accessibilityLabel='Nome Matteus Santos'
          style={[styles.name, styles.defaultText]}>Matteus Santos</Text>
        <Text accessibilityLabel='Nickmame mtts021 '
          style={styles.nickname}>mtts021</Text>
        <Text accessibilityLabel='Descrição: Etudando Tecnologia'
          style={[styles.description, styles.defaultText]}>Estudando tecnologia</Text>
          <Pressable onPress={handlePressGoToGithub}>
            <View style={styles.button} >
              <Text style={[styles.textButton, styles.defaultText]}>Open in GitHub</Text>
            </View>
          </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGitHub,
    justifyContent:'center',
    alignItems: 'center'
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor:'white',
    borderWidth: 2
  },
  defaultText:{
    color: '#f0f6fc',
    textAlign: 'center',
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold'
    
  },
  nickname:{
    fontSize: 18,
    color: '#8b949e',
    textAlign: 'center'
  },
  description: {
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: '#8b949e',
    paddingVertical:25 ,
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    marginTop: 10
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
