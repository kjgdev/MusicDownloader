import { IconPlay, IconShuffle, IconSkipNext } from '@assets/svg';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';


const ControlMusic = () => {
    return (
        <View style={styles.rootView}>
            <View style={[styles.constainProcessBar]}>
                <Slider
                    style={{ width: metric.DEVICE_WIDTH,padding:0 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={color.SEEKBAR}
                    maximumTrackTintColor="#56585b"
                    thumbTintColor={color.SEEKBAR}
                />
            </View>
            <View style={styles.constain}>
                <View style={{ height: 32, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 32, width: 32, backgroundColor: "red", borderRadius: 6 }}></View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: color.TITLE, marginLeft: 10 }}>Kiss the rain</Text>
                </View>
                <View style={styles.constainControl}>
                    <TouchableOpacity>
                        <IconShuffle />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconPlay />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <IconSkipNext />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    rootView:{
        width: metric.DEVICE_WIDTH,
        backgroundColor: color.BG_CARD,
      
    },
    constain: {
        height: 58,
        width: metric.DEVICE_WIDTH,
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 16,
        flexDirection: 'row'
    },
    constainControl: {
        height: 38,
        width: 125,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    constainProcessBar: {
        width: metric.DEVICE_WIDTH,
        height:10
    },
})

export default ControlMusic;