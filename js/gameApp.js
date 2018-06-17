import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import Header from './components/Header';
import FunctionComponent from './components/FunctionComponent';
import GameContainer from './components/GameContainer';
import HadShowPositions from './utils/HadShowPositions';

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
        this.hadShowPositions = new HadShowPositions();
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
        let x, y;
        do {
            x = Math.floor(Math.random()*4);
            y = Math.floor(Math.random()*4);
            if (!this.hadShowPositions.isExist({x: x, y: y})) {
                this.hadShowPositions.push({x: x, y: y});
                break;
            }
        } while (true);

        let value = Math.random() < 0.9 ? 2 : 4;
        return {
            value: value,
            x: x,
            y: y
        }
    }

    restart() {
        this.hadShowPositions.clear();
        this.setGameState();
    }
}
