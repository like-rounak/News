// components/Navbar.js
import React from 'react';
import { Header } from 'react-native-elements';

const Navbar = () => (
  <Header
    centerComponent={{ text: 'NewsApp', style: { color: '#fff', fontSize: 20 } }}
    containerStyle={{
      backgroundColor: '#3D6DCC',
      justifyContent: 'space-around',
    }}
  />
);

export default Navbar;
