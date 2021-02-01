# HackableReactNativeWebView

This repo demonstrates how to incorporate a fork of react-native-webview into an existing react-native application for contribution/development purposes. For example, if you would like to contribute to react-native-webview you may wish to test your fork in an existing application to see if your changes suit your needs and solve the problem you are seeking to solve. This example project was created by: 

1) following along with the official react-native-webview contribution docs

2) Downloading react-native-webview as a .zip, decompressing it, then moving it to the same parent directory as my react-native app

3) In order to get this to work, I needed to change "lib" to "src" in a few places: 

    - react-native-webview/index.js
    - react-native-webview/index.d.ts 
    - Also see the following issue: https://github.com/react-native-webview/react-native-webview/issues/1163