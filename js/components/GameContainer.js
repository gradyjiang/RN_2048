import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    PanResponder
} from 'react-native';
import GridContainer from './GridContainer';
import CardContainer from './CardContainer';
import CardMatrix from '../utils/CardMatrix';
import {
    GRID_SIZE,
    MOVE_RIGHT,
    MOVE_DOWN,
    MOVE_LEFT,
    MOVE_UP
} from '../constants/Constants';
import Card from "../utils/Card";

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bbada0',
        borderRadius: 5,
        height: width-20,
        marginTop: 30
    }
});

export default class GameContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => this.handleStartShouldSetPanResponder(e, gestureState),
            onMoveShouldSetPanResponder: (e, gestureState) => this.handleMoveShouldSetPanResponder(e, gestureState),
            onPanResponderGrant: (e, gestureState) => this.handlePanResponderGrant(e, gestureState),
            onPanResponderMove: (e, gestureState) => this.handlePanResponderMove(e, gestureState),
            onPanResponderRelease: (e, gestureState) => this.handlePanResponderRelease(e, gestureState)
        });

        this.state = {
            children: []
        };
        this.cardMatrix = new CardMatrix(GRID_SIZE);
    }


    handleStartShouldSetPanResponder(e, gestureState) {
        return true;
    }

    handleMoveShouldSetPanResponder(e, gestureState) {
        return true;
    }

    handlePanResponderGrant(e, gestureState) {
        console.log(`GameApp: handlePanResponderGrant`);
    }

    handlePanResponderMove(e, gestureState) {
        console.log(`GameApp: handlePanResponderMove dx=${gestureState.dx}, dy= ${gestureState.dy}`);
    }

    handlePanResponderRelease(e, gestureState) {
        console.log(`GameApp: handlePanResponderEnd dx=${gestureState.dx}, dy= ${gestureState.dy}`);
        let dx = gestureState.dx;
        let dy = gestureState.dy;
        let absDx = dx > 0 ? dx : -dx;
        let absDy = dy > 0 ? dy : -dy;
        let canMove = absDx > 20 || absDy > 20;
        if (canMove) {
            const direction = absDx > absDy ? (dx > 0 ? MOVE_RIGHT : MOVE_LEFT)
                : (dy > 0 ? MOVE_DOWN : MOVE_UP);
            this.move(direction);
        }
    }

    render() {
        return (
          <View {...this.panResponder.panHandlers} style={styles.container}>
              <GridContainer />
              <CardContainer children={this.state.children}/>
          </View>
        );
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
        for (let i = 0; i < this.props.startCard; i++) {
            ret.push(this.getRandomCard())
        }
        return ret;
    }

    getRandomCard() {
        let value = Math.random() < 0.9 ? 2 : 4;
        let position = this.cardMatrix.getRandomFreePosition();
        let card = new Card(position.x, position.y, value);
        this.cardMatrix.pushCard(card);
        return card;
    }

    restart() {
        this.cardMatrix.clear();
        this.setGameState()
    }

    move(direction) {
        this.cardMatrix.handleCardsMove(direction);
        this.setState({
            children: this.cardMatrix.getAvailableCards()
        })
    }
}