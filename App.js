import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput, TouchableOpacity } from 'react-native';

var Resultado = 0, Valor1 = 0, Valor2 = 0

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'cccccc',
    fontSize: 25
  },
  input: {
    margin: 5,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 18,
    textAlign: 'center',
    width: '100%'
  },
  bloco: {
    margin: 5
  },
  btn: {
    margin: 5,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 18,
    textAlign: 'center',
    width: '100%'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Prototipo de alguma coisa</Text>
      <StatusBar style="auto" />
      <View style={styles.bloco}>
        <Text>Valor 1:</Text>
        <TextInput style={styles.input} placeholder={'Primeiro valor'} />
        <Text>Valor 2:</Text>
        <TextInput style={styles.input} placeholder={'Segundo valor'} />
        <TouchableOpacity style={styles.btn}><Text>Somar</Text></TouchableOpacity>
        <Text>Resultado: {Resultado}</Text>
      </View>
    </View>
  );
}
