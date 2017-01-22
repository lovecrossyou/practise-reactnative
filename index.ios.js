/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import codePush from "react-native-code-push";
import GuideView from './guidComponent/GuideView'


export default class RootView extends Component{
  componentDidMount(){
        codePush.sync();
    }
  render(){
    return (<GuideView />);
  }
}

AppRegistry.registerComponent('LaunchProject', () => RootView);
