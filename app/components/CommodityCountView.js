import { observer } from 'mobx-react/native'
import React, { Component, PropTypes } from 'react'
import {View, Text} from 'react-native'


@observer
class CommodityCountView extends Component {
  render() {
    return <View style={{height:30}}>
      <Text>Commodities Count：{this.props.commodityStore.count}</Text>
    </View>
  }
}
export default CommodityCountView
