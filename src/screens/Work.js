import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const Work = (props) => {
	const coordinator = 'Program ran by Courtnie Dowdy';
	return (
		<View >
			<ScrollView>
				<Text style={styles.headerStyle}>Calvary High School Ministry</Text>
				<Text style={styles.subHeaderStyle}>{coordinator}</Text>
        <ImageDetail
          title='Stage'
          imageSource={require('../../assets/CHSM/director.jpg')}
        />
				<ImageDetail
					title='HSM'
					imageSource={require('../../assets/CHSM/hsm.jpg')}
				/>
				<ImageDetail
					title='Outdoor Ministry'
					imageSource={require('../../assets/CHSM/mask.jpg')}
				/>
				<ImageDetail
					title='Camp Life'
					imageSource={require('../../assets/CHSM/camp.jpg')}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		fontSize: 45,
	},
	subHeaderStyle: {
		fontSize: 20,
	},

});

export default Work;
