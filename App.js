import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native'; // Import StatusBar and Platform
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import BusinessScreen from './screens/BusinessScreen';
import TechnologyScreen from './screens/TechnologyScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Article" component={ArticleScreen} />
          <Stack.Screen name="Business" component={BusinessScreen} />
          <Stack.Screen name="Technology" component={TechnologyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
