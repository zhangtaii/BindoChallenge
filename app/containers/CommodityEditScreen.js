import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import commodityStore from '../stores/commodityStore'

export default class CommodityEditScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      desc:'',
      price: 0,
      barcode: '',
    };
  }


  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
});
