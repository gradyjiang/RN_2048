import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GridRow from './GridRow';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'column',
    }
});


export default class GridContainer extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <GridRow />
                <GridRow />
                <GridRow />
                <GridRow />
            </View>
        );
    }
}