import React from 'react';
import { Text, View } from 'react-native';

class MovieScreen extends React.Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false
  };

  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>MovieScreen</Text>
        <Text>MovieScreen</Text>
        <Text>MovieScreen</Text>
        <Text>MovieScreen</Text>
        <Text>MovieScreen</Text>
      </View>
    );
  }
}
export default MovieScreen;
