import Header from '@components/atoms/Header';
import color from '@config/colors';
import stylesGeneral from '@config/stylesGeneral';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { IconCheck, IconPaste } from '@assets/svg'
import LinearGradient from 'react-native-linear-gradient';
import metric from '@config/metrics';
import { useSelector, useDispatch } from 'react-redux';
import { showMusicControl } from '@services/redux/actions';

const Home = () => {
    const showMusic = useSelector((state: any) => state?.showMusic)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("🚀 ~ file: index.tsx ~ line 14 ~ Home ~ showMusic", showMusic)

    }, [])
    return (
        <View style={stylesGeneral.container}>
            <Header title="Download Music" paddingLeft={24} />
            <View style={styles.cardView}>
                <Text style={styles.title}>Add Link</Text>
                <View style={styles.containInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="https://"
                        placeholderTextColor={color.PLACEHOLDER}
                        selectionColor={color.PLACEHOLDER}
                        multiline={false}
                        numberOfLines={1}
                    />
                    <TouchableOpacity style={[stylesGeneral.centerAll, styles.containIconPaste]}
                        onPress={() => { dispatch(showMusicControl(false)) }}
                    >
                        <IconPaste />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[stylesGeneral.centerAll, styles.button]}
                    onPress={() => { dispatch(showMusicControl(true)) }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: color.TITLE, }}>Download</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{ position: 'absolute', bottom: 0, height: 40, width: metric.DEVICE_WIDTH, marginBottom: 12 }}>
                <View style={{ flex: 1, marginHorizontal: 40, backgroundColor: color.BG_TOAST_ERROR, borderRadius: 20, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16 }}>
                    <IconCheck color={color.WHITE} />
                    <Text style={{ fontSize: 13, color: color.TITLE, marginLeft: 12 }}>Unable to connect to the internet</Text>
                </View>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        height: 201,
        marginHorizontal: 24,
        borderRadius: 24,
        backgroundColor: color.BG_CARD,
        marginTop: 27,
        paddingTop: 24,
        paddingBottom: 34,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.TITLE
    },
    containInput: {
        height: 46,
        borderRadius: 24,
        backgroundColor: color.BG_INPUT,
        marginTop: 16,
        flexDirection: 'row'
    },
    containIconPaste: {
        width: 52,
        height: 46,
        backgroundColor: color.BG_ICON_PASTE,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24
    },
    input: {
        flex: 1,
        padding: 16,
        textAlignVertical: 'center',
        color: color.TITLE,
    },
    button: {
        height: 46,
        borderRadius: 24,
        marginTop: 16,
        backgroundColor: 'red'
    },
})

export default Home;