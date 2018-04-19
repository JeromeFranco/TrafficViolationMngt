import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import bg from '../assets/images/BG.jpg';

export default class Splash extends React.Component {
  componentDidMount() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Tab' })],
    });
    
    setTimeout(() => {
    this.props.navigation.dispatch(resetAction);
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={bg} style={styles.backgroundImage} resizeMode="stretch" />
        <View style={styles.appName}>
          <Text style={styles.SplashText}>Traffic Violation</Text>
          <Text style={styles.SplashText}>Management System</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#FFF' 
  },
  SplashText: {
    fontSize: 32,
    textAlign: 'center'
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0, 
  }
});
