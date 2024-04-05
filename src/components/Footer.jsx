import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Incredible ToDo List App. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});

export default Footer;
