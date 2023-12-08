import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, Dimensions, Platform } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function CustomScreen ({title}) {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Image source={require('../Images/PngItem_5153359.png')} style={styles.image}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:0.8,
        alignItems:'center',
      //  backgroundColor:'red'
    },
    text:{
        marginTop: deviceHeight * 0.03,
        fontSize: Platform.OS === 'ios' ? deviceHeight*0.025 : deviceHeight*0.03,
        fontWeight:'bold'
    },
    image:{
        height: deviceHeight * 0.2,
        width: deviceWidth * 0.6,
      // backgroundColor:'red',
        resizeMode:'contain',
        marginTop: deviceHeight * 0.01
       }
})

export default CustomScreen;