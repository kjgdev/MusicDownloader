import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLLECTIONS, COLLECTIONSTACK, HOME, LISTMUSIC, PLAYMUSIC, SETTINGS, TABNAVIGATION } from '@config/constrans';
import { Collection, Home, ListMusic, PlayMusic, Settings } from '@scenes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from '@components/atoms';
import Animated, { Easing } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';
import { dboCollection, dboMusic } from '@services/sqlite';
import { useDispatch } from 'react-redux';
import { loadCollection, loadMusic } from '@services/redux/actions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackCollection = createStackNavigator();


const CollectionStack = () => {
    return (
        <StackCollection.Navigator initialRouteName={COLLECTIONS} headerMode="none" >
            <StackCollection.Screen name={COLLECTIONS} component={Collection} ></StackCollection.Screen>
            <StackCollection.Screen
                name={LISTMUSIC}
                component={ListMusic}
                options={{
                    animationEnabled: false,
                }}
            ></StackCollection.Screen>
            <StackCollection.Screen name={PLAYMUSIC} component={PlayMusic}></StackCollection.Screen>
        </StackCollection.Navigator>
    )
}

const TabStack = () => {
    return (
        <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
            <Tab.Screen name={HOME} component={Home} ></Tab.Screen>
            <Tab.Screen name={COLLECTIONSTACK} component={CollectionStack}></Tab.Screen>
            <Tab.Screen name={SETTINGS} component={Settings}></Tab.Screen>
        </Tab.Navigator>

    )
}

const Navigator = () => {
    const [firstLoad, setFirstLoad] = useState<any>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.getItem('firstOpen').then(res => {
            if (res == null) {
                AsyncStorage.setItem('firstOpen', 'true')
                setFirstLoad(true)
            }
            else {
                setFirstLoad(false)
            }
        })
        loadData()
    }, [])

    const loadData = () => {
        dboCollection.SelectAll().then((res: any) => {
            dispatch(loadCollection(res))
        })
        dboMusic.SelectAll().then((res: any) => {
            dispatch(loadMusic(res))
        })
    }

    if (firstLoad == null) {
        return null;
    }
    else if (firstLoad == true) {
        dboCollection.CreateTable().then((res: any) => {
            if (res.status == 200) {
                dboCollection.InsertItem({ name: "Download", thumbnail: "" }).then((res: any) => {
                    if (res.status == 200) {
                        console.log('Insert collection success')
                    }
                })
            }
        })
        dboMusic.CreateTable().then((res: any) => {
            if (res.status == 200) console.log('Create table music success')
        })

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={TABNAVIGATION} headerMode="none"  >
                    <Stack.Screen name={TABNAVIGATION} component={TabStack}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={TABNAVIGATION} headerMode="none"  >
                    <Stack.Screen name={TABNAVIGATION} component={TabStack}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigator;