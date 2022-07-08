import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {PrimaryButton, SecondaryButton} from '../custom-button';
import {SliderSelector} from '../slider-selector';
import {H2, H4, Title} from '../typography';

export const CreditSimulator = () => {
  const [totalAmount, setTotalAmount] = useState(19500);
  const [term, setTerm] = useState(16);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Simulá tu crédito</Title>
      <SliderSelector
        label="MONTO TOTAL"
        minValue={5000}
        maxValue={50000}
        value={totalAmount}
        unit="$"
        onChange={setTotalAmount}
      />
      <SliderSelector
        label="PLAZO"
        minValue={3}
        maxValue={24}
        value={term}
        onChange={setTerm}
      />
      <View style={styles.totalContainer}>
        <H4>CUOTA FIJA POR MES</H4>
        <H2>
          {totalAmount && term
            ? `$${Number(totalAmount / term).toFixed(2)}`
            : '-'}
        </H2>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton>OBTENÉ CRÉDITO</PrimaryButton>
        <View style={styles.buttonSpacer} />
        <SecondaryButton>VER DETALLE DE CUOTAS</SecondaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003b67',
    paddingHorizontal: 15,
    paddingVertical: 30,
    textAlign: 'center',
    minWidth: 300,
    width: '85%',
  },
  title: {
    paddingBottom: 30,
  },
  totalContainer: {
    backgroundColor: '#012f53',
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonSpacer: {
    width: 10,
  },
});
