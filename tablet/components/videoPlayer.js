import React from 'react'
import {View} from 'react-native'
import {Video} from 'expo'
export default class VideoPlayer extends React.Component{

    componentDidMount(){
        this.videoRef.presentFullscreenPlayer()
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
