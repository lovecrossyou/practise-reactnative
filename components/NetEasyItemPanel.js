/**
 * Created by huibei on 17/1/22.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    PixelRatio,
    Dimensions,
    TouchableOpacity
} from 'react-native';


var {height, width} = Dimensions.get('window');


class NetEasyHeader extends Component {
    render() {
        return <View style={styles.header}>
            <Text style={{fontSize: 18}}>频道管理</Text>
        </View>
    }
}

class NetEasyItem extends Component {
    render(){
        return (<View>
            <TouchableOpacity style={styles.button}>
                <Text>萝卜白菜</Text>
            </TouchableOpacity>
        </View>)
    }
}

class SelectedBlock extends Component {
    constructor(props) {
        super(props);
    }

    deleteItem(event, index) {
        this.props.onDeleteLikeItem(index);
    }

    render() {
        let likedList = this.props.likedList;
        let likedListArray = [];
        let likedListKey = Object.keys(likedList);
        likedListKey.forEach(function (index) {
            likedListArray.push(likedList[index]);
        })
        return (<View
            style={styles.selectStyle}>
            <View style={{height: 24, backgroundColor: '#ffffff'}}>
                <Text style={{lineHeight:24,paddingLeft:4}}>已选分类</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <NetEasyItem />
                <NetEasyItem />
                <NetEasyItem />
            </View>
        </View>)
    }
}

class SelectListBlock extends Component {
    render() {
        return (<View
            style={styles.linkStyle}>
            <View style={{height: 24, backgroundColor: '#ffffff'}}>
                <Text style={{lineHeight:24,paddingLeft:4}}>选择分类</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <NetEasyItem />
                <NetEasyItem />
                <NetEasyItem />
            </View>
        </View>)
    }
}

export default class NetEasyItemPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { counter, selectList,likedList } = this.props;
        return (<View style={styles.container}>
            <NetEasyHeader/>
            <SelectedBlock
                likedList={selectList}
                onDeleteLikeItem={(item) => {
                }}>
                >
            </SelectedBlock>

            <SelectListBlock
                selectList={selectList}
                likedList={likedList}
                onAddLikeItem={(index, item) => {
                }}>
                >
            </SelectListBlock>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectStyle: {
        // backgroundColor: 'gray',
        height: (height - 20 - 44) / 2,
    },
    linkStyle: {
        // backgroundColor: 'red',
        height: (height - 20 - 44) / 2,
    },
    header: {
        marginTop: 20,
        height: 44,
        backgroundColor: '#FFEBCD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemStyle:{
        marginTop:4,
        marginLeft:2,
        marginRight:2,
        width:70,
        height:30,
        backgroundColor:'#FFFAF0',
        borderBottomWidth:1,
        borderColor:'#FFF8DC',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    }
})
