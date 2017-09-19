import { TabNavigator, StackNavigator } from 'react-navigation'

import MainScreen from '../containers/MainScreen'
import ScannerScreen from '../containers/ScannerScreen'
import CommodityEditScreen from '../containers/CommodityEditScreen'

const WelcomeTab = StackNavigator({
  MainScreen: { screen: MainScreen },
  ScannerScreen: { screen: ScannerScreen },
  CommodityEditScreen: { screen: CommodityEditScreen },
});


export default WelcomeTab
