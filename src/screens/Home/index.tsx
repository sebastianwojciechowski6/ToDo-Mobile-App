import * as React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {FC} from 'react';

const IntroText = styled.Text`
    margin-left: 60%;
    margin-bottom: 2%;
`;
const AvatarImg = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-top: 30px;
    margin-left: 15px;
`;
const PanoramicImg = styled.Image`
    width: 100%;
    height: 200px;
`;
export const ScrollContainer = styled.ScrollView`
    flex: 1;
    width: 100%;
`;
export const YellowScrollContainer = styled(ScrollContainer)`
    background-color: yellow;
`;
const Paragraph = styled.Text`
    margin: 20px;
    font-size: 18px;
    line-height: 28px;
`;

const HomeTab: FC = () =>{
    return(
        <YellowScrollContainer>
            <AvatarImg
                source={require('../../assets/kid.jpg')}
            />
            <IntroText>Greetings</IntroText>
            <PanoramicImg
                source={require('../../assets/mountains.jpg')}
            />
            <Paragraph>{'\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
        </YellowScrollContainer>
    );
};

export default HomeTab;
