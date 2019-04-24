import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'native-base';

import Home from './src/screens//Home'
import InputRecipes from './src/screens/InputRecipes'
import DetailRecipes from './src/screens/DetailRecipes'
import Profile from './src/screens/Profile'
import InputSearch from './src/screens/InputSearch'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import ButtomNav from './src/screens/routes/ButtomNav'

const MainNavigator = createStackNavigator(
  {
  ButtomNav: {
    screen: ButtomNav,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    }
  },

  Home: {
    screen: Home,
    headerMode: 'none',
    navigationOptions: {
      header: null,
    }
  },

  DetailRecipes : {
    screen: DetailRecipes,
    headerMode: '',
    navigationOptions: {
      title: 'Detail Resep',
      headerStyle: {
        backgroundColor: '#f76710',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },

  InputRecipes: {
    screen: InputRecipes,
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: "Form Resep",
      tabBarIcon:
        <Icon name="plus-square" type="FontAwesome" />
    }
  },

  Profile: {
    screen: Profile,
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon:
        <Icon name="person" />
    }
  },

  Login : {
    screen: Login,
    headerMode: '',
    navigationOptions: {
      title: 'Halaman Login',
      headerStyle: {
        backgroundColor: '#f76710',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },

  Register : {
    screen: Register,
    headerMode: '',
    navigationOptions: {
      title: 'Halaman Daftar',
      headerStyle: {
        backgroundColor: '#f76710',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
},

  {
   initialRouteName: 'Login'
  }
)



const AppContainer  = createAppContainer(MainNavigator);


type Props = {};
export default class App extends Component<Props> {
  render(){
    return(

       <AppContainer  />

    );
  }

}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
