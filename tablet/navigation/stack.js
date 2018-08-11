import { createStackNavigator } from 'react-navigation';
import QrScreen from '../pages/QrScreen'
import MediaScreen from '../pages/MediaScreen'
import LibraryScreen from '../pages/QrScreen'
export default createStackNavigator({
  QrScreen: {
    screen: QrScreen
  },
  MediaScreen: {
    screen: MediaScreen
  },
  LibraryScreen: {
    screen: LibraryScreen
  }
});
