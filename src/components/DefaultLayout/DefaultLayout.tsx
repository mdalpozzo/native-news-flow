import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './DefaultLayout.styles';

interface Props {
    stylesProp?: React.ReactNode;
};

class DefaultLayout extends Component<Props> {
    render () {
        const {
            children,
            stylesProp,
        } = this.props;
        return (
            <View style={[stylesProp, styles.Container]}>
                {children}
            </View>
        );
    }
}

export default DefaultLayout;