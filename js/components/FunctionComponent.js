import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    newGameContainer: {
        backgroundColor: '#8f7a66',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:5,
        paddingRight:5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius:5,
        borderTopLeftRadius: 5
    },
    newGameText: {
        fontSize: 18,
        color: 'white'
    },
    infoText: {
        flex: 1,
        fontSize: 15,
        color: '#776E65',
    },
    boldText: {
        fontSize: 15,
        color: '#776E65',
        fontWeight: 'bold'
    }
});

export default class FunctionComponent extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.infoText}>Join the numbers and get to the
                    <Text style={styles.boldText}> 2048 tile</Text>
                </Text>
                <TouchableOpacity style={styles.newGameContainer} onPress={() => {ToastAndroid.show('Hello NewGame', ToastAndroid.SHORT)}}>
                    <Text style={styles.newGameText}>New Game</Text>
                </TouchableOpacity>
            </View>
        );
    }
}