import React, { Component } from "react";
import { Dimensions, AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet, helloAction } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(number) {
    const count = parseInt(number);
    this.props.counterSet(count);
  }

  

  render() {
    const { helloText, prssedButton, helloActionButton } = this.props.hello;
    return (
      <View style={styles.container}>
          <Text  style={{width: Dimensions.get('window').width, height: 110, textAlign: 'center',  fontWeight: 'bold', fontSize: 40}}>
            Counter Application Using redux
          </Text>
          <TextInput          
            style={{width: 140, height: 40, marginBottom: 50}}
            onChangeText={this.onChangeText}
            value={this.props.count.toString()}
           />
        <View style={styles.countViewStyle}> 
          <Button onPress={ this.props.counterIncrement } title="+" />
          <Text style={styles.welcome}>
            {this.props.count}
          </Text>
          <Button onPress={ this.props.counterDecrement } title="-" />
        </View>
        <Button onPress={ this.props.counterClear } title="Clear"/>
        <Text>
              { helloText }
        </Text>
        <Text>
            Did You Pressed Button ? { prssedButton.toString() }
        </Text>
        <Button onPress={this.props.helloAction} title={ helloActionButton.toString() } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    padding: 30
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});

function mapStateToProps(state){
  return {
    count: state.counter,
    hello: state.hello
  }
}

export default connect(mapStateToProps, { counterIncrement, counterDecrement, counterClear, counterSet, helloAction })(App);