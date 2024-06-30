import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import {formatearFecha} from '../helpers'
const informacionGeneral=({setCitaActual,citaActual,setModalInformacionGeneral})=>{
  const {paciente,mascota,date,email,telefono,sintomas}=citaActual;
  return(
    <View>
      <SafeAreaView >
        <ScrollView style={styles.container}>
          <Text style={styles.titulo}>  Información <Text style={styles.tituloBold}>general</Text></Text>
          <View style={styles.campo}>
            <Text style={styles.labels}>Nombre del dueño:{''} </Text>
            <Text style={styles.text}>{paciente}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.labels}>Nombre de la mascota:{''} </Text>
            <Text style={styles.text}>{mascota}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.labels}>Sintomas de la mascota:{''} </Text>
            <Text style={styles.text}>{sintomas}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.labels}>Correo electronico:{''} </Text>
            <Text style={styles.text}>{email}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.labels}>Telefono:{''} </Text>
            <Text style={styles.text}>{telefono}</Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.labels}>Fecha:{''} </Text>
            <Text style={styles.text}>{formatearFecha(date)}</Text>
          </View>
          <Pressable style={styles.btnCerrar} onPress={()=>{
            setCitaActual({})
            setModalInformacionGeneral(false)
          }}>
            <Text style={styles.txtBtnCerrar}>X Cerrar</Text>
          </Pressable>
        </ScrollView>
</SafeAreaView>
    </View>
      )}
const styles=StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
  },
  titulo: {
    fontSize: 30,
    color: '#FFF',
    marginTop: 20,
    fontWeight: '400',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom:30
  },
  labels: {
    color: '#FFF',
    fontSize: 21,
    textTransform:'uppercase',
    fontWeight:'bold'
  },
  text:{
    marginTop:5,
    color: '#FFF',
    fontSize: 21,
    textTransform:'uppercase'
  },
  tituloBold: {
    fontWeight: '700',
  },
  campo: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
  txtBtnCerrar:{
    backgroundColor:'#F59E0B',
    padding:15,
    textAlign:'center',
    fontSize:22,
    fontWeight:'700',
    textTransform:'uppercase',
    color:'#fff'
  },
});

export default informacionGeneral;
