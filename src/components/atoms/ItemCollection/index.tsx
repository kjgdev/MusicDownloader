import { ImageCollectionDefault } from '@assets/images';
import color from '@config/colors';
import { LISTMUSIC } from '@config/constrans';
import metric from '@config/metrics';
import stylesGeneral from '@config/stylesGeneral';
import { useNavigation } from '@react-navigation/native';
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemCollection = (item: any) => {
    const navigation = useNavigation();

    useEffect(()=>{
        console.log("🚀 ~ file: index.tsx ~ line 12 ~ ItemCollection ~ item", item.id)
    },[])

    return (
        <TouchableOpacity
            style={[styles.contain, {}]}
            onPress={() => { navigation.navigate(LISTMUSIC,{id:item.id}) }}
        >
             <Image
                style={styles.image}
                source={(item.thumbnail != '') ? { uri: item.thumbnail } : ImageCollectionDefault}
            />
            <View style={[styles.containOpacity, stylesGeneral.centerAll]}></View>
           
            <Text style={styles.title}>
                {item.name}
            </Text>

            {/* <View style={[styles.containClick, stylesGeneral.centerAll]}>
                <View style={[stylesGeneral.centerAll, { height: 60, width: 60, backgroundColor: '#Fff', borderRadius: 30 }]}>
                    <IconCheck color="#000" />
                </View>
            </View> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contain: {
        borderRadius: 12,
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        margin: 8,
    },
    title: {
        fontSize: 16,
        color: color.TITLE,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginHorizontal: 16,
        marginBottom: 12
    },
    containOpacity: {
        borderRadius: 12,
        flex: 1,
        backgroundColor: "#000",
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.2
    },
    containClick: {
        borderRadius: 12,
        flex: 1,
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.8
    },
    image: {
        height: (metric.DEVICE_WIDTH / 2 - 24),
        width: (metric.DEVICE_WIDTH / 2 - 24),
        borderRadius: 12,
    },
})

export default ItemCollection;