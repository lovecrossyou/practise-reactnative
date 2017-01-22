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
    View
} from 'react-native';

import codePush from "react-native-code-push";
import GuideView from './components/GuideView'
import AutoExpandingTextInput from './components/AutoExpandingTextInput'

export default class RootView extends Component {
    componentDidMount() {
        codePush.sync();
    }

    render() {
        return (<View style={styles.container}>
            <View style={styles.viewStyle}>
                <AutoExpandingTextInput style={styles.textInput}/>
            </View>
        </View>);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1
    },
    viewStyle: {
        justifyContent:'center',
        alignItems:'center'
    },
    textInput: {
        width: 200,
        height: 30,
        backgroundColor: "grey",
    }
})

AppRegistry.registerComponent('LaunchProject', () => RootView);

