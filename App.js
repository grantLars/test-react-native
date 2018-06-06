import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name} !</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class First extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width:50, height: 50, backgroundColor: 'red' }} />
        <View style={{width:50, height: 50, backgroundColor: 'green' }} />
        <View style={{width:50, height: 50, backgroundColor: 'blue' }} />        
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        <Text style={styles.red}>test</Text>
        <Text style={styles.bigblue}>test2</Text>
        <Text style={[styles.bigblue, styles.red]}>test3</Text>
        <Text style={[styles.red, styles.bigblue]}>test4</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Rexxar'/>
        <Blink text="BLINKING" />
      </View>
    );
  }
}

class FlexDirection extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width:50, height: 50, backgroundColor: 'red' }} />
        <View style={{width:50, height: 50, backgroundColor: 'green' }} />
        <View style={{width:50, height: 50, backgroundColor: 'blue' }} />
      </View>
    );
  }
}

class JustifyContent extends Component {
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}

class AlignItems extends Component {
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',        
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      // <FlexDirection />
      // <JustifyContent />
      <AlignItems />
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});
