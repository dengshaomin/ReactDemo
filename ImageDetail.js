/**
 * Created by dengshaomin on 2017/2/9.
 */
'use strict';
import React from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    ToolbarAndroid,
    Image,
} from 'react-native';
import FirstPage from './SecondPage';
import TabNavigator from 'react-native-tab-navigator';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default class ImageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    navIcon={require('./app_icon.png')}
                    title="子页"
                    style={{height: 56, backgroundColor: '#ffffff'}}
                    actions={[{title: '关闭', show: 'never'}]}
                    onActionSelected={this.onActionSelected}
                    onIconClicked={this._onPressButton.bind(this)}
                />
                <Image source={{uri: this.props.url}}
                       style={{width: width, height: height / 2, marginTop: 5}}
                />

            </View>

        );
    }

    _onPressButton() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
};

var styles = StyleSheet.create({
    tab: {
        height: 50,
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    himiTextStyle: {
        backgroundColor: '#eee',
        color: '#f00',
        fontSize: 30,
        marginTop: 30,
    },
});