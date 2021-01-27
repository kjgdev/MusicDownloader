import { IconSearch } from '@assets/svg';
import { ItemCollection } from '@components/atoms';
import Header from '@components/atoms/Header';
import color from '@config/colors';
import stylesGeneral from '@config/stylesGeneral';
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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
    <ItemCollection title={item.title} />
);

const Collection = () => {

    return (
        <View style={stylesGeneral.container}>
            <Header title="Collection" paddingLeft={16} />

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
                    data={testData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>

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
    }
})

export default Collection;