import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// NOTE: We are using react-native-webview 10.10.2 from Nov. 6th 2020 as the base for our fork
// https://github.com/react-native-webview/react-native-webview/releases/tag/v10.10.2
// NOTE: Had to go into ../react-native-webview and change "lib" to "src" in three 
// or so places...
import { WebView } from 'react-native-webview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <>
        <WebView style={{flex: 1}} source={{uri: "https://topherpedersen.blog"}} />
      </>
    );
  }
}

export default App;
