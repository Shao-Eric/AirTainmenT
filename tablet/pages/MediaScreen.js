import React from 'react'
import {View, Text, FlatList, Image,ScrollView,TouchableOpacity} from 'react-native'
import firebase from 'firebase'

export default class MediaScreen extends React.Component {
	constructor(props){
		super(props)
		this.state = {music: []}
	}

	componentWillMount(){
		firebase.database().ref(this.props.navigation.getParam('userid','x')).on('value', (snapshot) => {
			this.setState({
				music: snapshot.val().music,
				TvShows: snapshot.val().tvshows,
				Movies: snapshot.val().movies
			})
		})
	}

  render() {
    return(
      <ScrollView style={{flex: 1}}>
        {/*this.state.music.map(a=><Text>{a.title}</Text>)*/}
        <Text style = {{margin:12,fontSize:24}}>Music</Text>
        <FlatList
  		data={this.state.music }
  		horizontal={true}
  		renderItem={({item}) => <TouchableOpacity>
  		<Image source = {{uri: item.image}} resizeMode = "contain" style = {{height:150,width:150,margin:8}}/>
  		</TouchableOpacity>
  		}
		/>

		<Text style = {{margin:12,fontSize:24}}>Movies</Text>
        <FlatList
		data={this.state.Movies }  		
		horizontal={true}
  		renderItem={({item}) => <TouchableOpacity>
  		<Image source = {{uri: item.image}} resizeMode = "contain" style = {{height:200,width:150,margin:8}}/>
  		</TouchableOpacity>
  		}
		/>

		<Text style = {{margin:12,fontSize:24}}>TV Shows</Text>
        <FlatList
		data={this.state.TvShows }  		
		horizontal={true}
  		renderItem={({item}) => <TouchableOpacity>
  		<Image source = {{uri: item.image}} resizeMode = "contain" style = {{height:200,width:150,margin:8}}/>
  		</TouchableOpacity>
  		}
		/>
      </ScrollView>
    )
  }
}
