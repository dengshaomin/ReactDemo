/**
 * Created by dengshaomin on 2017/2/8.
 */
'use strict';
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    ToastAndroid,
    Image,
    TouchableNativeFeedback,
    ActivityIndicator,
    ListView,
    Navigator,
    RefreshControl

} from 'react-native';
import LoadingView from './loading';
import LoadingMore from './loading_more.gif'
import ImageDetail from './ImageDetail'
import PullList from './pullrefresh/PullList';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const moreText = "加载完毕";    //foot显示的文案
//页码
var pageNum = 1;
//每页显示数据的条数
const pageSize = 10;
//页面总数据数
var pageCount = 0;
//页面List总数据
var totalList = new Array();

//foot：  0 隐藏  1  已加载完成   2  显示加载中
export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
            loaded: false,//加载更多是否完成
            refreshing: false, //刷新
            foot: 0,// 控制foot， 0：隐藏foot  1：已加载完成   2 ：显示加载中
            error: false,
        }
    }

    componentWillMount() {
        pageNum = 1;
        // this.setTimeout(() => {
        //     this._fetchListData(), 1000
        // });

        this.timer = setTimeout(() => {
                this._fetchListData()
            }
            ,
            30
        );
        // this.timer && clearTimeout(this.timer);
        // this._fetchListData();
    }

    _fetchListData() {
        var mythis = this;
        if (pageNum > 1) {
            this.setState({loaded: true});
        }
        console.log(this.state.refreshing + "==")
        fetch('http://gank.io/api/search/query/listview/category/福利/count/10/page/' + pageNum).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                mythis.setState({error: true, loaded: true});
            }
        }).then(json => {
            console.log(mythis.state.refreshing + "++")
            if (mythis.state.refreshing) {
                mythis.setState({refreshing: false});
                totalList.splice(0, totalList.length);
            }
            let responseCode = json.error;
            if (responseCode == false) {
                pageCount = json.count;
                let list = json.results;
                let currentCount = 0;
                if (list == null) {
                    list = [];
                    currentCount = 0;
                } else {
                    currentCount = list.length;
                }
                if (currentCount < pageSize) {
                    //当当前返回的数据小于PageSize时，认为已加载完毕
                    mythis.setState({foot: 1, moreText: moreText});
                } else {//设置foot 隐藏Footer
                    mythis.setState({foot: 0});
                }
                for (var i = 0; i < list.length; i++) {
                    totalList.push(list[i]);
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(totalList),
                    loaded: true,
                });
            } else {
                mythis.setState({error: true, loaded: true});
            }
        }).catch(function (error) {
            console.log(error.message)
            mythis.setState({error: true, loaded: true});
        });
    }

    render() {
        if (pageCount == 0 && !this.state.error) {
            return (<LoadingView showLoading={true}/>);
        } else
            return (
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderFooter={this._renderFooter.bind(this)}
                    onEndReached={this._endReached.bind(this)}
                    onEndReachedThreshold={10}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                            tintColor='red'
                            title={this.state.loaded ? '刷新中....' : '下拉刷新'}
                        />
                    }
                />
            );
    }

    _renderRow(rowData) {
        const {itemClick} = this.props;
        return (
            <TouchableNativeFeedback onPress={() => {
                itemClick(rowData.url)
            }}>
                <View style={{flex: 1}}>
                    <Image source={{uri: rowData.url}}
                           style={{width: width, height: height / 2, marginTop: 5}}
                    />
                </View>
            </TouchableNativeFeedback >
        )
    }

    _onPressButton(str) {
        // ToastAndroid.show(str,ToastAndroid.LONG);
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'ImageDetail',
                component: ImageDetail,
                // params: {
                //     url: str
                // }
            })
        }
    }

    _endReached() {
        if (this.state.foot != 0) {
            return;
        }
        this.setState({
            foot: 2,
        });
        this.timer = setTimeout(
            () => {
                pageNum++;
                this._fetchListData();
            }, 500);
    }

    onRefresh() {
        this.setState({refreshing: true,});
        this._fetchListData();
    }

    _renderFooter() {
        if (this.state.foot === 1) {//加载完毕
            return (
                <View style={{height: 40, alignItems: 'center', justifyContent: 'flex-start',}}>
                    <Text style={{color: '#999999', fontSize: 12, marginTop: 10}}>
                        {this.state.moreText}
                    </Text>
                </View>);
        } else if (this.state.foot === 2) {//加载中
            return (
                <View style={{height: 40, alignItems: 'center', justifyContent: 'center',}}>
                    <Image source={LoadingMore} style={{width: 20, height: 20}}/>
                </View>);
        }
    }

}

const styles = StyleSheet.create({
    row: {
        borderColor: 'green',
        borderWidth: 5,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: 'white',
    },
    scrollerview: {
        flex: 1,
    }
});
