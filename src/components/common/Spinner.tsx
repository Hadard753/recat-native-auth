import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = (props: { size?: 'small' | 'large' }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
