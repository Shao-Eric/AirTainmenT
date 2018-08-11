import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
    const config = {
      apiKey: "AIzaSyCfgGAENd9pnKaij4hDPKp1ttgswzK4Y1g",
      authDomain: "airtainment-dba73.firebaseapp.com",
      databaseURL: "https://airtainment-dba73.firebaseio.com",
      projectId: "airtainment-dba73",
      storageBucket: "airtainment-dba73.appspot.com",
      messagingSenderId: "471409054224"
    };
    firebase.initializeApp(config);
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  getBarCode = () => {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
      );
    }
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
        <View style={{ flex: 1, alignItems:'center'}}>
          <Header  bar={this.state.bar}/>
          <View style = {{width:400, height:400}}>
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={StyleSheet.absoluteFill}
            />
          </View>
          <Text> Scan QR Code </Text>
          <Text> To connect to your screen </Text>
          <Button title="Manage Library"/>
        </View>
      );
    }
  }
}
export default WelcomeScreen;



