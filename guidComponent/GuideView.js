/**
 * Created by huibei on 17/1/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

let firstImage = require('../images/guide/red_packet_lg.png');
let secondImage = require('../images/guide/red_packet_lg.png');
let thirdImage = require('../images/guide/red_packet_lg.png');
let forthImage = require('../images/guide/red_packet_lg.png');

import Util from '../Util'


export default class GuideView extends Component{
    // componentDidMount(){
    //     codePush.sync({
    //         updateDialog: true,
    //         installMode: codePush.InstallMode.IMMEDIATE
    //     });
    // }

    render(){
        return (<ScrollView
            contentContainerStyle={styles.container}
            bounces={false}
            pagingEnabled={true}
            horizontal={true}>
            <Image source={firstImage} style={styles.backgroundImage} />
            <Image source={secondImage} style={styles.backgroundImage} />
            <Image source={thirdImage} style={styles.backgroundImage} />
            <Image source={forthImage} style={styles.backgroundImage} />
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container:{
        width:Util.size.width*4,
        height:Util.height
    },
    backgroundImage:{
        width:Util.size.width,
        height:Util.size.height
    }
})