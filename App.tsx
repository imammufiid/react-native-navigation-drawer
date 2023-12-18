import {NavigationContainer} from "@react-navigation/native";
import {WelcomeScreen} from "./src/screens/WelcomeScreen";
import {UserScreen} from "./src/screens/UserScreen";
import {Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c0a6b'
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: "#3c0a6b"
        }}>
        <BottomTabs.Screen
          name="Welcome"
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size}/>
            )
          }}
          component={WelcomeScreen}/>
        <BottomTabs.Screen
          name="User"
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size}/>
            )
          }}
          component={UserScreen}/>
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
