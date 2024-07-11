/* eslint-disable react/prop-types */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { imgs } from '../assets/Index';

const CustomTab = ({navigation}) => {

    const test = () => {
        navigation.navigate('Search')
    }
    
    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={styles.tab}>
                <FastImage source={imgs.testImg} style={styles.image} />
                <Text style={styles.text}>결제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab} onPress={test}>
                <View style={styles.middleIconContainer}>
                    <FastImage source={imgs.testImg} style={styles.image} />
                </View>
                <Text style={styles.text}>홈</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <FastImage source={imgs.testImg} style={styles.image} />
                <Text style={styles.text}>계정</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomTab;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        borderRadius: 15,
        paddingVertical: 10,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        width: 40,
        height: 40,
    },
    middleIconContainer: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: -40,
        borderRadius: 100,
        padding: 15,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    text: {
        color: '#333',
        marginTop: 4,
    },
});
