import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import {formatearFecha} from '../helpers'
const Citas=({item,setModalNuevaCita,citaEditar,eliminarCita,setModalInformacionGeneral,setCitaActual})=>{
  const {paciente,date,mascota,id}=item;
  return(
    <Pressable onPress={()=>{
      setCitaActual(item);
      setModalInformacionGeneral(true)}
    } >
    <View style={styles.container}>
      <Text style={styles.labels}>Paciente:</Text>
      <Text style={styles.mascota}>{mascota} <Text style={styles.labels}> ({paciente}) </Text> </Text>
      <Text style={styles.fecha}>{formatearFecha(date)}</Text>
      <View style={styles.contenedorBotones}>
        <Pressable style={[styles.btnEditar,styles.btn]}>
          <Text style={styles.btnTexto} onPress={()=>{
            citaEditar(id)
            setModalNuevaCita(true)
          }}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btnEliminar,styles.btn]}>
          <Text style={styles.btnTexto} onPress={()=>{
            eliminarCita(id)
          }}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
    </Pressable>

  )
}

export default Citas;
const styles=StyleSheet.create({
  contenedorBotones:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
  btn:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
  },
  btnEditar:{
    backgroundColor:'#F59E0B'
  },
  btnEliminar:{
    backgroundColor:'#EF4444'
  },
  btnTexto:{
    fontWeight:'700',
    color:'#fff'
  },
  container:{
    backgroundColor:'#fff',
    padding:20,
    marginHorizontal:20,
    marginVertical:5,
    borderRadius:10,
    borderBottomColor:'#94a3b8',
    borderBottomWidth:1,
  },
  mascota:{
    fontSize:21,
    color:'#6D28D9',
    fontWeight:'700',
    marginVertical:2,
  },
  labels: {
    color:'#374151',
    fontSize: 15,
    textTransform:'uppercase',
    marginVertical: 2,
    fontWeight:'400',
    color:'#000',
  },
  fecha:{
    color:'#374151'

  }
})
