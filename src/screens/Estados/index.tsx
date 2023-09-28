import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

/* mostrar 29/09/2023 */
export function Usuario(){
  const [nameUser, setNameUser] = useState('');
  const [lastName, setLastName] = useState('');
  const [nameComplete, setNameComplete] = useState('');

  const handleClick = () => {
    let nameComplete = `${nameUser}  ${lastName}`;
    setNameComplete(nameComplete);
    setNameUser('');
    setLastName('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nameUser}
        onChangeText={name => setNameUser(name)}
        placeholder='Digite seu primeiro nome'
        placeholderTextColor='gray'
      />

      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={name => setLastName(name)}
        placeholder='Digite seu último nome'
        placeholderTextColor='gray'
      />

      <Button title="salvar" onPress={handleClick} />
      
      {
        nameComplete && (
        <>
          <Text style={styles.label}>Usuário cadastrado</Text>
          <Text style={styles.nameComplete}>{nameComplete}</Text>
        </>
        )
      }
      
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom:10,
    padding:10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label:{
    fontSize:30,
    color:'blue',
    marginTop:30
  },
  nameComplete:{
    fontSize:20,
    fontWeight:'bold'
  }
});
