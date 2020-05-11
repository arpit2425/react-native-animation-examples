import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const articles = [
  { id: 1, uri: require("./../assets/1.jpg") },
  { id: 2, uri: require("./../assets/2.jpg") },
  { id: 3, uri: require("./../assets/3.jpg") },
  { id: 4, uri: require("./../assets/4.jpg") },
];
class Inshot extends Component {
  renderCards = () => {
    return articles.map((item, i) => {
      return (
        <View
          key={item.id}
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
              fvnjnvfnfjv vbbfbfbfdbvf h
              fvggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd
            </Text>
          </View>
        </View>
      );
    });
  };
  render() {
    return <View style={{ flex: 1 }}>{this.renderCards()}</View>;
  }
}

export default Inshot;
