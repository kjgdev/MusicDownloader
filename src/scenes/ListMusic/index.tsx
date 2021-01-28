import { IconTrash } from '@assets/svg';
import Header2 from '@components/atoms/Header2';
import ItemMusic from '@components/atoms/ItemMusic';
import color from '@config/colors';
import stylesGeneral from '@config/stylesGeneral';
import { showTabbar } from '@services/redux/actions';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

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
    <ItemMusic data={item} show={false} checked={true} />
);

const ListMusic = (props) => {
    const [showButtonDone, setShowButtonDone] = useState(false)
    const [paddingBottomFlatlist, setPaddingBottomFlatlist] = useState(10)
    const dispatch = useDispatch();
    const listMusic = useSelector((state: any) => state?.listMusic)

    const [listData, setListData] = useState([])

    useEffect(() => {
        dispatch(showTabbar(true))
        return () => dispatch(showTabbar(false))
    }, [])

    useEffect(() => {
        let data: any[] = []
        if (listMusic != undefined || listMusic.length > 0) {
            listMusic.forEach((element: any) => {
                if (element.id_collection == props.route.params.id) {
                    data.push(element)
                }
            })
        }
    }, [listMusic])

    return (
        <View style={[stylesGeneral.container]}>
            <Header2
                title="Favourist collection"
                buttonDone={showButtonDone}
                onEdit={() => {
                    setShowButtonDone(true)
                    setPaddingBottomFlatlist(70)
                }}
                onDone={() => {
                    setShowButtonDone(false)
                    setPaddingBottomFlatlist(10)
                }}
            />
            <TouchableOpacity style={[styles.button, stylesGeneral.centerAll]}>
                <Text style={styles.textButton}>Shuffle Play</Text>
            </TouchableOpacity>
            <View style={[styles.constainList, { paddingBottom: paddingBottomFlatlist }]}>
                <FlatList
                    data={listMusic}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            {showButtonDone ? (<View style={styles.constainMenu}>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonEdit]}>
                    <Text style={styles.textButtonEdit}>Rename</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonEdit]}>
                    <Text style={styles.textButtonEdit}>Move</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.buttonDelete]}>
                    <IconTrash />
                </TouchableOpacity>
            </View>) : null}
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
    },
    constainMenu: {
        height: 48,
        marginBottom: 12,
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
