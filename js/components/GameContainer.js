import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    PanResponder
} from 'react-native';
import GridContainer from './GridContainer';
import CardContainer from './CardContainer';
import HadShowPositions from '../utils/HadShowPositions';

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
        this.hadShowPositions = new HadShowPositions();
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
        this.setGameState()
    }
}