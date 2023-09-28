import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// import { Container } from './styles';
interface IProps {
  num1: number;
  num2: number;
}
export function Filho3({num1, num2}:IProps){
  return (
    <View style={styles.container}>
      <Text style={styles.txtG}>{num1}</Text>
      <Text style={styles.txtG}>{num2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txtG: {
    fontSize: 20,
    textAlign: 'center',
  },
  container:{
    alignItems: 'center',
    justifyContent:'center',
    flex:1
  }
});
