import color from '@config/colors';
import metric from '@config/metrics';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = (props: any) => {
    return (
        <View style={[styles.container, { paddingLeft: props.paddingLeft }]}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:19,
        height: 30,
        width: metric.DEVICE_WIDTH,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        color: color.TITLE,
        fontWeight: 'bold',

    }
})

export default Header;