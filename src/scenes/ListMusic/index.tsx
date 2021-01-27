import { IconTrash } from '@assets/svg';
import Header2 from '@components/atoms/Header2';
import ItemMusic from '@components/atoms/ItemMusic';
import color from '@config/colors';
import stylesGeneral from '@config/stylesGeneral';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

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
},

]

const renderItem = ({ item }) => (
    <ItemMusic title={item.title} show={true} checked={false} />
);


const ListMusic = () => {
    return (
        <View style={[stylesGeneral.container]}>

            <Header2 title="Favourist collection" done={true} />
            <TouchableOpacity style={[styles.button, stylesGeneral.centerAll]}>
                <Text style={styles.textButton}>Shuffle Play</Text>
            </TouchableOpacity>
            <View style={styles.constainList}>
                <FlatList
                    data={testData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.constainMenu}>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonEdit]}>
                    <Text style={styles.textButtonEdit}>Rename</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonEdit]}>
                    <Text style={styles.textButtonEdit}>Move</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonDelete]}>
                    <IconTrash/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 18,
        marginHorizontal: 90,
        borderRadius: 24,
        height: 46,
        backgroundColor: color.BUTTON_SHUFFLE
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.TITLE
    },
    constainList: {
        flex: 1,
        marginTop: 18,
        marginHorizontal: 16,
        paddingBottom:80

    },
    constainMenu: {
        height: 48,
        marginBottom: 22,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row'
    },
    buttonEdit: {
        height: 48,
        width: 90,
        borderRadius: 12,
        backgroundColor: color.BG_BUTTON,
        marginHorizontal: 8
    },
    textButtonEdit: {
        fontSize: 16,
        color: color.TITLE
    },
    buttonDelete: {
        height: 48,
        width: 48,
        borderRadius: 12,
        backgroundColor: color.BG_BUTTON_DELETE,
        marginLeft: 8,
        marginRight: 16
    },
})

export default ListMusic;
