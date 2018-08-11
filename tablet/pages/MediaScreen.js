import React from 'react'
import {View, Text} from 'react-native'
import firebase from 'firebase'

export default class MediaScreen extends React.Component {
	constructor(props){
		super(props)
		this.state = {music: []}
	}

	componentWillMount(){
		firebase.database().ref(this.props.navigation.getParam('userid','x')).on('value', (snapshot) => {
			this.setState({music: snapshot.val().music})
		});
	}

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {this.state.music.map(a=><Text>{a.title}</Text>)}
      </View>
    )
  }
}
