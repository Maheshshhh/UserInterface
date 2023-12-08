import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function ButtonComp ({ buttonTitle, onPress }) {
    return (
        <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.textArea}>
            <Text style={styles.text}>{buttonTitle}</Text>
        </TouchableOpacity>
        <Text style={styles.textData}>By Signing up, you agree with our terms and conditions.</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    textArea:{
        backgroundColor:'tomato',
        height: deviceHeight * 0.04,
        width:deviceWidth *  0.6,
        borderRadius: 15,
        justifyContent:'center',
        
    },
    text : {
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        fontSize: deviceHeight * 0.02
    },
    textData:{
        width:deviceWidth *  0.6,
        marginTop: deviceHeight * 0.03,
        textAlign:'center',
        fontSize: deviceHeight * 0.015
    }
})

export default ButtonComp;