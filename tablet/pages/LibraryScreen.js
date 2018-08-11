import React from 'react'
import {View, Text, FlatList, Image,ScrollView,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import { withNavigation } from 'react-navigation';

class LibraryScreen extends React.Component {

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
       
        <Text style = {{margin:12,fontSize:24}}>Muhjhjsic</Text>
        <FlatList
  		data={this.state.music }
  		horizontal={true}
  		renderItem={({item}) => <TouchableOpacity onPress = {()=>console.log("hello")}>
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
export default withNavigation(LibraryScreen)
