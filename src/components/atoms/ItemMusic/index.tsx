import { ImageMusicDefault } from '@assets/images';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'
import MusicControl, { Command } from 'react-native-music-control'
import Sound from 'react-native-sound'
import ControlMusic from '../ControlMusic';

const ItemMusic = (props: any) => {
    return (
        <TouchableOpacity
            style={[styles.constain]} activeOpacity={0.5}
            onPress={() => {
                
            }}
        >
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
            <View
                style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', flex: 1, borderColor: color.LINE }}
            >
                <View style={styles.image}>
                    <Image
                        style={styles.image}
                        source={(props.data.thumbnail != '') ? { uri: props.data.thumbnail } : ImageMusicDefault}
                    />
                </View>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.title}
                >{props.data.name}</Text>
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
        borderRadius: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.TITLE,
        marginLeft: 12,
        marginRight: 80
    }
})

export default ItemMusic;