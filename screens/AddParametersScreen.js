// screens/AddParametersScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ScrollView, Text } from 'react-native';
import { firestore } from '../firebaseConfig';

const AddParametersScreen = ({ route }) => {
  const { aquariumId } = route.params;
  const [temperature, setTemperature] = useState('');
  const [salinity, setSalinity] = useState('');
  const [ph, setPh] = useState('');
  const [ammonia, setAmmonia] = useState('');
  const [nitrites, setNitrites] = useState('');
  const [nitrates, setNitrates] = useState('');
  const [phosphates, setPhosphates] = useState('');
  const [kh, setKh] = useState('');
  const [calcium, setCalcium] = useState('');
  const [magnesium, setMagnesium] = useState('');

  const handleSave = async () => {
    try {
      await firestore().collection('aquariums').doc(aquariumId).collection('parameters').add({
        temperature: parseFloat(temperature),
        salinity: parseFloat(salinity),
        ph: parseFloat(ph),
        ammonia: parseFloat(ammonia),
        nitrites: parseFloat(nitrites),
        nitrates: parseFloat(nitrates),
        phosphates: parseFloat(phosphates),
        kh: parseFloat(kh),
        calcium: parseFloat(calcium),
        magnesium: parseFloat(magnesium),
        timestamp: new Date(),
      });
      Alert.alert('Éxito', 'Parámetros guardados correctamente.');
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar los parámetros.');
    }
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>Registro de Parámetros</Text>
      <TextInput placeholder="Temperatura (°C)" value={temperature} onChangeText={setTemperature} keyboardType="numeric" />
      <TextInput placeholder="Salinidad (ppt)" value={salinity} onChangeText={setSalinity} keyboardType="numeric" />
      <TextInput placeholder="pH" value={ph} onChangeText={setPh} keyboardType="numeric" />
      <TextInput placeholder="Amoníaco (NH4) (ppm)" value={ammonia} onChangeText={setAmmonia} keyboardType="numeric" />
      <TextInput placeholder="Nitritos (NO2) (ppm)" value={nitrites} onChangeText={setNitrites} keyboardType="numeric" />
      <TextInput placeholder="Nitratos (NO3) (ppm)" value={nitrates} onChangeText={setNitrates} keyboardType="numeric" />
      <TextInput placeholder="Fosfatos (PO4) (ppm)" value={phosphates} onChangeText={setPhosphates} keyboardType="numeric" />
      <TextInput placeholder="Alcalinidad (KH) (dKH)" value={kh} onChangeText={setKh} keyboardType="numeric" />
      <TextInput placeholder="Calcio (Ca) (ppm)" value={calcium} onChangeText={setCalcium} keyboardType="numeric" />
      <TextInput placeholder="Magnesio (Mg) (ppm)" value={magnesium} onChangeText={setMagnesium} keyboardType="numeric" />
      <Button title="Guardar" onPress={handleSave} />
    </ScrollView>
  );
};

export default AddParametersScreen;