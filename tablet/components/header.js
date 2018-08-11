import React from 'react'
import {View,Text, TouchableOpacity,Image} from 'react-native'
export default class Header extends React.Component{
	render(){
		return(
			<View style = {{width:"100%",height:100,backgroundColor:"#455a64",justifyContent:"space-between",
			paddingTop:20, flexDirection:"row",alignItems:"center"}}>
				
				<TouchableOpacity onPress={()=>this.props.goBack()}
					style = {{flexDirection: "row",alignItems:"center"}}>
					<View style={{padding: 22}}>
						{this.props.backVisible &&	<Image
							source = {require("../images/ic_action_arrow_back.png")}
							style = {{width:34,height:34}}
												 />}
					</View>
					<Text style = {{color:"#ffffff",fontSize:22, margin: 4 }}>AirTainmenT</Text>

				</TouchableOpacity>

				<TouchableOpacity onPress={()=>this.props.openDrawer()}
					style = {{flexDirection: "row",alignItems:"center"}}>
					<Text style = {{color:"#ffffff",fontSize:22, margin: 4 }}>Offers</Text>
					<View style={{padding: 22}}>
						<Image
							source = {require("../images/ic_action_menu.png")}
							style = {{width:34,height:34}}
						/>
					</View>
				</TouchableOpacity>
			</View>

			)

	}
}
