import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from './screens/CadastroScreen';
import ConsultaScreen from './screens/ConsultaScreen';
import HomeScreen from './screens/HomeScreen';
import { enableScreens } from 'react-native-screens';

enableScreens();


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro de Usuário' }} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} options={{ title: 'Consulta de Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
