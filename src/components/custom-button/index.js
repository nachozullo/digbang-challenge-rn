import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const PrimaryButton = ({children}) => {
  return (
    <TouchableOpacity style={[styles.button, styles.primary]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({children}) => {
  return (
    <TouchableOpacity style={[styles.button, styles.secondary]}>
      <Text style={[styles.buttonText, styles.buttonSecondaryText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  primary: {
    backgroundColor: '#06c991',
    flex: 1,
  },
  secondary: {
    backgroundColor: '#0e5c96',
    width: 115,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  buttonSecondaryText: {
    fontSize: 10,
  },
});
