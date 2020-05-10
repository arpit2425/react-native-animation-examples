import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Animated
} from 'react-native'
const HEADER_MAX_HEIGHT = 130
const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT = 80
const PROFILE_IMAGE_MIN_HEIGHT = 40

class Twitter extends Component {
  state = { scrollY: new Animated.Value(0) }
  render () {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const porfileHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })
    const headerTitlebottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: 'clamp'
    })
    const marginss = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT
      ],
      extrapolate: 'clamp'
    })
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            alignItems: 'center',

            height: headerHeight,
            backgroundColor: 'lightskyblue',
            elevation: headerZindex
          }}
        >
          <Animated.View
            style={{
              position: 'absolute',
              bottom: headerTitlebottom
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
              Arpit Trivedi
            </Text>
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEnabled={true}
          scrollEventThrottle={20}
          style={{ flex: 1 }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <Animated.View
            style={{
              width: porfileHeight,
              height: porfileHeight,
              borderRadius: HEADER_MAX_HEIGHT / 2,
              borderColor: 'white',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: marginss,

              marginLeft: 10
            }}
          >
            <Image
              style={{ height: null, width: null, flex: 1 }}
              source={require('../assets/myphoto.png')}
            ></Image>
          </Animated.View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 26,
                paddingLeft: 10
              }}
            >
              Arpit Trivedi
            </Text>
          </View>
          <Text style={{ height: 1000 }}></Text>
        </ScrollView>
      </View>
    )
  }
}

export default Twitter
