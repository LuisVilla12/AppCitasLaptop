import React,{useState} from 'react';
import {
  SafeAreaView, Text, View, StyleSheet, ScrollView, Modal, Pressable, FlatList, Alert
} from "react-native";
import Formulario from "./src/components/Formulario";
import Citas from "./src/components/Citas";
import InformacionGeneral from "./src/components/InformacionGeneral";
function App(): React.JSX.Element {
  // Parte de los hooks
  const [citas,setCitas]= useState([]);
  const [modalNuevaCita, setModalNuevaCita] = useState(false);
  // cita a editar
  const [citaActual, setCitaActual] = useState({});
  const [modalInformacionGeneral, setModalInformacionGeneral] = useState(false);
  const cerrarNuevaCita=()=>{
    setModalNuevaCita(false);
  }
  const citaEditar=id=>{
    //Busca en el arreglo de la cita quien tiene ese id
    const citaEditar=citas.filter(cita=>cita.id === id);
    // console.log(citaEditar[0]);
    // Mandar el objeto que tiene ese id
    setCitaActual(citaEditar[0]);
    // console.log('editar',citaEditar[0]);
  }
  const eliminarCita=id=>{
    // const elimiarCita=citas.(cita=>cita.id === id);
    Alert.alert('¿Quieres eliminar esta cita?','Una cita eliminada no se puede recuperar',[
      {text:'Cancelar'},{text:'Si eliminar',onPress:()=>{
          // Extraer todos los que sean difentes
          const citasSinEliminar=citas.filter(cita=>cita.id !== id);
          setCitas(citasSinEliminar);
          console.log('eliminar',id);
        }}
    ])
  }
  const mostrarInformacion=id=>{
    setModalInformacionGeneral(true);
    const citaEditar=citas.filter(cita=>cita.id === id);
    setCitaActual(citaEditar[0]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {/*Asignar la clase de la hoja de estilos*/}
          <Text style={styles.titulo}>Administrador de citas {''}
            <Text style={styles.tituloBold}>Veternarias</Text>
          </Text>
        </View>

        {/*Todo puede estar rodeado de un pressable*/}
        <Pressable style={styles.botonNuevaCita}>
          <Text style={styles.textoNuevaCita} onPress={()=>setModalNuevaCita(true)}>Nueva cita</Text>
        </Pressable>

        {/*Listado de citas*/}
        {
          citas.length===0?<Text style={styles.noCitas}>No hay citas registradas</Text>:
            <FlatList data={citas}  keyExtractor={(item)=>item.id}
                      renderItem={({item})=>{
                        return (
                          <Citas item={item} setModalNuevaCita={setModalNuevaCita} setCitaActual={setCitaActual}  citaEditar={citaEditar} eliminarCita={eliminarCita} setModalInformacionGeneral={setModalInformacionGeneral}></Citas>
                        )
                      }} ></FlatList>
        }
        <Modal visible={modalInformacionGeneral} animationType={'fade'}>
          <InformacionGeneral setModalInformacionGeneral={setModalInformacionGeneral} citaActual={citaActual}  setCitaActual={setCitaActual} citaActual={citaActual} ></InformacionGeneral>
        </Modal>
        {/*Formulario cuando el modal nueva cita sea visible*/}
        {modalNuevaCita && (
          <Formulario cerrarNuevaCita={cerrarNuevaCita} modalNuevaCita={modalNuevaCita}  citas={citas} setCitas={setCitas} citaActual={citaActual} setCitaActual={setCitaActual}></Formulario>
        )}

      </ScrollView>

    </SafeAreaView>
  );
}

// Crear la hoja de estilos
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#f3f4f6',
    flex:1,
  },
  botonNuevaCita:{
    marginTop:10,
    marginHorizontal:20,
    backgroundColor:'#6D28D9',
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
  titulo:{
    textAlign:'center',textTransform:'uppercase',fontSize:25,color:'#000',fontWeight:'700',marginTop:10,
  },
  tituloBold:{
    color:'#6D28D9',
  },
  noCitas:{
    marginTop:40,
    textAlign:'center',
    fontSize:24,
  }
});
export default App;
