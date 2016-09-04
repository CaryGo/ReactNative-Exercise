/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var DATA={
    "id":"1",
    "name":"欢迎来到我的世界",
    "text":"黎明快要到来，世界将被拯救，冲锋吧，勇士！",
    "img":"http://image.tianjimedia.com/uploadImages/2015/182/51/E3I1U9WNCC1M_games-wallpapers-minecraft-wallpaper-wallpaper-36344.jpg",
    "add_time":"2016-09-03",
    "url":"https://github.com/CaryGo"
};
class exercise extends Component {
  render() {
    return (
      <View style={styles.container}>
            <Image source={{uri:DATA.img}} style={styles.images}/>
        <Text style={styles.name}>
            {DATA.name}
        </Text>
        <Text style={styles.text}>
            {DATA.text}
        </Text>
        <Text style={styles.time}>
            {DATA.add_time}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 15,
    textAlign: 'left',
     color:'#2adfca',
    marginLeft: 10,
  },
  text: {
    fontSize: 13,
    textAlign: 'left',
    color:'#56adfc',
    marginLeft: 10,
  },
  time: {
     fontSize: 13,
     textAlign: 'left',
    color:'#286754',
     marginLeft: 10,
  },
     images: {
                                 height:200,
                                 margin:10,
     },
});

AppRegistry.registerComponent('exercise', () => exercise);
