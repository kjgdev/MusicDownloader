import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from '@components/atoms';
import { HOME, COLLECTIONS, SETTINGS } from '@config/constrans';
import { Home, Collection, Settings } from '@scenes'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props}/>}>
            <Tab.Screen name={HOME} component={Home} ></Tab.Screen>
            <Tab.Screen name={COLLECTIONS} component={Collection}></Tab.Screen>
            <Tab.Screen name={SETTINGS} component={Settings}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigator;