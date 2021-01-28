import { IconSearch, IconTrash } from '@assets/svg';
import { ItemCollection } from '@components/atoms';
import Header from '@components/atoms/Header';
import color from '@config/colors';
import { COLLECTIONEDIT } from '@config/constrans';
import stylesGeneral from '@config/stylesGeneral';
import { useNavigation } from '@react-navigation/native';
import { showMusicControl, showTabbar } from '@services/redux/actions';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

const renderItem = ({ item }) => (
    <ItemCollection name={item.name} thumbnail={item.thumbnail != undefined ? item.thumbnail : ''} id={item.id} />
);

const Collection = () => {
    const dispatch = useDispatch()
    const hiddenTabbar = useSelector((state: any) => state?.hiddenTabbar)
    const listCollection = useSelector((state: any) => state?.listCollection)

    const [showButtonDone, setShowButtonDone] = useState(false)

    return (
        <View style={stylesGeneral.container}>
            <Header
                title="Collection"
                paddingLeft={16}
                buttonRight={true}
                onEdit={() => {
                    dispatch(showTabbar(true))
                    setShowButtonDone(true)
                    dispatch(showMusicControl(false))
                }}
                buttonDone={showButtonDone}
                onDone={() => {
                    dispatch(showTabbar(false))
                    setShowButtonDone(false)
                    dispatch(showMusicControl(true))
                }}
            />

            <View style={styles.searchBg}>
                <View style={styles.iconSearchBg}>
                    <IconSearch />
                </View>
                <TextInput
                    style={styles.inputSearch}
                    placeholder='Search collection'
                    placeholderTextColor={color.PLACEHOLDER}
                    selectionColor={color.PLACEHOLDER}
                    multiline={false}
                    numberOfLines={1}
                />
            </View>

            <View style={styles.constainList}>
                <FlatList
                    data={listCollection}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>

            {hiddenTabbar ? (
                <View style={styles.constainMenu}>
                    <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonEdit]}>
                        <Text style={styles.textButtonEdit}>Rename</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonEdit]}>
                        <Text style={styles.textButtonEdit}>Move</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonDelete]}>
                        <IconTrash />
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    searchBg: {
        flexDirection: 'row',
        height: 46,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 24,
        marginTop: 16,
        marginHorizontal: 16,
        backgroundColor: color.BG_INPUT
    },
    iconSearchBg: {
        height: 20,
        width: 20,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputSearch: {
        marginLeft: 12,
        marginRight: 15,
        flex: 1,
        fontSize: 16
    },
    constainList: {
        padding: 8,
        marginTop: 8,
        flex: 1,
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

export default Collection;