'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import FirstPageComponent from '../FirstPageComponent';


export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:null,
            pwd:null
        };
    }

    componentDidMount() {
            //这里获取从FirstPageComponent传递过来的参数: id
            this.setState({
                user:this.props.user,
                pwd:this.props.pwd
            });
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={{backgroundColor:'#f4f4f4',flex:1}}>
                <Image
                    style={styles.style_image}
                    source={require('./app_icon.png')}/>
                <TextInput
                    style={styles.style_user_input}
                    placeholder='QQ号/手机号/邮箱'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    value={this.state.user }
                    textAlignVertical='center'
                    textAlign='center'/>
                <View style={{height:1,backgroundColor:'#f4f4f4'}}/>
                <TextInput
                    style={styles.style_pwd_input}
                    placeholder='密码'
                    numberOfLines={1}
                    underlineColorAndroid={'transparent'}
                    value={this.state.pwd }
                    secureTextEntry={true}
                    textAlignVertical='center'
                    textAlign='center'
                />

                <View  style={styles.style_view_commit}>
                    <Text style={{color:'#fff'}}>
                       登录
                    </Text>
                </View>

                <View>
                    <TouchableHighlight
                        underlayColor='#4169e1'
                        style={styles.style_view_button}
                        onPress={this._pressButton.bind(this)}
                        >
                        <Text>登录有点击效果-跳转页面</Text>
                    </TouchableHighlight>
                </View>

                <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
                     <Text style={styles.style_view_unlogin}>
                         无法登录?
                    </Text>
                    <Text style={styles.style_view_register}>
                         新用户
                    </Text>
                </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  style_image:{
    borderRadius:45,
    height:70,
    width:70,
    marginTop:40,
    alignSelf:'center',
  },
  style_user_input:{
      backgroundColor:'#fff',
      marginTop:10,
      height:45,
  },
  style_pwd_input:{
      backgroundColor:'#fff',
      height:45,
  },
  style_view_commit:{
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      borderColor:'#5bc0de',
      height:45,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  style_view_button:{
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      borderColor:'#5bc0de',
      height:45,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  style_view_unlogin:{
    fontSize:15,
    color:'#63B8FF',
    marginLeft:10,
  },
  style_view_register:{
    fontSize:15,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  }
});
