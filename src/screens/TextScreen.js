import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
  const lorem ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const [name, setName] = useState(' ')

  return (
    <View>
      <Text style={styles.heading}>Booking Request</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
      value= {name}
      onChangeText={(newValue) => setName(newValue)} />
      <Text>Courtine, would you please come to: {name}</Text>
      {name.length < 5 ? <Text>Please enter more than 5 characters</Text> : null}

    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
heading: {
  textAlign: 'center',
  fontSize: 40,
  marginVertical: 10,
  padding: 5,
},
input: {
  margin: 15,
  borderColor: 'dodgerblue',
  borderWidth: 1.5,
}
})
