import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import Header from './components/Header'
import FunctionComponent from './components/FunctionComponent';
import GameContainer from './components/GameContainer';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#faf8ef',
        paddingHorizontal: 10,
        width,
        height
    },

});

export default class GameApp extends PureComponent {

    constructor(props) {
        super(props);
        this.restart = this.restart.bind(this);
        this.state = {
            children: [{ x: 0, y: 0}, { x: 0, y: 3}]
        };
        this.startCard = 2;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <FunctionComponent restart={this.restart}/>
                <GameContainer children={this.state.children}/>
            </View>
        )
    }

    componentWillMount() {
        this.setUp();
    }

    setUp() {
        this.setGameState()
    }

    setGameState() {
        const children = this.getRandomCards();
        this.setState({children : children})
    }

    getRandomCards() {
        const ret = [];
        for (let i = 0; i < this.startCard; i++) {
            ret.push(this.getRandomCard())
        }
        return ret;
    }

    getRandomCard() {
        let value = Math.random() < 0.9 ? 2 : 4;
        let x = Math.floor(Math.random()*4);
        let y = Math.floor(Math.random()*4);
        return {
            value: value,
            x: x,
            y: y
        }
    }

    restart() {
        this.setGameState();
    }
}
