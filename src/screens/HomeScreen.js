import React from 'react';
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageDetail from '../Components/ImageDetail';
import Kids from '../Components/Kids';


const HomeScreen = ({navigation}) => {
  //console.log(props)
	return (
		<View>
			<ScrollView>
				<Text style={styles.text}>Courtnie Dowdy Ministry </Text>
				<TouchableOpacity style={styles.buttonStyle}>
					<Button
						style={styles.button}
						onPress={() => navigation.navigate('Work')}
						title='Work'
					/>
					<Button
						style={styles.button}
						onPress={() => navigation.navigate('About')}
						title='About'
					/>
					<Button
						style={styles.button}
						onPress={() => navigation.navigate('Counter')}
						title='Counter Screen'
					/>

					<Button
						style={styles.button}
						onPress={() => navigation.navigate('Text')}
						title='Text Screen'
					/>
					<Button
						onPress={() => navigation.navigate('Books')}
						title='Recommended Reading'
					/>
					<Button
						style={styles.button}
						onPress={() => navigation.navigate('Education')}
						title='Education'
					/>
					<Button
						style={styles.button}
						onPress={() => navigation.navigate('Food')}
						title='Food'
					/>
				</TouchableOpacity>
				<Image
					style={styles.heroImage}
					source={require('../../assets/CHSM/hero.jpg')}
				/>
				<Kids />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		fontWeight: '700',
		textAlign: 'center',
		margin: 20,
	},
	screen: {
		backgroundColor: '#e2f2e9',
	},
	heroImage: {
		width: 350,
		height: 350,
		alignSelf: 'center',
		borderRadius: 10,
	},
	buttonStyle: {
		marginVertical: 20,
	},
	buttons: {
		marginVertical: 10,
	},
});

export default HomeScreen;
