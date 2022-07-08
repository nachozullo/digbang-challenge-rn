import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {CreditSimulator} from './components/credit-simulator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#003b67" />
      <CreditSimulator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#084f85',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
