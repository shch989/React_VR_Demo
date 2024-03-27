## React VR Cli 설치
```
npm install -g react-360-cli
```
## React VR 프로젝트 생성
```
react-vr init <project>
```

## 생성 오류 발생 시
```
cd <project>
npm install --force
```

# 샘플 코드 
## 클릭 이벤트
```
import React from 'react';
import { AppRegistry, asset, Pano, Text, View, VrButton } from 'react-vr';

export default class WelcomToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello",
      imgSrc: "chess-world.jpg",
      i: 0
    };
  }

  start = () => {
    const { i } = this.state;
    if (i % 2 === 0) {
      this.setState({
        value: "Welcome",
        imgSrc: "env.jpg",
        i: i + 1
      });
    } else {
      this.setState({
        value: "Hello",
        imgSrc: "chess-world.jpg",
        i: i + 1
      });
    }
  };

  render() {
    const { value, imgSrc } = this.state;
    return (
      <View>
        <Pano source={asset(imgSrc)} />
        <VrButton onClick={this.start}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }],
            }}>
            {value}
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);
```

## 컴포넌트 상속
```
import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

const WelcomeName = (props) => {
  return (
    <Text
      style={{
        backgroundColor: '#777879',
        fontSize: 0.8,
        fontWeight: '400',
        layoutOrigin: [0.5, 0.5],
        paddingLeft: 0.2,
        paddingRight: 0.2,
        textAlign: 'center',
        textAlignVertical: 'center',
        transform: [{ translate: [0, 0, -3] }],
      }}>
      Hello Mr {props.text}
    </Text>
  );
};

export default class WelcomToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('test1.jpg')} />
        <WelcomeName text="John" />
        <WelcomeName text="Balley" />
        <WelcomeName text="Doe" />
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);
```

## 정육면체 생성
```
import React from 'react';
import { AppRegistry, asset, Pano, Text, View, VrButton, Box } from 'react-vr';

export default class WelcomToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset("test1.jpg")} />
        <Box
          dimWidth={0.35}
          dimDepth={0.35}
          dimHeight={0.35}
          wireframe={true}
          //texture={asset("env.jpg")}
          style={{
            color: 'red',
            transform: [{ translate: [0, 0, -2] }, {rotateX: 45}, {rotateY: 50}, {scale: [2, 0.7, 1.5]}]
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);
```

## 구 생성
```
import React from 'react';
import { AppRegistry, asset, Pano, Text, View, VrButton, Sphere } from 'react-vr';

export default class WelcomToVR extends React.Component {
  render() {

    return (
      <View>
        <Pano source={asset("test1.jpg")} />
        <Sphere
          radius={0.1}
          widthSegments={90}
          heightSegments={90}
          texture={asset("chess-world.jpg")}
          style={{
            color: 'white',
            transform: [{ translate: [0.75, 0, -2] }, { rotateY: 0 }, { scale: [2, 2, 2] }],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);
```

## 삼각기둥 생성
```
import React from 'react';
import { AppRegistry, asset, Pano, Text, View, VrButton, Sphere, Cylinder } from 'react-vr';

export default class WelcomToVR extends React.Component {
  render() {

    return (
      <View>
        <Pano source={asset("test1.jpg")} />
        <Cylinder
          radiusTop={0.2}
          radiusBottom={0.2}
          dimHeight={0.3}
          segments={3} // 면의 갯수
          texture={asset("chess-world.jpg")}
          style={{
            color: 'white',
            transform: [{ translate: [-0.75, 0, -2] }, { rotateX: 45 }, { rotateY: 45 }],
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);
```

## 클릭 이벤트
```
import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

  constructor() {
    super();
    this.state = { buttonText: "Default Button" };
  }

  triggerClick() {
    this.setState({ buttonText: "Mouse Clicked" });
  }

  triggerLongClick() {
    this.setState({ buttonText: "Mouse Long Clicked" });
  }

  triggerEnter() {
    this.setState({ buttonText: "Mouse Entered" });
  }

  triggerExit() {
    this.setState({ buttonText: "Mouse Exited" });
  }

  render() {
    return (
      <View>
        <Pano source={asset('test1.jpg')} />
        <VrButton
          onEnter={this.triggerEnter.bind(this)}
          onExit={this.triggerExit.bind(this)}
          onClick={this.triggerClick.bind(this)}
          onLongClick={this.triggerLongClick.bind(this)}
        >
          <Text style={{
            fontSize: 0.3,
            textAlign: 'center',
            backgroundColor: 'steelblue',
            transform: [
              { translate: [-1, 0, -3] }
            ]
          }}
          >{this.state.buttonText}</Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomToVR', () => WelcomeToVR);
```

## Flex 
```
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
        <View
          style={
            {
              backgroundColor: '#fff',
              width: 2.5,
              height: 2.5,
              transform: [{ translate: [-1, 1, -3] }],

              flexDirection: 'coloumn',
              //  flexDirection: 'row',
              // coloumn

              //  justifyContent: 'flex-start',
              //  justifyContent: 'flex-end',
              //  justifyContent:'center',
              //  justifyContent: 'space-around',
              //  justifyContent:'space-between',
              //  justifyContent:'space-evenly',  doubt//
              // flex-start

              //  alignItems: 'flex-start',
              //  alignItems: 'flex-end ',
              //  alignItems: 'center',
              //  alignItems: 'stretch',
              // stretch

            }
          }
        >
          <Text style={{ color: '#000', backgroundColor: 'green', height: 0.2, }}>*1*</Text>
          <Text style={{ color: '#000', backgroundColor: 'red', height: 0.2, }}>*2*</Text>
          <Text style={{ color: '#000', backgroundColor: 'yellow', height: 0.2, }}>*3*</Text>
          <Text style={{ color: '#000', backgroundColor: 'blue', height: 0.2, }}>*4*</Text>
          <Text style={{ color: '#000', backgroundColor: 'turquoise', height: 0.2, }}>*5*</Text>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomToVR', () => WelcomToVR);
```