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
    Image,
} from 'react-native';
import SecondPage from './SecondPage';
import TabNavigator from 'react-native-tab-navigator';
import ImageDetail from './ImageDetail'
export default class reactnative extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={require('./loading.gif')}
                                                 style={{resizeMode: Image.resizeMode.center}}/>}
                        renderSelectedIcon={() => <Image source={require('./app_icon.png')}
                                                         style={{resizeMode: Image.resizeMode.center}}/>}
                        badgeText="61"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
                            <Text style={{fontSize: 20}}>我是第一个选项卡，直接书写出的视图!</Text>
                        </View>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <Image source={require('./loading.gif')}
                                                 style={{resizeMode: Image.resizeMode.center}}/>}
                        renderSelectedIcon={() => <Image source={require('./app_icon.png')}
                                                         style={{resizeMode: Image.resizeMode.center}}/> }
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <SecondPage itemClick={this.itemClick.bind(this)}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }

    itemClick(url) {
         const {navigator} = this.props;
         if (navigator) {
             navigator.push({
                 name: 'ImageDetail',
                 component: ImageDetail,
                 params: {
                     url: url
                 }
             })
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

AppRegistry.registerComponent('reactnative', () => reactnative);