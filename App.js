import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import Work from './src/screens/Work';
import About from './src/screens/About';
import CounterScreen from './src/screens/CounterScreen';
import TextScreen from './src/screens/TextScreen';
import Books from './src/screens/Books';
import Education from './src/screens/Education';
import Food from './src/screens/Food';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		About: About,
		Work: Work,
		Counter: CounterScreen,
		Text: TextScreen,
		Books: Books,
		Education: Education,
		Food: Food,
		Results: ResultsShowScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: "Courtnie Dowdy Won't He Will App",
		},
	}
);

export default createAppContainer(navigator);
