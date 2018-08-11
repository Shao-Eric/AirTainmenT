import React from 'react'
import {View, Text, FlatList, Image,ScrollView,TouchableOpacity} from 'react-native'
import firebase from 'firebase'

export default class LibraryScreen extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			Music: [],
			TvShows: [],
			Movies: []
		}

	}
	componentWillMount(){
		firebase.database().ref(this.props.navigation.getParam('userid','x')).on('value', (v) => {
			this.setState({
				Music: v.val().music,
				TvShows: v.val().tvshows,
				Movies: v.val().movies
			})
		})
	}

  render() {
    return(
      <ScrollView style={{flex: 1, padding: 10, backgroundColor: 'white'}}>

        <Text style = {{margin:12,fontSize:24}}>Music</Text>
        <FlatList
					style={{margin: 10}}

					data={this.state.Music}
					horizontal={true}
					renderItem={({item}) => <TouchableOpacity onPress = {()=>this.props.navigation.navigate("MediaScreen", {
						media: item,
						type: "audio"
					})}>
						<Image source = {{uri: item.image}} resizeMode = "contain" style = {{height:150,width:150,margin:8}}/>
					</TouchableOpacity>
					}
				/>

				<Text style = {{margin:12,fontSize:24}}>Movies</Text>
        <FlatList
					style={{margin: 10}}

					data={this.state.Movies }
					horizontal={true}
					renderItem={({item}) => <TouchableOpacity onPress = {() => this.props.navigation.navigate("MediaScreen",{
						media: item,
						type: "video"
					})}>
						<Image source = {{uri: item.image}} resizeMode = "contain" style = {{height:150,width:200,margin:8}}/>
					</TouchableOpacity>
					}
				/>

				<Text style = {{margin:12,fontSize:24}}>TV Shows</Text>
        <FlatList
					style={{margin: 10}}
					data={this.state.TvShows }
					horizontal={true}
					renderItem={({item}) => <TouchableOpacity onPress = {() => this.props.navigation.navigate("MediaScreen",{
						media: item,
						type: "video"
					})}>
						<Image source = {{uri: item.image}} resizeMode = "contain" style = {{height:150,width:200,margin:8}}/>
					</TouchableOpacity>
					}
				/>
      </ScrollView>
    )
  }
}
