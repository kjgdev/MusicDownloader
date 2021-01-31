import { IconPause, IconPlay, IconRepeat, IconShuffle, IconSkipForward, IconSkipNext } from '@assets/svg';
import Header3 from '@components/atoms/Header3';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MusicControl, { Command } from 'react-native-music-control';
import Sound from 'react-native-sound';
import { useSelector, useDispatch } from 'react-redux';
import { setSound, setSoundStatus, showMusicControl } from '@services/redux/actions';
import ItemMusicInPlayMusic from '@components/atoms/ItemMusicInPlayMusic';

const renderItem = ({ item }) => (
    <ItemMusicInPlayMusic data={item} />
);

const PlayMusic = (props: any) => {
    const soundTask = useSelector((state: any) => state.soundTask)
    const soundTaskStatus = useSelector((state: any) => state?.soundTaskStatus)

    const dispatch = useDispatch()
    const listMusic = useSelector((state: any) => state?.listMusic)
    const currentMusic = useSelector((state: any) => state?.currentMusic)

    useEffect(()=>{
        console.log("🚀 ~ file: index.tsx ~ line 31 ~ PlayMusic ~ soundTask", soundTask)
        soundTask.play()
    },[soundTask])

    return (
        <View style={[stylesGeneral.container, { alignItems: 'center', flexDirection: 'column' }]}>
            <Header3 />
            <View style={{ flex: 1, width: metric.DEVICE_WIDTH, padding: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                    <View style={{ backgroundColor: 'yellow', height: 100, width: 100, marginLeft: 8, borderRadius: 12 }}>
                    </View>
                    <View style={{ height: 100, flex: 1, marginLeft: 16, padding: 8 }}>
                        <Text style={{ fontSize: 16, color: color.TITLE, fontWeight: 'bold' }}>{currentMusic?.data.name}</Text>
                        <Text style={{ fontSize: 13, color: color.TITLE }}>Geogre Simpson</Text>

                    </View>
                </View>

                <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    {soundTaskStatus ?
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                soundTask.pause()
                                dispatch(setSoundStatus(false))
                            }}
                        >
                            <IconPause />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                soundTask.play()
                                dispatch(setSoundStatus(true))
                            }}
                        >
                            <IconPlay />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={styles.button}>
                        <IconShuffle />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 3, width: metric.DEVICE_WIDTH, padding: 16 }}>
                <FlatList
                    data={listMusic}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            {/* <View style={styles.image}>
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

                {isPlay ?
                    <TouchableOpacity
                        style={[stylesGeneral.centerAll, styles.buttonPlay]}
                        onPress={() => {
                            soundTask.pause()
                            setIsPlay(false)
                        }}
                    >
                        <IconSkipForward />
                    </TouchableOpacity> :
                    <TouchableOpacity
                        style={[stylesGeneral.centerAll, styles.buttonPlay]}
                        onPress={() => {
                            soundTask.play()
                            setIsPlay(true)
                        }}
                    >
                        <IconPlay />
                    </TouchableOpacity>}
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

            </View> */}


        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: metric.DEVICE_WIDTH - 70,
        width: metric.DEVICE_WIDTH - 70,
        backgroundColor: 'yellow',
        marginTop: 28,
        borderRadius: 24
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
    },
    button: {
        height: 44,
        backgroundColor: color.BUTTON_SHUFFLE,
        width: metric.DEVICE_WIDTH / 2 - 32,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PlayMusic;