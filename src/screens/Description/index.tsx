import * as React from 'react';
import {Text, View} from 'react-native';
import {FC} from 'react';
import styled from 'styled-components/native';
import {YellowScrollContainer} from "../Home";

const FirstImg = styled.Image`
    width: 70%;
    height: 200px;
    margin: 5% 0 0 5%;
`;
const SecondImg = styled.Image`
    width: 40%;
    height: 100px;
    margin-left: 30%;
`;
const LoremText = styled.Text`
    margin: 10px 20px 10px 20px;
`;



const DescriptionTab: FC = () => {
    return (
        <YellowScrollContainer>
            <FirstImg
                source={require('../../assets/city.png')}
            />
            <LoremText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mattis ipsum, et efficitur orci. Etiam
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
                metus. Ut tincidunt lacus ut efficitur porttitor.
            </LoremText>
            <SecondImg
                source={require('../../assets/motherboard.png')}
            />
            <LoremText>
                Vestibulum at feugiat mauris, nec ornare enim. Etiam nunc lectus, elementum eu justo id, ultricies
                tempor turpis. Etiam eleifend mauris sed mauris feugiat dapibus. Proin fringilla vulputate lorem, ac
                congue ipsum dictum a. Pellentesque velit arcu, faucibus eget quam et, ullamcorper sagittis est. Quisque
                ac felis iaculis, pellentesque sem et, lacinia ante. Maecenas in urna lorem. Nulla facilisi.
            </LoremText>
        </YellowScrollContainer>
    );
};

export default DescriptionTab;
