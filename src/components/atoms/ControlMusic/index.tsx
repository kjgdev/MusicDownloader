import { IconPlay, IconShuffle, IconSkipNext } from '@assets/svg';
import color from '@config/colors';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useSelector, useDispatch } from 'react-redux';
import { setSoundStatus } from '@services/redux/actions';

const ControlMusic = () => {

    const soundTaskStatus = useSelector((state: any) => state?.soundTaskStatus)
    const soundTask = useSelector((state: any) => state?.soundTask)
    const dispatch = useDispatch()
    const [currentDuration,setCurrentDuration] = useState(0);
    const [maxDuration,setMaxDuration] = useState(1);
    const currentMusic = useSelector((state: any) => state?.currentMusic)


    useEffect(() => {
        console.log("aaaaaaaa")
        if (soundTaskStatus) {
            setMaxDuration(soundTask.getDuration())
            var timer = setInterval(() => {
                soundTask.getCurrentTime((seconds) => setCurrentDuration(seconds));
            }, 100);
        }
        return (() => {
            console.log("out")
            clearInterval(timer)
        }
        )
    }, [soundTaskStatus])

    return (
        <View style={styles.rootView}>
            <View style={[styles.constainProcessBar]}>
                <Slider
                    style={{ width: metric.DEVICE_WIDTH, padding: 0 }}
                    minimumValue={0}
                    maximumValue={maxDuration}
                    minimumTrackTintColor={color.SEEKBAR}
                    maximumTrackTintColor="#56585b"
                    thumbTintColor={color.SEEKBAR}
                    value={currentDuration}
                    onValueChange={(value)=>{
                        soundTask.setCurrentTime(value)
                    }}

                />
            </View>
            <View style={styles.constain}>
                <View style={{ height: 32, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 32, width: 32, backgroundColor: "red", borderRadius: 6 }}></View>
                    <Text 
                    style={{ fontSize: 16,width:metric.DEVICE_WIDTH-180, fontWeight: 'bold', color: color.TITLE, marginLeft: 10 }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >{currentMusic.data.name}</Text>
                </View>
                <View style={styles.constainControl}>
                    {/* <TouchableOpacity>
                        <IconShuffle />
                    </TouchableOpacity> */}
                    {soundTaskStatus ?
                        <TouchableOpacity
                            onPress={() => {
                                soundTask.pause()
                                dispatch(setSoundStatus(false))
                            }}
                        >
                            <IconSkipNext />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => {
                                soundTask.play((success => {
                                    if(success){
                                        dispatch(setSoundStatus(true))
                                    }
                                }))
                                dispatch(setSoundStatus(true))

                            }}
                        >
                            <IconPlay />
                        </TouchableOpacity>
                    }

                    <TouchableOpacity>
                        <IconSkipNext />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    rootView: {
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
        width: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    constainProcessBar: {
        width: metric.DEVICE_WIDTH,
        height: 10
    },
})

export default ControlMusic;