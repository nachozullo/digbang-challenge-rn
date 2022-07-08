import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Label} from '../typography';

export const CustomInput = ({
  label,
  keyboardType = 'numeric',
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Label>{label}</Label>
      <TextInput
        style={styles.input}
        value={value}
        defaultValue={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#ffffff75',
    borderWidth: 1,
    minWidth: 90,
    color: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: 'center',
  },
});
