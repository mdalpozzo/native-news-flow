import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DefaultLayout from '../DefaultLayout';

interface Props {};

class TestComponentB extends Component<Props> {
    render () {
        return (
            <DefaultLayout>
                <Text>COMPONENT B TEST</Text>
            </DefaultLayout>
        );
    }
}

export default TestComponentB;