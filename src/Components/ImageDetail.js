import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({title, imageSource}) => {
	return (
		<View>
			<Image
				source={imageSource}
        style={{width: 200, height: 200}}
        style={styles.imageView}
			/>
			<Text style={styles.caption}>{title}</Text>

		</View>
	);
};

export default ImageDetail;

const styles = StyleSheet.create({
	imageView: {
    marginVertical: 15,
    width: 200,
    height: 200,
    alignSelf: 'center'
	},
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  }
});
