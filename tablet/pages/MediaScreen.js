import React from 'react'
import {View, Text, FlatList, Image,ScrollView,TouchableOpacity} from 'react-native'
import Slider from "react-native-slider"
import firebase from 'firebase'
import { Asset, Audio, Font, Video } from 'expo'
import MusicPlayer from "../components/musicPlayer"
import VideoPlayer from "../components/videoPlayer"

export default class MediaScreen extends React.Component {

	soundObject = new Expo.Audio.Sound()

	async componentDidMount(){
		this.setState({music: this.props.navigation.getParam('song',{})})

    //soundObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    await this.soundObject.loadAsync({uri: this.props.navigation.getParam('song',{}).link});
	}

  render() {
    if(this.props.navigation.getParam('type','') === 'audio'){
			return(<MusicPlayer song={this.props.navigation.getParam('media',{})}/>)
		}else{
			return(<VideoPlayer video={this.props.navigation.getParam('media',{})}/>)
		}
  }
}
