import {View, StyleSheet, Text, FlatList, TextComponent} from 'react-native';

import {products} from '../../../data';

type IProduto = {
  id: number;
  nome: string;
  preco: number;
}
interface IProdutoItem {
  item: IProduto;
}

export function ListaProdutos(){


  return (
    <View style={styles.container}>
      <Text style={styles.txtG}>Lista de Produtos 1</Text>
      
      {
        products.length > 0 && products.map(product => (
          <Text key={`${product.id}`} style={{padding:5}}>
            O id:{product.id} é o produto {product.nome} que tem preço R$
            {product.preco}
          </Text>
        ))
      }

      <Text style={styles.txtG}>Lista de Produtos 2</Text>

      <View style={styles.conatiner2}>
        <FlatList
          data={products}
          keyExtractor={item => `${item.id}`}
          renderItem={({item})=>{
            return (
              <Text style={{padding:5}}>
                {item.id} {item.nome} - R$ {item.preco}
              </Text>
            )
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtG: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color:'blue',
  },
  conatiner2: {
    backgroundColor:'yellow',
    height:150,
    paddingHorizontal:30,
    marginHorizontal:30,

  },
});
