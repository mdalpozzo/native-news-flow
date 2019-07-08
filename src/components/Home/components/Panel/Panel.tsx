import * as React from 'react';
import {View, Text} from 'react-native';
export interface Props {
    children?: React.ReactNode;
    title: string;
    stylesProp?: any;
}

const Panel: React.FC<Props> = ({
    children,
    title,
    stylesProp,
}): React.ReactElement => {
    return (
        <View style={stylesProp}>
            <Text>{title}</Text>
            {children}
        </View>
    );
};

export default Panel;