import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({result}) => {

  return (
		<View style={styles.container}>
			<Image style={styles.imageStyle} source={{ uri: result.image_url }} />
			<Text style={styles.nameStyle}>{result.name}</Text>
			<Text>
				{result.rating} Stars, {result.review_count} Reviews</Text>
		</View>
	);
}

export default ResultsDetail

const styles = StyleSheet.create({
  container: {
    marginLeft: 20
  },
  imageStyle:{
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 5
  },
  nameStyle:{
    fontSize: 15,
    fontWeight: 'bold'
  }
})
