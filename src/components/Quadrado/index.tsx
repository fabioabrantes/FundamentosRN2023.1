import { View } from "react-native";


interface IProps {
  cor?: string;
  lado?:number;
}
export function Quadrado({cor,lado}:IProps){
  return (
    <View style={[
      lado? {height:lado,width:lado}:{height:50,width:50},
      cor ?{backgroundColor:cor}:{backgroundColor:'black'}]}
      >

    </View>
  )
}