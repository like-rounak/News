// components/Footer.js
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#3D6DCC' }}>
    <Icon name="home" color="#fff" />
    <Icon name="search" color="#fff" />
    <Icon name="settings" color="#fff" />
  </View>
);

export default Footer;
