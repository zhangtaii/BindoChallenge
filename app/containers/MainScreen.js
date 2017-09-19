import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, Button, ListView } from 'react-native'
// import Button from 'react-native-button'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ApplicationStyles from '../styles'
import CommodityCountView from '../components/CommodityCountView'
import configureRealm from '../realm/configure';
import commodityStore from '../stores/commodityStore'

@observer
export default class MainScreen extends Component {
  constructor() {
    super();
    configureRealm();
    commodityStore.initialise()
    // commodityStore.getAllCommodities()
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Bindo Inventory',
    headerLeft: <Button title="Clear" onPress={()=> commodityStore.clearAllData()} />,
    headerRight: <Button title="Scan" onPress={() => navigation.navigate('ScannerScreen')} />,

  });


  render() {
    return (
      <View style={[styles.container, ApplicationStyles.container]}>
        <ListView
          dataSource={commodityStore.dataSource}
          renderRow={row => <Text>{row.name}</Text>}
          enableEmptySections={true}
        />
        <CommodityCountView commodityStore={commodityStore}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    marginTop: 100
  },
  text: {
    textAlign: 'center',
    margin: 10,
  },
  textRed: {
    color: 'red',
  },
});
