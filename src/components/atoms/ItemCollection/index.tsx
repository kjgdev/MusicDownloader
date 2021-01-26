import { IconCheck } from '@assets/svg';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemCollection = (item: any) => {
    return (
        <TouchableOpacity style={[styles.contain, {}]}>
            <View style={[styles.containOpacity, stylesGeneral.centerAll]}>

            </View>
            <Text style={styles.title}>
                {item.title}
            </Text>

            {/* <View style={[styles.containClick, stylesGeneral.centerAll]}>
                <View style={[stylesGeneral.centerAll, { height: 60, width: 60, backgroundColor: '#Fff', borderRadius: 30 }]}>
                    <IconCheck color="#000" />
                </View>
            </View> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contain: {
        borderRadius: 12,
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        margin: 8,
    },
    title: {
        fontSize: 16,
        color: color.TITLE,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginHorizontal: 16,
        marginBottom: 12
    },
    containOpacity: {
        borderRadius: 12,
        flex: 1,
        backgroundColor: "#000",
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.2
    },
    containClick: {
        borderRadius: 12,
        flex: 1,
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.8
    }
})

export default ItemCollection;