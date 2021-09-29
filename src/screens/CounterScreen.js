import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
	//state === {count: someNumber}
	//action === {type: 'increment' || 'decrement', payload: 1}

	switch(action.type) {
		case 'increment':
			return {...state, count: state.count + action.payload}
		case 'decrement':
			return {...state, count: state.count - action.payload}
		default:
			return state
	}
}
const CounterScreen = () => {
  //STATE LOGIC
	const [state, dispatch] = useReducer(reducer, {count: 0})
	const {count} = state



  const [color, setColor] = useState([])

  //RANDOM COLOR LOGIC
  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
		<View>
			<TouchableOpacity>
				{/* COUNTER UI */}
				<Button
					onPress={() => dispatch({ type: 'increment', payload: 1 })}
					title='Increment'
				/>
				<Button
					onPress={() => dispatch({ type: 'decrement', payload: 1 })}
					title='Decrement'
				/>
				<Text>The count is: {count}</Text>

				{/* COLOR UI */}
				<Button
					onPress={() => setColor([...color, randomRGB()])}
					title='Add A Color'
				/>
			</TouchableOpacity>
			<FlatList
				data={color}
				keyExtractor={(item) => item}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								alignSelf: 'center',
								height: 100,
								width: 100,
								backgroundColor: item,
							}}></View>
					);
				}}
			/>
			<View  style={styles.viewFlex}>
			<View
				style={{
					backgroundColor: 'red',
					borderWidth: 1,
					borderColor: 'red',
					height: 50,
					width: 50,
				}}
			/>
			<View
				style={{
					backgroundColor: 'green',
					borderWidth: 1,
					borderColor: 'green',
					height: 50,
					width: 50,
					marginTop: 50,
				}}
			/>
			<View
				style={{
					backgroundColor: 'purple',
					borderWidth: 1,
					borderColor: 'purple',
					height: 50,
					width: 50,
				}}
			/>
			</View>
		</View>
	);
}

export default CounterScreen

const styles = StyleSheet.create({
	viewFlex:{
		flexDirection: 'row',
		justifyContent: 'space-between',
	}

})
