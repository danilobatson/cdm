import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';
import useBusinesses from '../Hooks/useBusinesses';
import ResultsList from '../Components/ResultsList';

const Food = () => {
	const [searchApi, businesses, errorMessage, name, setName] = useBusinesses();


  const filterByPrice = (price) => {
    return businesses.filter(business => {
      return business.price === price
    })
  }

	return (
		<>
			<Text style={styles.heading}>Food Screen</Text>
			<SearchBar name={name} onChangeText={setName} onSubmit={searchApi} />
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text style={{ marginLeft: 20, marginVertical: 10 }}></Text>
			<ScrollView>
				<ResultsList
					results={filterByPrice('$')}
					title='Cost Effective'
				/>
				<ResultsList
					results={filterByPrice('$$')}
					title='Little Pricy'
				/>
				<ResultsList
					results={filterByPrice('$$$')}
					title='Oh You Got Money!'
				/>
			</ScrollView>
		</>
	);
};

export default Food;

const styles = StyleSheet.create({
	heading: {
		textAlign: 'center',
		fontSize: 40,
		marginVertical: 10,
		padding: 5,
	},
});
