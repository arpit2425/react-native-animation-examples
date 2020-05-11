import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const articles = [
  { id: 1, uri: require("./../assets/1.jpg") },
  { id: 2, uri: require("./../assets/2.jpg") },
  { id: 3, uri: require("./../assets/3.jpg") },
  { id: 4, uri: require("./../assets/4.jpg") },
];
class Inshot extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      currentItem: 0,
    };
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        this.position.setValue({ x: 0, y: gesture.dy });
      },
      onPanResponderRelease: (e, g) => {
        if (-g.dy > 50 && -g.vy > 0.7) {
          Animated.timing(this.position, {
            toValue: { x: 0, y: -Height },
            duration: 400,
          }).start(() => {
            this.setState({ currentItem: this.state.currentItem + 1 });
            this.position.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
          }).start();
        }
      },
    });
  }
  renderCards = () => {
    return articles
      .map((item, i) => {
        if (i < this.state.currentItem) {
          return null;
        }
        if (i == this.state.currentItem) {
          return (
            <Animated.View
              key={item.id}
              style={this.position.getLayout()}
              {...this.PanResponder.panHandlers}
            >
              <View
                style={{
                  flex: 1,
                  position: "absolute",
                  height: Height,
                  width: Width,
                  backgroundColor: "white",
                }}
              >
                <View style={{ flex: 2, backgroundColor: "black" }}>
                  <Image
                    source={articles[i].uri}
                    style={{ flex: 1, height: null, width: null }}
                  ></Image>
                </View>
                <View style={{ flex: 3, padding: 5 }}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed tortor nec elit consectetur elementum vel nec
                    justo. Duis porttitor nunc felis. Nullam auctor iaculis leo
                    nec ornare. Aliquam augue nunc, gravida sit amet nunc eget,
                    vehicula consequat ligula. Sed commodo, lorem vel volutpat
                    condimentum, risus dui vestibulum ipsum, non malesuada dolor
                    augue pharetra odio. Morbi eu consequat magna. Aliquam velit
                    augue, porttitor eu bibendum congue, aliquam nec nibh. Cras
                    dignissim eget mi sed faucibus. Quisque et imperdiet est.
                    Nam bibendum eros mi, nec venenatis sem convallis sit amet.
                    Nunc a sem ut turpis tincidunt sagittis non non est. Quisque
                    viverra bibendum mauris. Mauris volutpat consectetur
                    condimentum. Maecenas ultricies ex vel elementum mattis.
                    Vestibulum eget magna quis nisi placerat rutrum. Integer
                    lectus dolor, bibendum vel molestie eget, blandit a dolor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed tortor nec elit consectetur elementum vel nec
                    justo. Duis porttitor nunc felis. Nullam auctor iaculis leo
                    nec ornare. Aliquam augue nunc, gravida sit amet nunc eget,
                    vehicula consequat ligula. Sed commodo, lorem vel volutpat
                    condimentum, risus dui vestibulum ipsum, non malesuada dolor
                    augue pharetra odio. Morbi eu consequat magna. Aliquam velit
                    augue, porttitor eu bibendum congue, aliquam nec nibh. Cras
                    dignissim eget mi sed faucibus. Quisque et imperdiet est.
                    Nam bibendum eros mi, nec venenatis sem convallis sit amet.
                    Nunc a
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={item.id}>
              <View
                style={{
                  flex: 1,
                  position: "absolute",
                  height: Height,
                  width: Width,
                  backgroundColor: "white",
                }}
              >
                <View style={{ flex: 2, backgroundColor: "black" }}>
                  <Image
                    source={articles[i].uri}
                    style={{ flex: 1, height: null, width: null }}
                  ></Image>
                </View>
                <View style={{ flex: 3, padding: 5 }}>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed tortor nec elit consectetur elementum vel nec
                    justo. Duis porttitor nunc felis. Nullam auctor iaculis leo
                    nec ornare. Aliquam augue nunc, gravida sit amet nunc eget,
                    vehicula consequat ligula. Sed commodo, lorem vel volutpat
                    condimentum, risus dui vestibulum ipsum, non malesuada dolor
                    augue pharetra odio. Morbi eu consequat magna. Aliquam velit
                    augue, porttitor eu bibendum congue, aliquam nec nibh. Cras
                    dignissim eget mi sed faucibus. Quisque et imperdiet est.
                    Nam bibendum eros mi, nec venenatis sem convallis sit amet.
                    Nunc a sem ut turpis tincidunt sagittis non non est. Quisque
                    viverra bibendum mauris. Mauris volutpat consectetur
                    condimentum. Maecenas ultricies ex vel elementum mattis.
                    Vestibulum eget magna quis nisi placerat rutrum. Integer
                    lectus dolor, bibendum vel molestie eget, blandit a dolor.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam sed tortor nec elit consectetur elementum vel nec
                    justo. Duis porttitor nunc felis. Nullam auctor iaculis leo
                    nec ornare. Aliquam augue nunc, gravida sit amet nunc eget,
                    vehicula consequat ligula. Sed commodo, lorem vel volutpat
                    condimentum, risus dui vestibulum ipsum, non malesuada dolor
                    augue pharetra odio. Morbi eu consequat magna. Aliquam velit
                    augue, porttitor eu bibendum congue, aliquam nec nibh. Cras
                    dignissim eget mi sed faucibus. Quisque et imperdiet est.
                    Nam bibendum eros mi, nec venenatis sem convallis sit amet.
                    Nunc a
                  </Text>
                </View>
              </View>
            </Animated.View>
          );
        }
      })
      .reverse();
  };
  render() {
    return <View style={{ flex: 1 }}>{this.renderCards()}</View>;
  }
}

export default Inshot;
