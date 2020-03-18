import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
import Layout from '../../constans/Layout';

const WelcomeText = styled.Text`
    margin-top: ${Layout.statusBar};
    font-size: 16px;
    color: ${Colors.black};
`;

interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (
        <View>
            <WelcomeText>Welcome {props.myProps}</WelcomeText>
        </View>
    );
};

export default Welcome;
