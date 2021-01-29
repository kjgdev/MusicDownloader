import { IconClose, IconPlus } from '@assets/svg';
import color from '@config/colors';
import metric from '@config/metrics';
import React, { Component, useEffect, useState } from 'react';
import { View, Modal, StyleSheet, Alert, Text, TouchableOpacity, TextInput, TouchableHighlight, KeyboardAvoidingView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ItemCollectionOnPopup from '../ItemCollectionOnPopup';
import ItemMusic from '../ItemMusic';
import Search from '../Search';
import { useSelector, useDispatch } from 'react-redux';
import { ImageMusicDefault } from '@assets/images';


interface PopupConfig {
    visiable: boolean,
    setVisiable: any,
    data: any,
    setVisiableCreate:any
}

const PopupCollection = (props: PopupConfig) => {
    const listCollection = useSelector((state: any) => state?.listCollection)

    const renderItem = ({ item }) => (
        <ItemCollectionOnPopup data={item} setVisiable={props.setVisiable} />
    );

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visiable}>
            <View style={styles.constrainOpacity}></View>
            <TouchableOpacity
                style={styles.centeredView}
                onPress={() => { props.setVisiable(false) }}
                activeOpacity={1}
            >
                <View style={styles.modalView}>
                    <View style={{ height: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.title}>Select collection</Text>
                        <TouchableOpacity onPress={() => { props.setVisiable(false) }}>
                            <IconClose />
                        </TouchableOpacity>
                    </View>

                    <Search
                        height={46}
                        marginTop={16}
                    />
                    {/* 
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', height: 68, marginTop: 16, backgroundColor: 'red' }}
                    >
                        <View style={styles.image}>
                            <Image
                                style={styles.image}
                                source={ImageMusicDefault}
                            />
                        </View>
                        <TextInput
                            style={{ flex: 1, marginLeft:12 }}
                            placeholder='Search collection'
                            placeholderTextColor={color.PLACEHOLDER}
                            selectionColor={color.PLACEHOLDER}
                            multiline={false}
                            numberOfLines={1}
                        />
                    </View> */}

                    <View style={{ flex: 1, marginTop: 20 }}>
                        <FlatList
                            data={listCollection}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>

                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.buttonPlus}
                            onPress={() => {
                                props.setVisiable(false);
                                props.setVisiableCreate(true)
                            }}
                        >
                            <IconPlus />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal >


    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: metric.DEVICE_WIDTH - 48,
        height: metric.DEVICE_HEIGHT - 138,
        backgroundColor: color.BG_CARD,
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    title: {
        textAlign: "center",
        color: color.TITLE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: color.BG_INPUT,
        marginTop: 16,
        borderRadius: 20,
        paddingHorizontal: 16,
        height: 40,
        fontSize: 16,
        color: color.TITLE
    },
    buttonPlus: {
        height: 48,
        width: 48,
        marginTop: 16,
        borderRadius: 12,
        backgroundColor: color.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    constrainOpacity: {
        backgroundColor: '#000',
        opacity: 0.85,
        position: 'absolute',
        top: 0,
        left: 0,
        height: metric.DEVICE_HEIGHT,
        width: metric.DEVICE_WIDTH
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 12,
    },
});

export default PopupCollection;