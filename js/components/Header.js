import React, {PureComponent} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        height: 100,
        // paddingLeft:10,
        // paddingRight:10,
        // paddingTop:10,
        // paddingBottom:10,
    },
    nameText: {
        fontSize: 50,
        color: '#776E65',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scoreAndRank: {
        width: 100,
        alignItems: 'center',
        backgroundColor: '#bbada0',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius:5,
        borderTopLeftRadius: 5
    },
    text: {
        color: '#eee4da',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    number: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }

});

export default class Header extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nameText}>2048</Text>
                <View style={styles.scoreAndRank}>
                    <Text style={styles.text}>Score</Text>
                    <Text style={styles.number}>0</Text>
                </View>
                <View style={styles.scoreAndRank}>
                    <Text style={styles.text}>Best</Text>
                    <Text style={styles.number}>100</Text>
                </View>
            </View>
        );
    }
}