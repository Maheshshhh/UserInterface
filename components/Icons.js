import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

function CustomIcon ({iconName, size, color, style}) {
    return (
        <View style={style}>
           <Ionicons name={iconName} size={size} color={color} />
        </View>
    )

};

const styles = StyleSheet.create({
})

export default CustomIcon;