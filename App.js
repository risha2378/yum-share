
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostRecipe from './components/PostRecipe';
import Nav from './components/Nav';
import FindRecipe from './components/FindRecipe';

const Stack = createNativeStackNavigator();

export default function App  () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PostRecipe'>
        <Stack.Screen
          name="PostRecipe"
          component={PostRecipe}
        />
        <Stack.Screen
          name="Nav"
          component={Nav}
        />
        <Stack.Screen
          name="FindRecipe"
          component={FindRecipe}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};