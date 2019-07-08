import { createStackNavigator } from 'react-navigation';
import Main from 'Components/Main';
import TestComponentB from 'Components/TestComponentB';

const Navigator = createStackNavigator(
    {
        Main: {screen: Main},
        TestComponentB: {screen: TestComponentB},
    },
    {
        initialRouteName: "Main",
        headerMode: 'none',
    },
);

export default Navigator;