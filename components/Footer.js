import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: '#3D6DCC' }}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BusinessScreen')}>
        <Icon name="attach-money" color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TechnologyScreen')}>
        <Icon name="computer" color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;