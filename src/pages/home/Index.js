import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomTab from '../../components/CustomTab';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../assets/Index';

/*
    메인
 */

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.primary,
                }}
            >
                <TouchableOpacity>
                    <Text style={{ fontSize: 36 }}>test</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: insets.bottom + 20,
                    left: 0,
                    right: 0,
                }}
            >
                <CustomTab navigation={navigation} />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
