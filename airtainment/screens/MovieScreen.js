import React from 'react';
import { Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

class MovieScreen extends React.Component {
  state = {
    data: []
  };

  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: () => <Entypo name="tv" size={30} color="#1b3039" />
  });

  componentDidMount() {
    let ref = firebase.database().ref('userid/music');
    ref.on('value', snapshot => {
      let result = snapshot.val();
      console.log(result);
      this.setState({ data: result });
    });
  }
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Music" />
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.title}`}
              subtitle={item.title}
              avatar={{ uri: item.image }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.link}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1
  }
};
export default MovieScreen;
