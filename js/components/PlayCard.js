import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

const {width} = Dimensions.get('window');
const WIDTH = ((width - 20 - 20) - 10*4)/4;

const styles = StyleSheet.create({
    card:{
        position: 'absolute',
        borderRadius: 5,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: WIDTH,
        height: WIDTH,
        backgroundColor: '#eee4da',
    },
    cardText: {
        color: '#776E65',
        textAlign: 'center',
        textAlignVertical:"center",
        fontSize: 35
    }
});

const MARGIN_WIDTH = 5;

export default class PlayCard extends PureComponent {

    render() {
        const cardPositionStyle = {
            left: this.props.x * WIDTH + MARGIN_WIDTH*(2*this.props.x+1),
            top: this.props.y * WIDTH + MARGIN_WIDTH*(2*this.props.y+1)
        };
        return (
            <View style={[styles.card, cardPositionStyle]}>
                <Text style={styles.cardText}>8</Text>
            </View>
        );
    }
}
