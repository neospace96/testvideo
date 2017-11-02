import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation'
export default class Player extends Component{
  componentWillMount(){
    Orientation.lockToPortrait()
  }
  render(){
    return(
      <View style={{flex:1}}>
        <VideoPlayer
          source={require('./1.mp4')}
        />
      </View>
    )
  }
}
