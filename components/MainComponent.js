import React, { Component } from 'react';
import { PLACES } from '../shared/place';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListTravel from './ListTravelComponent';
import PlaceDetail from './PlaceDetailComponent';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// import Home from './HomeComponent';
// function HomeNavigatorScreen() {
//   const HomeNavigator = createStackNavigator();
//   return (
//     <HomeNavigator.Navigator
//       initialRouteName='Home'
//       screenOptions={{
//         headerStyle: { backgroundColor: '#512DA8' },
//         headerTintColor: '#fff',
//         headerTitleStyle: { color: '#fff' }
//       }}>
//       <HomeNavigator.Screen name='Home' component={Home} />
//     </HomeNavigator.Navigator>
//   );
// }
function ListNavigatorScreen() {
  const ListNavigator = createStackNavigator();
  return (
    <ListNavigator.Navigator
      initialRouteName='Place'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <ListNavigator.Screen name='List Travel' component={ListTravel} />
      <ListNavigator.Screen name='PlaceDetail' component={PlaceDetail} options={{ headerTitle: 'Place Detail' }} />
    </ListNavigator.Navigator>
  );
}
// function MainNavigatorScreen() {
//   const MainNavigator = createDrawerNavigator();
//   return (
//     <MainNavigator.Navigator initialRouteName='HomeScreen'>
//       <MainNavigator.Screen name='HomeScreen' component={HomeNavigatorScreen} options={{ title: 'Home', headerShown: false }} />
//       <MainNavigator.Screen name='MenuScreen' component={ListNavigatorScreen} options={{ title: 'Menu', headerShown: false }} />
//     </MainNavigator.Navigator>
//   );
// }
class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     places: PLACES
  //   };
  // }
  render() {
    return (
      <NavigationContainer>
        <ListNavigatorScreen />
      </NavigationContainer>
    //   <NavigationContainer>
    //   <MainNavigatorScreen />
    // </NavigationContainer>
    );
  }
}
export default Main;