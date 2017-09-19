import { observer } from 'mobx-react/native'
import React, { Component, PropTypes } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'


@observer
export default class CommodityItemView extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return <TouchableOpacity style={{height:50,flexDirection:'row'}}
                             onPress={()=>this.props.rowData.toggleFinish()}>
      <Text style={this.props.rowData.finished && {textDecorationLine:'line-through'}}> {this.props.rowData.name}</Text>
    </TouchableOpacity>
  }
}
