// screens/MonitoringScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { firestore } from '../firebaseConfig';


const MonitoringScreen = ({ route }) => {
  const { aquariumId } = route.params;
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('aquariums')
      .doc(aquariumId)
      .collection('parameters')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setParameters(data);
      });

    return () => unsubscribe();
  }, [aquariumId]);

  const chartData = (parameter) => ({
    labels: parameters.map((_, index) => `Día ${index + 1}`),
    datasets: [
      {
        data: parameters.map((param) => param[parameter]),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  return (
    <ScrollView>
      <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 10 }}>Monitoreo de Parámetros</Text>
      <Text>Temperatura (°C)</Text>
      <LineChart
        data={chartData('temperature')}
        width={300}
        height={200}
        yAxisSuffix="°C"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
      <Text>Salinidad (ppt)</Text>
      <LineChart
        data={chartData('salinity')}
        width={300}
        height={200}
        yAxisSuffix="ppt"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
      {/* Repite para otros parámetros */}
    </ScrollView>
  );
};

export default MonitoringScreen;