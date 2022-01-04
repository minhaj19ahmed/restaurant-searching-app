import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultShowScreen';

const navigator = createStackNavigator({
search: SearchScreen,
resultsShow: ResultsShowScreen

}, {
  initialRouteName: 'search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);
