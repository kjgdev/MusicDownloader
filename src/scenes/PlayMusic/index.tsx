import { IconPlay, IconRepeat, IconShuffle, IconSkipForward, IconSkipNext } from '@assets/svg';
import Header3 from '@components/atoms/Header3';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const PlayMusic = () => {
    return (
        <View style={[stylesGeneral.container, { alignItems: 'center', flexDirection: 'column' }]}>
            <Header3 />
            <View style={styles.image}>
            </View>
            <View style={[stylesGeneral.centerAll, { marginTop: 12 }]}>
                <Text style={styles.name} numberOfLines={1} >Lorem ipsum Lorem ipsum...</Text>
            </View>
            <View style={[stylesGeneral.centerAll, styles.constainProcessBar]}>
                <Slider
                    style={{ flex: 1, width: metric.DEVICE_WIDTH - 48 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={color.SEEKBAR}
                    maximumTrackTintColor="#56585b"
                    thumbTintColor={color.SEEKBAR}
                />
            </View>

            <View style={[styles.constainControl]}>
                <TouchableOpacity>
                    <IconShuffle />
                </TouchableOpacity>

                <TouchableOpacity>
                    <IconSkipForward />
                </TouchableOpacity>

                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonPlay]}>
                    <IconPlay />
                </TouchableOpacity>

                <TouchableOpacity>
                    <IconSkipNext />
                </TouchableOpacity>

                <TouchableOpacity>
                    <IconRepeat />
                </TouchableOpacity>

            </View>

            <View style={styles.constainList} >

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: metric.DEVICE_WIDTH - 70,
        width: metric.DEVICE_WIDTH - 70,
        backgroundColor: 'yellow',
        marginTop: 28,
        borderRadius:24
    },
    name: {
        fontSize: 20,
        color: color.TITLE,
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
    constainProcessBar: {
        height: 20,
        width: metric.DEVICE_WIDTH - 32,
        marginTop: 40,
    },
    constainControl: {
        height: 70,
        width: metric.DEVICE_WIDTH - 32,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        flexDirection: 'row',
    },
    buttonPlay: {
        backgroundColor: color.BUTTON_SHUFFLE,
        height: 66,
        width: 66,
        borderRadius: 33
    },
    constainList: {
        backgroundColor: 'red',
        marginTop: 44,
        width: metric.DEVICE_WIDTH,
        flex: 1
    }
})

export default PlayMusic;