import React from 'react'
import {View, Text, FlatList, Image,ScrollView,TouchableOpacity} from 'react-native'
import Slider from "react-native-slider"
import firebase from 'firebase'
import { Asset, Audio, Font, Video } from 'expo'

export default class MusicPlayer extends React.Component {

	constructor(props){
		super(props)
		this.state={
			music: {},
			value: 0,
			playing: false
		}
	}

	soundObject = new Expo.Audio.Sound()

	async componentDidMount(){
		this.setState({music: this.props.song})

    await this.soundObject.loadAsync({uri: this.props.song.link});
    firebase.database().ref("tablet/currentlyPlaying").set({playing: false, image: this.props.song.image, title: this.props.song.title})

    firebase.database().ref("tablet/currentlyPlaying/isPlaying").on('value', (v)=>{
      if(!v.val()){
        this.soundObject.pauseAsync()
      }else{
        this.soundObject.playAsync()
      }
      this.setState({playing: v.val()})
    })
	}

  componentWillUnmount(){
    this.soundObject.stopAsync()
  }

  render() {
    return(
			<View>
				{/* <Text>{this.state.music.title}</Text> */}
				<View style = {{flexDirection: "row"}}>
					<Image source = {{uri: this.state.music.image}} style = {{width:400,height:400, margin: 18}}/>
					<View style={{margin: 18}}>
						<Text style={{fontSize: 30}}>Name: {this.state.music.title}</Text>
						<Text style={{fontSize: 25}}>Artist: {this.state.music.artist}</Text>
					</View>
				</View>
				<View style={{flexDirection: "row"}}>
					<TouchableOpacity onPress={()=>{
						if(this.state.playing){
							this.soundObject.pauseAsync()
						}else{
							this.soundObject.playAsync()
						}
            firebase.database().ref("tablet/currentlyPlaying/isPlaying").set(!this.state.playing)

						this.setState({playing: !this.state.playing})
					} }>
						{this.state.playing===false?
							<Image source={require("../images/ic_action_play_arrow.png")} style = {{width:50,height:50}}/>:
							<Image source={require("../images/ic_action_pause.png")} style={{width: 50, height: 50}}/>}
					</TouchableOpacity>
					<Slider
						value={this.state.value}
						onValueChange={value => this.setState({ value })}
					/>
				</View>

			</View>
    )
  }
}
