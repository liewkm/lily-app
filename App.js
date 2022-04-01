import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';
import WelcomeScreen from "./containers/WelcomeScreen";
import MapView1 from './containers/MapView1';
// import all screens from containers folder

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            // And all the number of screens in onboarding process
            <Stack.Screen name='MapView1' component={MapView1} />
        </Stack.Navigator>        
    );
}