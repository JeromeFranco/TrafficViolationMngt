import React from 'react';
import { YellowBox, StyleSheet } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export const setIcon = (iconName, IconComponent) => {
  return ({ tintColor }) => {
    return <IconComponent name={iconName} size={24} color={tintColor} />;
  };
}

export default StyleSheet.create({
  header: {
    height: 54,
  },
  tabBar: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    height: 55,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 0,
  }
});