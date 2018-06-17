import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');
const WIDTH = ((width - 20 - 20) - 10*4)/4;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(238, 228, 218, 0.35)',
        width: WIDTH,
        height: WIDTH,
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5,
    }
});

export default class GridCell extends PureComponent {

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}