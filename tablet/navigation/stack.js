import { createStackNavigator } from 'react-navigation';
import QrScreen from '../pages/QrScreen'
import MediaScreen from '../pages/MediaScreen'
import LibraryScreen from '../pages/LibraryScreen'
export default createStackNavigator({
  QrScreen: {
    screen: QrScreen,
    navigationOptions: {
      header: null
    }
  },
  MediaScreen: {
    screen: MediaScreen,
    navigationOptions: {
      header: null
    }
  },
  LibraryScreen: {
    screen: LibraryScreen,
    navigationOptions: {
      header: null
    }
  }
});
