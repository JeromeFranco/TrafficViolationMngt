import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator";
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import ViolationsAndFines from './screens/ViolationsAndFines';
import ViolationDetails from './screens/ViolationDetails';
import TrafficLaw from './screens/TrafficLaw';
import TrafficSigns from './screens/TrafficSigns';
import Splash from './screens/Splash';
import styles, { setIcon } from './styles';

const ViolationsScreen = StackNavigator({
  Violations: {
    screen: ViolationsAndFines,
    navigationOptions: {
      title: 'Violations and Fines',
      tabBarIcon: setIcon('stop',  Octicons)
    }
  },
  ViolationDetails: {
    screen: ViolationDetails,
    navigationOptions: {
      title: 'Violation Details',
      tabBarVisible: false
    }
  }
});

const TrafficSignsScreen = StackNavigator({
  TrafficSigns: {
    screen: TrafficSigns,
    navigationOptions: {
      title: 'Traffic Signs',
      tabBarIcon: setIcon('sign-caution', MaterialCommunityIcons),
    }
  }
});

const TrafficLawScreen = StackNavigator({
  TrafficLaw: {
    screen: TrafficLaw,
    navigationOptions: {
      title: 'Traffic Law',
      tabBarIcon: setIcon('sign-caution', MaterialCommunityIcons),
    }
  }
});

const Tab = TabNavigator({
  ViolationsScreen,
  TrafficSignsScreen,
  TrafficLawScreen,
}, {
  initialRouteName: 'ViolationsScreen',
  lazy: false,
  tabBarOptions: {
    activeTintColor: '#1976D2',
    inactiveTintColor: 'gray',
    style: styles.tabBar,
    labelStyle: styles.tabLabel,
    pressColor: '#1976D2'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom'
});

export default StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Tab: {
    screen: Tab,
    navigationOptions: {
      headerStyle: styles.header,
    }
  }
},
{
  initialRouteName: 'Splash',
  headerMode: 'none'
});

