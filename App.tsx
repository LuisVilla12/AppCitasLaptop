import React,{useState} from 'react';
import { SafeAreaView,Text,View,StyleSheet,ScrollView,Modal,Pressable,FlatList
} from 'react-native';
import Formulario from "./src/components/Formulario";
import Citas from "./src/components/Citas";
function App(): React.JSX.Element {
  // Parte de los hooks
  const [citas,setCitas]= useState([]);
  const [modalNuevaCita, setModalNuevaCita] = useState(false);
  const citaEditar=id=>{
    console.log('editar');
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
                          <Citas item={item} setModalNuevaCita={setModalNuevaCita} citaEditar={citaEditar} ></Citas>
                        )
                      }} ></FlatList>
        }

        {/*Formulario*/}
        <Formulario modalNuevaCita={modalNuevaCita} setModalNuevaCita={setModalNuevaCita} citas={citas} setCitas={setCitas}></Formulario>
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
