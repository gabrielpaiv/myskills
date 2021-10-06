import React from 'react'

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.buttonText}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  }
})
