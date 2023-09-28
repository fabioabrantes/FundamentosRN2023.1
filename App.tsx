import {useState} from 'react';
import { Text } from 'react-native';
import {Filho} from './src/screens/Propriedade';
import {Filho2} from './src/screens/comunicacaoIndireta';
import { Flexbox } from './src/screens/FlexBox';
import { RenderCondicional } from './src/screens/RenderCondicional';
import { Filho3 } from './src/screens/comunicacaoDireta';
import { Usuario } from './src/screens/Estados';
import { ListaProdutos } from './src/screens/Listas';

export default function App() {
  const [x,setX] = useState<number>(10);
  let y =100;
  let z = 15;
  
  function contador(){
    setX(x +1)
    console.log(x);
  }
  return (
    <>
    {/*   <Filho contador={x}>
        <Text>Fabio</Text>
      </Filho> */}
     {/*  <Filho2 add={contador}>
      <Text>{x}</Text> */}
      {/* <Flexbox /> */}
     {/*  </Filho2> */}
     {/* <Filho3 num1={z + 20} num2={y + 50}/> */}
     {/* <RenderCondicional/> */}
     {/* <Usuario/> */}
     <ListaProdutos/>
    </>
  );
}
