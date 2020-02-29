import React, {Component} from 'react';
import {Image, NativeComponent, StyleSheet, Text, View} from 'react-native';
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    }
});

class Greetings extends Component<any, any> {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}


export default class HelloWorldApp extends Component {
    render() {
        let pictureElement = {
            uri: 'https://d-nm.ppstatic.pl/kadr/plebiscyty/k/r/0116/gym_park_ul_zablocie_22_1168439/e20a_o,size,770x0,q,100,h,7c3e63.jpg?-62169987600'
        }
        return (
            <View style={styles.container}>
                <Text>Hello World!</Text>
                <Greetings name={'Jan'}/>
                <Greetings name={'Jacek'}/>
                <Greetings name={'Ania'}/>
                <Image source={pictureElement} style={{width: 300, height: 150}}/>
            </View>
        );
    }
}


class Blink extends Component<any, any> {
    componentDidMount(): void {
        setInterval(() => (
            this.setState(prevState => (
                    {isShowingText: !prevState.isShowingText}
                )
            )), 2000)
    }

    state = {isShowingText: true}

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (!this.state.isShowingText)
            return null

        return (
            <Text>{this.props.text}</Text>
        )
    }
}

export default class BlinkApp extends Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={styles.container}>
                <Blink text={'I love to blink'}/>
                <Blink text={'Blinking is great!'}/>
            </View>
        )
    }
}

export default class LotsOfStyles extends Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View>
                <Text style={styles.red}>Just red</Text>
                <Text style={styles.bigBlue}>Just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
            </View>
        );
    }
}*/

export default class FixedDimentionBasics extends Component<any, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style = {{flex: 1}}>
               {/* <View style = {{width: 50,  height: 50,  backgroundColor: 'powderblue'}}/>
                <View style = {{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                <View style = {{width: 150, height: 150, backgroundColor: 'steelblue'}}/>*/}
                <View style = {{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style = {{flex: 1, backgroundColor: 'skyblue'}}/>
                <View style = {{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>
        )
    }
}
