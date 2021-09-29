import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

const Kids = () => {
	const [random, setRandom] = useState('');

	const randomNumber = () => {
		let num;
		num = (Math.round(Math.random() * 20) + 1);
		setRandom(num);
	};

  if(random === 1) {
    return (
			<View style={{ marginBottom: 100 }}>
				<Text style={styles.text}>{`Courntie Will Have ${random} Kid`}</Text>
			</View>
		);
  }

	if (random > 5) {
		return (
			<View style={{ marginBottom: 100 }}>
				<Text
					style={
						styles.text
					}>{`${random} Kids, Courtnie Will Have ${random} Kids`}</Text>
					<Image
						style={styles.heroImage}
						source={require('../../assets/CHSM/desert-wild.png')}
					/>
			</View>
		);
	}

	if (random) {
		return (
			<View style={{ marginBottom: 100 }}>
				<Text style={styles.text}>{`Courntie Will Have ${random} Kids`}</Text>
			</View>
		);
	}
	return (
		<View>
			<Text style={styles.text}>
				How Many Kids Will Courtnie Have? {random}
			</Text>
			<TouchableOpacity style={{ marginBottom: 150 }}>
				<Button onPress={() => randomNumber()} title='Pick A Number' />
			</TouchableOpacity>
		</View>
	);
};

export default Kids;

const styles = StyleSheet.create({
	text: {
		margin: 20,
		textAlign: 'center',
		fontSize: 30,
	},
	heroImage: {
		width: 350,
		height: 350,
		alignSelf: 'center',
	},
});
