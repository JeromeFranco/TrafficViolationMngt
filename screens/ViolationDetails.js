import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import bg from '../assets/images/BG.jpg';

export default class ViolationDetails extends React.Component {
  render() {
    const { violation, fine } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.violation}><Text style={styles.labelText}>Traffic Violation: </Text>{violation}</Text>
        <Text style={styles.fine}><Text style={styles.labelText}>Fine: </Text>{fine}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  violation: {
    fontSize: 16,
    paddingBottom: 10
  },
  fine: {
    fontSize: 16,
    paddingBottom: 10
  },
  labelText: {
    fontWeight: '500'
  }
});
