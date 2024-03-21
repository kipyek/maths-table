import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Leaning = () => {
  //React hooks
  //1. useState
  //2. useEffect

  const [name, setName] = useState("");

  useEffect(() => {
    handleChange()
  })

  //when mount
  //when dep array changes
  //without dep array

  const handleChange = () => {
    setName("John")
  }


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Leaning</Text>
      <TextInput
        placeholder='Enter your name'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text>{name}</Text>
    </View>
  )
}

export default Leaning

const styles = StyleSheet.create({})