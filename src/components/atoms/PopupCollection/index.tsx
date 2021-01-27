import { IconClose, IconPlus } from '@assets/svg';
import color from '@config/colors';
import metric from '@config/metrics';
import React, { Component, useState } from 'react';
import { View, Modal, StyleSheet, Alert, Text, TouchableOpacity, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ItemMusic from '../ItemMusic';
import Search from '../Search';

interface PopupConfig {
    visiable: boolean
}

let defaultProps: PopupConfig = {
    visiable: true
}

const testData = [{
    id: "1",
    title: "Download"
}, {
    id: "2",
    title: "Favourist"
}, {
    id: "3",
    title: "Lorem ipsum dolor sit"
}, {
    id: "4",
    title: "Love myself"
}, {
    id: "5",
    title: "DOwnload"
}, {
    id: "6",
    title: "DOwnload"
}, {
    id: "7",
    title: "DOwnload"
}, {
    id: "8",
    title: "DOwnload"
}, {
    id: "9",
    title: "DOwnload"
}, {
    id: "10",
    title: "DOwnload"
},]

const renderItem = ({ item }) => (
    <ItemMusic title={item.title} show={false} />
);

const PopupCollection = (props: PopupConfig = defaultProps) => {
    const [visiable, setVisiable] = useState(props?.visiable)

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={visiable}
        >

            <View style={styles.constrainOpacity}></View>
            <TouchableOpacity
                style={styles.centeredView}
                onPress={() => { setVisiable(false) }}
                activeOpacity={1}
            >
                <View style={styles.modalView}>
                    <View style={{ height: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.title}>Select collection</Text>
                        <TouchableOpacity onPress={() => { setVisiable(false) }}>
                            <IconClose />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 20, flexDirection: 'row', marginTop: 12, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: "#8c8c8c" }}>Are you sure want to delete?</Text>
                    </View>

                    <Search
                        height={46}
                        marginTop={16}
                    />

                    <View style={{flex: 1, marginTop: 20 }}>
                        <FlatList
                            data={testData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.buttonPlus}>
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
    }
});

export default PopupCollection;