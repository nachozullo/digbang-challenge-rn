import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Title = ({children, style = {}}) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Montserrat-Bold',
  },
});
