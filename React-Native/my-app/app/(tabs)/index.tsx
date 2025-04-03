import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import bgImage from "@/assets/images/Background-Image.png"

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={bgImage}
      resizeMode='cover'
      style={styles.Image}>
      <Text style={styles.text}> Hi Welcome</Text>
      </ImageBackground>
    </View>
  )
}

export default index;

const styles =  StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  Image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  text:{
    color:'red',
    fontSize:42,
    fontWeight:'bold',
    margin:'auto'
  }
})