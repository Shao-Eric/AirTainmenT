import React from 'react'
import {View} from 'react-native'
import {Video} from 'expo'
import firebase from 'firebase'
export default class VideoPlayer extends React.Component{

    componentDidMount(){
        this.videoRef.presentFullscreenPlayer()
        firebase.database().ref("tablet/currentlyPlaying").set({isPlaying: true, type: 'video', image: this.props.video.image, title: this.props.video.title})

        firebase.database().ref("tablet/currentlyPlaying/isPlaying").on('value', (v)=>{
          this.setState({playing: v.val()})
        })
    }

    render(){
      return(
        <Video
          ref = {(component)=>this.videoRef=component}
          style = {{flex:1}}
          useNativeControls
          resizeMode="cover"
          source={{ uri: this.props.video.link }}
          usePoster
          shouldPlay
        />
      )
    }
}
