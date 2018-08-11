import React from 'react';
import { Text, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { List, ListItem, SearchBar } from 'react-native-elements';
import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';

class MusicScreen extends React.Component {
  state = {
    data: [],
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
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
        <View
          style={{
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderColor: '#ddd',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            ADD
          </Button>
        </View>

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
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Button
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              Close Modal
            </Button>
          </View>
        </Modal>
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
export default MusicScreen;
