import color from '@config/colors';
import metric from '@config/metrics';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Header = (props: any) => {
    return (
        <View style={[styles.container, { paddingHorizontal: props.paddingLeft }]}>
            <Text style={styles.title}>{props.title}</Text>

            {props.done && props.buttonRight ? (<TouchableOpacity>
                <Text style={{ fontSize: 16, color: color.TITLE }}>Done</Text>
            </TouchableOpacity>) : (<TouchableOpacity>
                <Text style={{ fontSize: 16, color: color.TITLE }}>Edit</Text>
            </TouchableOpacity>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 19,
        height: 30,
        width: metric.DEVICE_WIDTH,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        color: color.TITLE,
        fontWeight: 'bold',

    }
})

export default Header;