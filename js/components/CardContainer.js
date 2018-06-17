import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import PlayCard from './PlayCard';

const {width} = Dimensions.get('window');
const WIDTH = width-20-20;

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: WIDTH,
        position: 'absolute',
        left: 10,
        top: 10,
    }
});

export default class CardContainer extends PureComponent {

    render() {
        const children = this.props.children;
        return (
            <View style={styles.container}>
                {
                    children.map((item, key) => {
                        return <PlayCard key={key} x={item.x} y={item.y} value={item.value} />
                    })
                }
            </View>
        );

    }
}