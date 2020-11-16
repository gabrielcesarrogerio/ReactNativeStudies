/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
    headerStyle: {
      backgroundColor: '#DA552F',
    },
    headerTintColor: '#FFF',
  };

  render() {
    return (
      <View>
        <Text>Página main</Text>
      </View>
    );
  }
}
