import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AddPost = ({ route, navigation }) => {
    const { obj } = route.params;
    console.log('test obj ::: ', obj);

    return (
        <View>
            <Text>AddPost</Text>
        </View>
    );
};

export default AddPost;

const styles = StyleSheet.create({});
