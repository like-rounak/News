import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>NewsApp</Text>
      <View style={styles.navItems}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Business')}>
          <Text style={styles.navItem}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Technology')}>
          <Text style={styles.navItem}>Technology</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  navItems: {
    flexDirection: 'row',
  },
  navItem: {
    marginHorizontal: 10,
    color: 'blue',
  },
});

export default Navbar;
