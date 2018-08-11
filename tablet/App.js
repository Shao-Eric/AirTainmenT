import React from 'react';
import Stack from './navigation/stack'
import firebase from 'firebase'

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

  render() {
    return (
      <Stack/>
    );
  }
}
