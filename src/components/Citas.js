import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
const Citas=({item,setModalNuevaCita,citaEditar})=>{
  const {paciente,date,mascota}=item;

  const formatearFecha=fecha=>{
    const nuevaFecha= new Date(fecha);
    const opciones={
      hour:'numeric',
      minute:'numeric',
      weekday:'long',
      year:'numeric',
      month:'long',
      day:'numeric',
    }
    return nuevaFecha.toLocaleDateString('es-ES',opciones)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.labels}>Paciente:</Text>
      <Text style={styles.mascota}>{mascota} <Text style={styles.labels}> ({paciente}) </Text> </Text>
      <Text style={styles.fecha}>{formatearFecha(date)}</Text>
      <View style={styles.contenedorBotones}>
        <Pressable style={[styles.btnEditar,styles.btn]}>
          <Text style={styles.btnTexto} onLongPress={()=>{citaEditar}setModalNuevaCita(true)}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btnEliminar,styles.btn]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>

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
