import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Header from '../common/Header'
import { BarCodeScanner, Permissions } from 'expo';
import firebase from 'firebase';

class WelcomeScreen extends React.Component {

  state = {
    hasCameraPermission: null,
    sessionStarted: false,
    bar: 'Scan a BARcode to begin'
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <ImageBackground 
            source={require('../assets/CityDimmed.jpg')}
            style={{ flex: 1, alignItems:'center'}}>
            <View style = {{width: '100%'}}>
             <Header headerText='Hackathon' bar={this.state.bar}/>
            </View>
            <View style = {{width: 300, height: 300, margin: 60}}>
              <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                style={StyleSheet.absoluteFill}
              />
            </View>
            {/* <View> */}
              <Text style={{color:'white',textAlign: 'center', fontWeight: '300',
                fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
                fontSize: 30}}> Scan QR Code </Text>
              <Text style={{color:'white', textAlign: 'center', fontWeight: '100', fontSize: 30}}> To connect to your screen </Text>
              <TouchableOpacity
                style = {styles.Button}
                onPress = {() => console.log('Hello world')}
              >
                <Text style = {{color: 'white', alignSelf:'center', textAlign: 'center'}}>Manage Library</Text>
              </TouchableOpacity>
            {/* </View> */}
          </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  Button: {
    margin: 50,
    width: 150,
    height: 50,
    borderRadius: 40,
    display:'flex',
    justifyContent:'center',
    backgroundColor: '#085ff7'
  }
})
export default WelcomeScreen;



