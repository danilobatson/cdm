import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ImageDetail from '../Components/ImageDetail'

const About = () => {
    const lorem =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const placesLived = [
		{ place: 'The desert', timeZone: 'PST' },
		{ place: 'Texas', timeZone: 'CT' },
		{ place: 'Malibu', timeZone: 'PST' },
		{ place: 'Washington D.C.', timeZone: 'EST' },
		{ place: 'Anaheim', timeZone: 'PST' },
		{ place: 'Tustin', timeZone: 'PST' },
	];
  return (
    <View>
      <Text style={styles.header}>Places Lived</Text>
      <FlatList
        keyExtractor={(item) => item.place}
        // SHOWS LIST HORIZONTALLY INSTEAD OF VERTICALLY
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={placesLived}
        renderItem={({item}) => {
          return <Text style={styles.placesStyle}>*{item.place} - Time zone: {item.timeZone}</Text>
        }}
      />
      <Text style={styles.subheader}>Bio</Text>
      <Text style={styles.paragraph}>{lorem}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  header: {
    fontSize: 35
  },
  placesStyle: {
    fontSize: 20,
    marginVertical: 15,
    marginLeft: 10
  },
  subheader:{
    fontSize: 25,
    textAlign: 'center',
    color: 'steelblue',
    fontWeight: '700',
    marginVertical: 10
  },
  paragraph:{
    padding: 5,
  }
})
