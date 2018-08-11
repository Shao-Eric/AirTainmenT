import React from 'react'
import {View, Text} from 'react-native'

export default class MediaScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is a media</Text>
      </View>
    )
  }
}
