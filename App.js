import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Twitter from './Screens/Twitter'

export default function App () {
  return <Twitter />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
