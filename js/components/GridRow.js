import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GridCell from './GridCell';

const {width} = Dimensions.get('window');
const WIDTH = (width - 20 - 20)/4;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bbada0',
        height: WIDTH,
        flexDirection: 'row',
    }
});

export default class GridRow extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <GridCell/>
                <GridCell/>
                <GridCell/>
                <GridCell/>
            </View>
        );

    }
}