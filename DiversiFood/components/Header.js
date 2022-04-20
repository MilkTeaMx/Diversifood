
import React from 'react';
import {View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <Image style={styles.menu} source={require('../images/menu.png')} />
    </View>
  );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 30,
    resizeMode: 'contain',
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});

export default Header;