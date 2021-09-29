import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation
}) => {

  if(!results.length) {
    return null
  }
  return (
		<View style={styles.container}>
			<Text style={styles.header}>{title}</Text>
			<FlatList
				horizontal
        showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(results) => results.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Results', { id: item.id })
							}>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '600',
    padding: 5,
    marginLeft: 20,
    marginBottom: 5
  },
  container: {
    marginBottom: 15
  }
})
