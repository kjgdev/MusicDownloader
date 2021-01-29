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
import { useSelector, useDispatch } from 'react-redux';
import { addItemMusicEdit, removeItemMusicEdit } from '@services/redux/actions';

const ItemMusic = (item: any) => {
    const editMode = useSelector((state: any) => state?.editMode)
    const [select, setSelect] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (select) {
            dispatch(addItemMusicEdit(item.data))
        }
        else {
            dispatch(removeItemMusicEdit(item.data))
        }
    }, [select])

    return (
        <TouchableOpacity
            style={[styles.constain]} activeOpacity={0.5}
            onPress={() => {
                if (editMode) {
                    setSelect(!select)
                }
                else {
                    console.log(item)
                    var whoosh = new Sound(item.data.path, Sound.MAIN_BUNDLE, (error) => {
                        if (error) {
                            console.log('failed to load the sound', error);
                            return;
                        }
                        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
                        whoosh.play((success) => {
                            if (success) {
                                console.log('successfully finished playing');
                            } else {
                                console.log('playback failed due to audio decoding errors');
                            }
                        });

                        // Reduce the volume by half
                        whoosh.setVolume(0.5);

                        // Seek to a specific point in seconds
                        whoosh.setCurrentTime(0);
                    })

                    MusicControl.setNowPlaying({
                        title: 'Billie Jean',
                        artwork: item.data.thumbnail, // URL or RN's image require()
                        artist: 'Michael Jackson',
                        album: 'Thriller',
                        genre: 'Post-disco, Rhythm and Blues, Funk, Dance-pop',
                        duration:  whoosh.getDuration(), // (Seconds)
                        description: '', // Android Only
                        color: 0xffffff, // Android Only - Notification Color
                        colorized: true, // Android 8+ Only - Notification Color extracted from the artwork. Set to false to use the color property instead
                        notificationIcon: 'my_custom_icon', // Android Only (String), Android Drawable resource name for a custom notification icon
                    })

                    // Basic Controls
                    MusicControl.enableControl('play', true)
                    MusicControl.enableControl('pause', true)
                    MusicControl.enableControl('stop', false)
                    MusicControl.enableControl('nextTrack', true)
                    MusicControl.enableControl('previousTrack', false)
                }
            }}
        >
            {editMode ? (<View style={{ height: 62 }} >
                <CheckBox
                    containerStyle={{ padding: 0, justifyContent: 'center', alignItems: "center", flex: 1 }}
                    iconRight
                    size={20}
                    uncheckedColor={color.CHECKBOX_UNCHECK}
                    checkedColor={color.CHECKBOX_CHECK}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={select}
                    onPress={() => {
                        if (editMode) {
                            setSelect(!select)
                        }
                    }}
                />
            </View>) : null}
            <View
                style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', flex: 1, borderColor: color.LINE }}
            >
                <View style={styles.image}>
                    <Image
                        style={styles.image}
                        source={(item?.data.thumbnail != '') ? { uri: item?.data.thumbnail } : ImageMusicDefault}
                    />
                </View>
                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.title}
                >{item.data.name}</Text>
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