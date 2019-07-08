import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';

export interface Props {
    children?: React.ReactNode;
    stylesProp?: any;
};

const Card: React.FC<Props> = ({
    children,
    stylesProp,
}): React.ReactElement => {
    return (
        <View style={[stylesProp, styles.Container]}>
            {children}
        </View>
    );
};

export default Card;