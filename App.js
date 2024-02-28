import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteContextProvider from './store/favorite-context';
import { NavigationContainer } from "@react-navigation/native"
import CategoriesScreen from './screens/CategoriesScreen';
import OrchidsScreen from './screens/OrchidsScreen';
import OrchidDetailsScreen from './screens/OrchidDetailsScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import FavoriteScreen from './screens/FavoriteScreen';
import AllOrchidsScreen from './screens/AllOrchidsScreen';
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#351401'
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: "#3f2f25"
      },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1"
    }}>
    <Drawer.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: "All categories",
        drawerIcon: ({ color, size }) => <MaterialIcons name="category" size={size} color={color} />
      }}
    />
    <Drawer.Screen name='AllOrchids' component={AllOrchidsScreen}
      options={{
        title: 'All Orchids',
        drawerIcon: ({ color, size }) => <Entypo name="flower" size={size} color={color} />

      }} />

    <Drawer.Screen name='Favorites' component={FavoriteScreen}
      options={{
        drawerIcon: ({ color, size }) => <AntDesign name="heart" size={size} color={color} />

      }} />

  </Drawer.Navigator>
}

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401'
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: "#3f2f25"
              },
              // headerShown: false

            }}
          >
            <Stack.Screen
              name='All Categories'
              component={DrawerNavigator}
              options={{
                headerShown: false,
                title: 'Back'
              }}
            />
            <Stack.Screen
              name='Orchids'
              component={OrchidsScreen}
            />

            <Stack.Screen
              name='OrchidDetails'
              component={OrchidDetailsScreen}
              options={{
                title: 'Back'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
