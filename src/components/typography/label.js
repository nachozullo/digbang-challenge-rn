import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Label = ({children, style = {}}) => {
  return <Text style={[styles.label, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Montserrat-Regular',
  },
});
