import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Qrcode from 'react-native-qrcode'

export default class QrScreen extends React.Component {
	openMediaLibrary(userid) {
		this.props.navigation.navigate('MediaScreen',{
			userid: userid
		})
	}

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      	<Text style = {{
      		textAlign: "center",
      		fontSize: 24,
      		
      	}}>Scan with AirghgTainmenT app to begin your personalized experience </Text>
        <Qrcode style = {{margin: 20}}
        	value = {"ilovecse"}
        	size = {300}
        />
        <TouchableHighlight onPress={()=>this.openMediaLibrary("userid")}>
	        <Text style = {{
	        	textAlign: "center",
	        	fontSize: 20,
	        	textDecorationLine: "underline"
	        }}>Skip</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
