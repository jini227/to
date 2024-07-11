import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const FeedSection = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Image style={styles.profileImage} source={{ uri: item.profileImageUrl }} />
                <Text style={styles.userName}>{item.userName}</Text>
            </View>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        padding: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 30,
        borderRadius: 20, // 반 원형 이미지를 만듭니다.
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    content: {
        fontSize: 14,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
});

export default FeedSection;
