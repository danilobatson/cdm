import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const SearchBar = ({ name, onChangeText, onSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Ionicons name='ios-search' style={styles.iconStyle} />
			<TextInput value={name}
      onChangeText={onChangeText}
      style={styles.inputStyle}
      placeholder='Search'
      onEndEditing={onSubmit}
      />
		</View>
	);
};

export default SearchBar

const styles = StyleSheet.create({
	backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 5
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex : 1,
    fontSize: 20
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal: 5
  }
});
