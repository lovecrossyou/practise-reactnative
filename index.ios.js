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

import codePush from "react-native-code-push";
import GuideView from './components/GuideView'
import AutoExpandingTextInput from './components/AutoExpandingTextInput'
import NetEasyItemPanel from './components/NetEasyItemPanel'
export default class RootView extends Component {
    componentDidMount() {
        codePush.sync();
    }

    render(){
        var selectList = []
        var likedList = []
        return (<NetEasyItemPanel
            style={styles.container}
            selectList={selectList}
            likedList={likedList}
        />)
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1
    }
})

AppRegistry.registerComponent('LaunchProject', () => RootView);

