import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

export default Ball;

const styles = StyleSheet.create({
  ball: {
    height: 1,
    width: 1,
    borderRadius: 1,
    borderWidth: 30,
    borderColor: "black"
  }
});
