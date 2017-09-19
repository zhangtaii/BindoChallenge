import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Vibration,
  View,
  Button
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';
import commodityStore from '../stores/commodityStore'

export default class ScannerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: 'Scan Barcode',
      torchMode: 'off',
      type: '',
    };
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Scanning...',
    headerLeft: <Button title="Close" onPress={()=> navigation.goBack(null)} />,
    headerRight: <Button title="Done" onPress={() => navigation.goBack(null)} />,

  });

  barcodeReceived(e) {
    if (e.data !== this.state.barcode){
      this.setState({
        barcode: e.data,
        text: `${e.data} (${e.type})`,
        type: e.type,
      });
      try{
        commodityStore.addCommodity(`${e.data} Name` ,'desc',1.0,e.data)
        alert(`${e.data} Added`)
      } catch (err) {
        alert(err.message)
      }
    }
    // if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();

    // this.setState({
    //   barcode: e.data,
    //   text: `${e.data} (${e.type})`,
    //   type: e.type,
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
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
