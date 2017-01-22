/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

// import codePush from "react-native-code-push";
// import GuideView from './components/GuideView'
// import AutoExpandingTextInput from './components/AutoExpandingTextInput'
import NetEasyItemPanel from './components/NetEasyItemPanel'
import App from './container/app'

AppRegistry.registerComponent('LaunchProject', () => App);

