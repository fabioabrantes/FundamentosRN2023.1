import { Text, View, StyleSheet } from "react-native";

export function Header(){

  return (
    <View style={estilos.quadrado}>
      <Text>Cabeçalho</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  quadrado:{
    backgroundColor:'yellow',
    height:100,
    width: "100%"
  }
})