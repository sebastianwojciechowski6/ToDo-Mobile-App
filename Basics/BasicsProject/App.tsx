import React, { Component } from 'react';
import {Image, NativeComponent, StyleSheet, Text, View} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        let pictureElement = {
            uri: 'https://d-nm.ppstatic.pl/kadr/plebiscyty/k/r/0116/gym_park_ul_zablocie_22_1168439/e20a_o,size,770x0,q,100,h,7c3e63.jpg?-62169987600'
        }
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
                <Image source={pictureElement} style={{width: 300, height: 150}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
