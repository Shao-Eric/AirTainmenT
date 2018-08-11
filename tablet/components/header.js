import React from 'react'
import {View,Text, TouchableOpacity,Image} from 'react-native'
export default class Header extends React.Component{
	render(){
		return(
			<View style = {{width:"100%",height:80,backgroundColor:"#455a64",justifyContent:"space-between", 
			paddingTop:20, flexDirection:"row",alignItems:"center"}}>
				
				<Text style = {{padding:10,color:"#ffffff",fontSize:16 }}>AirTainmenT</Text>
			
				<TouchableOpacity onPress={()=>this.props.openDrawer()}
				style = {{flexDirection: "row",alignItems:"center"}}>
					<Text style = {{padding:10,color:"#ffffff",fontSize:16 }}>Offers</Text>
					<Image 
					source = {require("../images/ic_action_menu.png")}
					style = {{width:34,height:34,marginHorizontal:8}}
					/>
				</TouchableOpacity>
			</View>

			)

	}
}