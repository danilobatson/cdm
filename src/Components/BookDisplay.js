import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'

const BookDisplay = () => {
 const [images, setimages] = useState([
		{
			src: require('../../assets/Books/book-1.jpeg'),
			key: '1',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-2.jpeg'),
			key: '2',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-3.jpg'),
			key: '3',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-4.jpeg'),
			key: '4',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-5.png'),
			key: '5',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-6.jpeg'),
			key: '6',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-7.jpeg'),
			key: '7',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-8.jpeg'),
			key: '8',
			name: 'Book Title',
		},
		{
			src: require('../../assets/Books/book-9.png'),
			key: '9',
			name: 'Book Title',
		},
 ]);

  return (
		<>
			<View>
				<Image
					style={{
						marginBottom: 20,
						width: 350,
						height: 220,
						alignSelf: 'center',
						borderRadius: 5,
					}}
					source={require('../../assets/Books/hero-book1.jpeg')}
				/>
			</View>
			<FlatList
        horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={images.key}
				data={images}
				renderItem={({ item }) => (
					<View style={{flexDirection:'column', marginHorizontal: 10}}>
						<Image source={item.src} style={styles.imageStyle} />
						<Text style={styles.caption}>{item.name}</Text>
					</View>
				)}
			/>
		</>
	);
}

export default BookDisplay

const styles = StyleSheet.create({
	imageStyle: {
		width: 220,
		height: 150,
		borderRadius: 5,
    marginTop: 25,
    marginBottom: 5,
		alignSelf: 'center',
	},
  caption:{
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 16
  }
});
