// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddParametersScreen from './screens/AddParametersScreen';
import MonitoringScreen from './screens/MonitoringScreen';
import { firestore } from './firebaseConfig'; // Importa firestore desde firebaseConfig

const Stack = createStackNavigator();

const App = () => {
  // Ejemplo: Verificar que Firebase está funcionando
  useEffect(() => {
    firestore()
      .collection('test')
      .add({ message: 'Firebase está funcionando!' })
      .then(() => console.log('Datos guardados en Firestore'))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddParameters"
          component={AddParametersScreen}
          options={{ title: 'Registrar Parámetros' }}
        />
        <Stack.Screen
          name="Monitoring"
          component={MonitoringScreen}
          options={{ title: 'Monitoreo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;