import React from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
class TVScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: () => <Entypo name="folder-video" size={30} color="#1b3039" />
  });
  render() {
    return (
      <View>
        <Text>TVScreen</Text>
        <Text>TVScreen</Text>
        <Text>TVScreen</Text>
        <Text>TVScreen</Text>
        <Text>TVScreen</Text>
      </View>
    );
  }
}
export default TVScreen;
