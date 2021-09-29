import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Education = () => {
	const lorem =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

	return (
		<View>
			<Text style={styles.heading}>Education</Text>
			<Text style={styles.subheader}>High School</Text>
			<Text style={styles.paragraph}>{lorem}</Text>

			<Text style={styles.subheader}>Undergrad</Text>
			<Text style={styles.paragraph}>{lorem}</Text>
			<Text style={styles.subheader}>Graduate</Text>
			<Text style={styles.paragraph}>{lorem}</Text>
		</View>
	);
};

export default Education;

const styles = StyleSheet.create({
	heading: {
		textAlign: 'center',
		fontSize: 40,
		marginVertical: 10,
		padding: 5,
	},
	subheader: {
		fontSize: 25,
		textAlign: 'center',
		color: 'steelblue',
		fontWeight: '700',
		marginVertical: 10,
	},
	paragraph: {
		padding: 10,
	},
});
