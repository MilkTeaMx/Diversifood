import React from 'react';
import { View, Text, Linking, StyleSheet, StyleProp, TextStyle, ViewStyle, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import apple from '../images/cuteFoods/apple.png'
import bananas from '../images/cuteFoods/bananas.png'
import grapes from '../images/cuteFoods/grapes.png'
import melon from '../images/cuteFoods/melon.png'
import pear from '../images/cuteFoods/pear.png'
import pineapple from '../images/cuteFoods/pineapple.png'
import strawberry from '../images/cuteFoods/strawberry.png'

const cutePictures = [apple, bananas, grapes, melon, pear, pineapple, strawberry]

const Task = (props) => {

  return (

    <View style={styles.item}>
      <Image source={cutePictures[props.i]} style={{width: 30, height:30}}/>
      <View style={styles.itemLeft}>
          <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
        </View>
      <View style={styles.circular}></View>



    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    left: 15
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,

  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    left: 240
  },
});

export default Task;