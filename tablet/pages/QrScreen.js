import React from 'react'
import {View, Text} from 'react-native'

export default class QrScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is a qr code</Text>
      </View>
    )
  }
}
