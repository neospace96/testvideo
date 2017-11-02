
import React from 'react';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import Player from './videoplayer.js'
import Detail from './detail.js'
export const HomeStack = StackNavigator({
  Details:{
    screen:Detail
  },
  Player:{
    screen: Player
  },

})
export const Tabbar = TabNavigator({
  Home: {
    screen: HomeStack,
  }
})
