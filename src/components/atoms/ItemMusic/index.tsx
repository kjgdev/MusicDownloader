import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'

const ItemMusic = (props: any) => {
    return (
        <TouchableOpacity style={styles.constain}>
            {props.show ? (<View style={{ height: 62 }} >
                <CheckBox
                    containerStyle={{ padding: 0, justifyContent: 'center', alignItems: "center", flex: 1 }}
                    iconRight
                    size={20}
                    uncheckedColor={color.CHECKBOX_UNCHECK}
                    checkedColor={color.CHECKBOX_CHECK}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={props.checked}
                />
            </View>) : null}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center',  borderBottomWidth:1,
        borderColor:color.LINE }}>
                <View style={styles.image}></View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    constain: {
        height: 68,
        width: metric.DEVICE_WIDTH,
        flexDirection: 'row',
      
    },
    image: {
        height: 48,
        width: 48,
        backgroundColor: 'blue',
        borderRadius: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.TITLE,
        marginLeft: 16
    }
})

export default ItemMusic;