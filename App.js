import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';

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
    margin: 5,
  },
  btn: {
    margin: 5,
    borderColor: '#00009c',
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    display: 'flex'
  }
});

export default function App() {

  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [result, setResult] = useState();

  function somar() {
    if ((valor1) && (valor2)) {
      setResult(parseFloat(valor1) + parseFloat(valor2))
    }
  }
  function subtrair() {
    if ((valor1) && (valor2)) {
      setResult(parseFloat(valor1) - parseFloat(valor2))
    }
  }
  function dividir() {
    if ((valor1) && (valor2)) {
      setResult(parseFloat(valor1) / parseFloat(valor2))
    }
  }
  function multiplicar() {
    if ((valor1) && (valor2)) {
      setResult(parseFloat(valor1) * parseFloat(valor2))
    }
  }

  function reset() {
    setResult(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Prototipo de alguma coisa</Text>
      <StatusBar style="auto" />
      <View style={styles.bloco}>
        <Text>Valor 1:</Text>
        <TextInput style={styles.input} value={valor1} keyboardType='numeric' placeholder={'Primeiro valor'} onChangeText={(texto) => setValor1(texto)} />
        <Text>Valor 2:</Text>
        <TextInput style={styles.input} value={valor2} keyboardType='numeric' placeholder={'Segundo valor'} onChangeText={(texto) => setValor2(texto)} />
        <TouchableOpacity style={styles.btn} onPress={somar}><Text>Somar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={subtrair}><Text>Subtrair</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={multiplicar}><Text>Multiplicar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={dividir}><Text>Dividir</Text></TouchableOpacity>
        <Text>Resultado: {result}</Text>
        <TouchableOpacity style={styles.btn} onPress={reset}><Text>Reiniciar</Text></TouchableOpacity>
      </View>
    </View>
  );
}
