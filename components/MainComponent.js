import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, Header } from 'react-native-elements'

export default class Main extends Component {
    render() {
        const heart = '<3';
        return (
            <View style={{ backgroundColor: '#FFFFFA', flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'BOOK TINDER', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#E26D5A',
                        justifyContent: 'space-around',
                    }}
                />
                <Card>
                    <Card.Title>Element</Card.Title>
                    <Text>In development...</Text>
                    <Text>Please be patient {heart}</Text>
                </Card>
            </View>
        )
    }
}
