import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {WelcomeScreen} from "./src/screens/WelcomeScreen";
import {UserScreen} from "./src/screens/UserScreen";
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User">
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}/>
        <Drawer.Screen
          name="User"
          component={UserScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
