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
            <Paragraph>{'\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mattis ipsum, et efficitur orci. Etiam
                consequat ornare dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Nullam commodo, elit viverra iaculis convallis, massa quam viverra odio, eu facilisis orci
                sem id mi. Cras scelerisque euismod orci, non mattis arcu rutrum in. Fusce eu tortor vitae neque
                molestie dapibus id ut elit. Pellentesque tellus nisl, maximus eget purus tristique, vehicula ultrices
                nibh.
                Pellentesque nibh justo, suscipit id luctus vitae, interdum eget arcu. Aliquam est tellus, efficitur
                vitae justo vitae, ultrices sollicitudin nulla. Sed sed vulputate erat, vitae venenatis quam. Vivamus
                quis nisi leo. Donec vel ultrices metus. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vivamus id neque metus. Nam pellentesque elementum quam sit amet
                lacinia. Donec dictum blandit venenatis. Nulla vehicula magna eleifend dolor dapibus, nec egestas tortor
                tincidunt. Mauris non libero eu libero efficitur tempus. Ut vel nunc et lacus maximus varius eget vel
                metus. Ut tincidunt lacus ut efficitur porttitor.</Paragraph>
        </YellowScrollContainer>
    );
};

export default HomeTab;
