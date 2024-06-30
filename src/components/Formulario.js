import React,{useState,useEffect}  from "react";
import { Modal, Pressable, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, View,Alert } from "react-native";
import DatePicker from 'react-native-date-picker'

const Formulario=(props)=>{
  const {cerrarNuevaCita,modalNuevaCita,citas,setCitas,citaActual,setCitaActual}=props;

  const [id,setId]=useState('');
  const [paciente,setPaciente]=useState('');
  const [mascota,setMascota]=useState('');
  const [email,setEmail]=useState('');
  const [telefono,setTelefono]=useState('');
  const [sintomas,setSintomas]=useState('');
  const [date, setDate] = useState(new Date())

  useEffect(()=>{
    if(Object.keys(citaActual).length>0){
      console.log(citaActual.paciente);
      setId(citaActual.id);
      setPaciente(citaActual.paciente);
      setMascota(citaActual.mascota)
      setEmail(citaActual.email)
      setTelefono(citaActual.telefono)
      setSintomas(citaActual.sintomas)
      setDate(citaActual.date);
      console.log('hay cita a editar');
    }else{
      console.log('No hay cita a editar');
    }
    }
  ,[citaActual])

  const handleCita= ()=>{
    // Valida que no este vacio
    if([paciente,mascota,email,telefono,sintomas,date].includes('')){
      Alert.alert('Error','Hay campos vacios',[{text:'OK'}])
      return;
    }
    const nuevaCita={
      paciente,mascota,email,telefono,sintomas,date
    }

    // Validar si es nuevo registro  o actualizacion
    if(id){
      //Editando
      nuevaCita.id=id;
      // remplazar la información anterior por la actualizada mediante el id
      const citasActualizadas  = citas.map(citasState=>citasState.id===nuevaCita.id? nuevaCita:citasState);
      // manda la información
      setCitas(citasActualizadas);
      // Borrar el state
      setCitaActual('');
    }else{
      // Nuevo registro
      // Añadir ID;
      nuevaCita.id=Date.now()
      setCitas([...citas,nuevaCita]);
    }
    setId('')
    setPaciente('');
    setMascota('')
    setEmail('')
    setTelefono('')
    setSintomas('')
    setDate(new Date())
    // una copia de los pacientes actuales y uno nuevo
    cerrarNuevaCita();
  }
  return (
      <Modal visible={modalNuevaCita} animationType={"slide"} >
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.titulo}>{citaActual.id? 'Editar':'Nueva'} {''} <Text style={styles.tituloBold}>Cita</Text></Text>
            <Pressable style={styles.btnCerrar} onPress={()=>{
              // Borrar el state
              setId('')
              setCitaActual({});
              setPaciente('');
              setMascota('')
              setEmail('')
              setTelefono('')
              setSintomas('')
              setDate(new Date())
              cerrarNuevaCita()
            }}>
              <Text style={styles.txtBtnCerrar}>X Cerrar</Text>
            </Pressable>
            {/*CAMPOS*/}
            <View style={styles.campo}>
              <Text style={styles.labels}>Nombre del dueño:</Text>
            <TextInput value={paciente} onChangeText={setPaciente} style={styles.inputs} keyboardType={"default"} placeholder={"Ingrese el nombre del dueño"}></TextInput>
            </View>
            <View style={styles.campo}>
              <Text style={styles.labels}>Nombre de la mascota:</Text>
              <TextInput value={mascota}  onChangeText={setMascota} style={styles.inputs} keyboardType={"default"} placeholder={"Ingrese el nombre de la mascota"}></TextInput>
            </View>
            <View style={styles.campo}>
              <Text style={styles.labels}>Correo del dueño:</Text>
              <TextInput value={email} onChangeText={setEmail} style={styles.inputs} keyboardType={"email-address"} placeholder={"Ingrese el correo del dueño"}></TextInput>
            </View>
            <View style={styles.campo}>
              <Text style={styles.labels}>Telefono del dueño:</Text>
              <TextInput value={telefono} on onChangeText={setTelefono} style={styles.inputs} keyboardType={"number-pad"} placeholder={"Ingrese el telefono del dueño"} maxLength={10}></TextInput>
            </View>
            <View style={styles.campo}>
              <Text style={[styles.labels,styles.sintomas]}>Sintomas de la mascota:</Text>
              <TextInput value={sintomas} onChangeText={setSintomas} style={styles.inputs} keyboardType={"default"} placeholder={"Ingresa los sintomas de la mascota"} multiline={true} numberOfLines={3}></TextInput>
            </View>
            <View style={styles.campo}>
              <Text style={[styles.labels,styles.sintomas]}>Fecha de ingreso a la cita:</Text>
              <View  style={styles.date} >
                <DatePicker date={date} locale={'es'} onDateChange={setDate}></DatePicker>
              </View>
            </View>
            <Pressable style={styles.botonNuevaCita}  onPress={handleCita}>
              <Text style={styles.textoNuevaCita}>{citaActual.id? 'Actualizar Cita':'Nueva Cita'}</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </Modal>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#6D28D9',
    flex:1,
  },
  titulo:{
    fontSize:30,
    color:'#FFF',
    marginTop:20,
    fontWeight:'400',
    textTransform:'uppercase',
    textAlign:'center'
  },
  labels:{
    color:'#FFF',
    fontSize:15,
  },
  tituloBold:{
    fontWeight:'700',
  },
  campo:{
    marginVertical:10,
    marginHorizontal:25,
  },
  inputs:{
    backgroundColor:'#FFF',
    borderRadius:10,
    marginTop:10,
    color:'#000',
    paddingHorizontal:16
  },
  sintomas:{
  },
  botonNuevaCita:{
    marginTop:10,
    marginBottom:20,
    marginHorizontal:20,
    backgroundColor:'#5827A4',
    paddingVertical:15,
    paddingHorizontal:10,
    borderRadius:10,
  },
  textoNuevaCita:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'700',
    textTransform:'uppercase',
    color:'#fff'
  },
  date:{
    backgroundColor:'#FFF',
    marginTop:15,
    borderRadius:10,
  },
  btnCerrar:{
    backgroundColor:'#5827A4',
    padding:10,
    marginTop:15,
    borderRadius:15,
    marginHorizontal:10
  },
  txtBtnCerrar:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'700',
    textTransform:'uppercase',
    color:'#fff'
  },
})
export default Formulario;

