import { observer } from 'mobx-react/native'
import React, { Component, PropTypes } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


@observer
export default class CommodityItemView extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return <TouchableOpacity
      style={styles.liContainer}
      onPress={()=>this.props.rowData.toggleFinish()}>

      <View style={styles.li}>
        <Text style={styles.barcodeTextStyle}> {this.props.rowData.barcode}</Text>
        <Text style={styles.nameTextStyle}> {this.props.rowData.name}</Text>

      </View>
    </TouchableOpacity>
  }
}

var styles = StyleSheet.create({
  li: {
    borderBottomColor: '#c8c7cc',
    borderBottomWidth: 0.5,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  liContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 15,
  },
  barcodeTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  nameTextStyle: {
    fontSize: 15,
  },
})
