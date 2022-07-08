import Slider from '@react-native-community/slider';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomInput} from '../custom-input';
import {Label} from '../typography';

export const SliderSelector = ({
  label,
  unit = ' ',
  minValue,
  maxValue,
  value,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <CustomInput label={label} value={`${value}`} onChangeText={onChange} />
      <View style={styles.slider}>
        <Slider
          maximumValue={maxValue}
          minimumValue={minValue}
          value={Number(value)}
          onValueChange={onChange}
          step={1}
          thumbTintColor="#FFF"
          maximumTrackTintColor="#FFF"
          minimumTrackTintColor="#FFF"
        />
        <View style={styles.labels}>
          <Label>
            {unit}
            {minValue}
          </Label>
          <Label>
            {unit}
            {maxValue}
          </Label>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  slider: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  labels: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
