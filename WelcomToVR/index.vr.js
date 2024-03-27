import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <Text style={
          {
            fontSize: 20,
            color: 'white',
            backgroundColor: 'red',
            transform: [{ translate: [-70, 20, -200] }],
          }
        }>
          This is a text
        </Text>
        <Text style={
          {
            fontSize: 20,
            color: 'white',
            backgroundColor: 'red',
            transform: [{ translate: [-70, 20, -200] }],
          }
        }>
          This is another text
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);