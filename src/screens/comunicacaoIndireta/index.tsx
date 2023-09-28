import {ReactNode} from 'react';
import { Button, Text, View } from "react-native";

import {estilos} from './styles';
type Props ={
  children:ReactNode;
  add: ()=> void;
}
export function Filho2({children,add}:Props){
  return (
    <View style={estilos.containerView}>
      <Text style={estilos.texto}> </Text>
      {children}
      <Button title="Add" onPress={add}/>
    </View>
  )
}