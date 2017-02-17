'use strict';
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View,
    Platform,
    NativeModules
} from 'react-native';
import MainPage from './MainPage';

import {Provider} from 'react-redux'
import configureStore from './app/store/configure-store'

import App from './app/app'
// import App from './js/index'
const store = configureStore();
export default class reactnative extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var defaultName = 'MainPage';
        var defaultComponent = MainPage;
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
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

AppRegistry.registerComponent('reactnative', () => reactnative);