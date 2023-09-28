import { View,StyleSheet } from "react-native";
import { Quadrado } from "../../components/Quadrado";

export function Flexbox(){

  return (
    <View style={estilos.container}>
      <Quadrado cor="#ff801a" lado={50} />
      <Quadrado cor="#6289bd" lado={50} />
      <Quadrado cor="#a82323" lado={50} />
      <Quadrado cor="#16c43c" lado={50} />
    </View>
  )
}
const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'flex-end'
  }
})