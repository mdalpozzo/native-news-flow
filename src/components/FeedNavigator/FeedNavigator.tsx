import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from 'Components/Home';
import TestComponentB from 'Components/TestComponentB';

const Navigator = createStackNavigator(
    {
        Home: {screen: Home},
        TestComponentB: {screen: TestComponentB},
    },
    {
        initialRouteName: "Home",
        // headerMode: 'none',
    },
);

const FeedNavigator = createAppContainer(Navigator);

export default FeedNavigator;