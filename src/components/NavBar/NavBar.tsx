import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './NavBar.styles';
import { Icon } from 'react-native-elements';
import {
    HOME,
    TEST,
} from 'Components/Main';

interface Props {
    stylesProp?: any;
    handleViewChange: Function;
    view: string;
};

class NavBar extends Component<Props> {
    render () {
        const {
            stylesProp,
            handleViewChange,
            view,
        } = this.props;
        return (
            <View style={[stylesProp, styles.container]}>
                <Icon
                    name='chrome-reader-mode'
                    size={50}
                    onPress={() => handleViewChange()}
                    // color={view === }
                />
                <Icon
                    name='home'
                    size={50}
                    onPress={() => handleViewChange(HOME)}
                    color={view === HOME ? 'pink' : 'black'}
                />
                <Icon
                    name='group'
                    size={50}
                    onPress={() => handleViewChange()}
                />
            </View>
        );
    }
}

export default NavBar;
