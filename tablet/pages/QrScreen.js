import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Qrcode from 'react-native-qrcode'
import firebase from 'firebase'

export default class QrScreen extends React.Component {
	openMediaLibrary(userid) {
		this.props.navigation.navigate('LibraryScreen',{
			userid: userid
		})
	}

	componentDidMount(){
		firebase.database().ref("tablet/userid").on("value", (a)=>{
			if (a.val() === "userid"){
				this.openMediaLibrary("userid")
			}
		})
	}

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      	<Text style = {{
      		textAlign: "center",
      		fontSize: 32,
      	}}>Scan with the Airtainment app to begin your personalized experience </Text>
				<View style={{margin: 80}}>
					<Qrcode
						value = {"tablet"}
						size = {300}
					/>
				</View>
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
