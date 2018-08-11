import React from 'react';
import Stack from './navigation/stack'
import firebase from 'firebase'
import {View,Text,Image,ScrollView, TouchableOpacity} from 'react-native'
import Header from './components/header'
import Drawer from 'react-native-drawer-menu';
import {Easing} from 'react-native';
import { NavigationActions } from 'react-navigation';


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
    console.disableYellowBox = true;
  }

  goBack=()=>{
    this.navigator.dispatch(NavigationActions.back())
  }

  render() {
    let drawerContent = (
      <ScrollView style={{backgroundColor: 'white', flex:1}}>
        <View style={{flex:1, alignItems: 'center'}}>
          <TouchableOpacity>
            <Image source = {require("./images/snacks.jpg")} style = {{width:380, height:180, margin: 10 }} resizeMode = "cover"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source = {require("./images/soda.jpg")} style = {{width:380, height:180, margin: 10 }} resizeMode = "cover"/>
          </TouchableOpacity>
          <TouchableOpacity>

            <Image source = {require("./images/alcohol.jpg")} style = {{width:380, height:180, margin: 10 }} resizeMode = "cover"/>
          </TouchableOpacity>
          <TouchableOpacity>

            <Image source = {require("./images/fortnite.jpg")} style = {{width:380, height:180, margin: 10 }} resizeMode = "cover"/>
          </TouchableOpacity>
          <TouchableOpacity>

            <Image source = {require("./images/tinder.jpg")} style = {{width:380, height:180, margin: 10 }} resizeMode = "cover"/>
          </TouchableOpacity>
          <TouchableOpacity>

          <Image source = {require("./images/youtube_red.jpg")} style = {{width:380, height:180, margin: 10 }} resizeMode = "cover"/>
        </TouchableOpacity>

        </View>

      </ScrollView>
    )

    return (
    <View style={{flex: 1}}>
      <Header toggleDrawer={()=> this.drawer.openDrawer()} goBack={()=>this.goBack()} backVisible/>

      <Drawer
        ref={compenent => this.drawer = compenent}
        drawerPosition={Drawer.positions.Right}
        drawerWidth={400}
        drawerContent={drawerContent}
        type={Drawer.types.Overlay}
      >
        <Stack  ref={navigatorRef => this.navigator = navigatorRef}/>
      </Drawer>
    </View>
    );
  }
}
