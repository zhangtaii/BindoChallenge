import { TabNavigator, StackNavigator } from 'react-navigation'

import MainScreen from '../containers/MainScreen'
import ScannerScreen from '../containers/ScannerScreen'

const WelcomeTab = StackNavigator({
  MainScreen: { screen: MainScreen },
  ScannerScreen: { screen: ScannerScreen },
});


export default WelcomeTab
