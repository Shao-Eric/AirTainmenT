import React from 'react';
import Stack from './navigation/stack'
import firebase from 'firebase'
import {View,Text} from 'react-native'
import Header from './components/header'
import Drawer from 'react-native-drawer-menu';
import {Easing} from 'react-native'; 

export default class App extends React.Component {
  componentWillMount() {
    let config = {
      apiKey: "AIzaSyCfgGAENd9pnKaij4hDPKp1ttgswzK4Y1g",
      authDomain: "airtainment-dba73.firebaseapp.com",
      databaseURL: "https://airtainment-dba73.firebaseio.com",
      projectId: "airtainment-dba73",
      storageBucket: "airtainment-dba73.appspot.com",
      messagingSenderId: "471409054224"
    };

    firebase.initializeApp(config);
  }

  toggleDrawer=()=>{
    //this.props.drawer.closeDrawer()

  }

  render() {
    let drawerContent = (
      <View style={{backgroundColor: 'white', flex:1}}>
      <Text style = {{marginTop:15,fontSize:20,padding:8}}>Offers</Text>

  </View>);

    return (
      <Drawer
      ref={compenent => this.drawer = compenent}
      drawerPosition={Drawer.positions.Right} 
      drawerWidth={300}
      drawerContent={drawerContent}
      type={Drawer.types.Overlay}
      >
      <Header openDrawer={()=> this.drawer.openDrawer()}/>
      <Stack/>
      </Drawer>
    );
  }
}
