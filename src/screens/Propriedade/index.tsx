import {ReactElement} from 'react';
import { Text, View } from "react-native";

import {estilos} from './styles';

type Props ={
  contador:number;
  children:ReactElement;
}

export function Filho({contador, children}:Props){
  return (
    <View style={estilos.containerView}>
      {children}
      <Text style={estilos.texto}>{contador}</Text>
    </View>
  )
}