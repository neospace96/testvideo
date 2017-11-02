import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const {width,height} = Dimensions.get('window');


export default class Detail extends Component{
  render(){
    return(
      <View>
      <Image
        style={styles.ava}
        source={require('./hqdefault.jpg')}
      >
        <View style={styles.btn}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Player')}}>
            <Image
              style={styles.iconplay}
              source={require('./1.png')}
            />
          </TouchableOpacity>
        </View>
      </Image>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  ava:{
    width:width,
    height:200
  },
  btn:{
    justifyContent:"center",
    flex:1,
    alignItems: "center"
  },
  iconplay:{
    width:50,
    height:50
  }
})
