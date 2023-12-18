import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {WelcomeScreen} from "./src/screens/WelcomeScreen";
import {UserScreen} from "./src/screens/UserScreen";
import {Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c0a6b'
          },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#F0E1FF',
          drawerActiveTintColor: '#3c0a6b',
        }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({color, size}) => {
              return <Ionicons name="home" color={color} size={size}/>
            }
          }}/>
        <Drawer.Screen
          name="User"
          options={{
            drawerIcon: ({color, size}) => {
              return <Ionicons name="person" color={color} size={size}/>
            }
          }}
          component={UserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
