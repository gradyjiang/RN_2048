import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GridContainer from './GridContainer';

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

    render() {
        return (
          <View style={styles.container}>
              <GridContainer />
          </View>
        );
    }
}