import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import Header from './components/Header';
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
        this.startCard = 2;
    }

    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <FunctionComponent restart={this.restart}/>
                <GameContainer ref='gameContainer' startCard={this.startCard} />
            </View>
        )
    }

    restart() {
        this.refs.gameContainer.restart();
    }
}
