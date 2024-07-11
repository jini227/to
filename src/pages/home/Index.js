import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../assets/Index';
import FeedSection from '../../components/FeedSection';

/*
    메인
 */

const Home = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    const data = [
        {
            seq: 1,
            userName: 'user1',
            title: 'TITLE1',
            content: '1 CONTENTS.',
            imageUrl: 'https://via.placeholder.com/150',
            profileImageUrl: 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg',
        },
        {
            seq: 2,
            userName: 'user2',
            title: 'TITLE2',
            content: '2 CONTENTS.',
            imageUrl: 'https://via.placeholder.com/150',
            profileImageUrl: 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg',
        },
        {
            seq: 3,
            userName: 'user3',
            title: 'TITLE3',
            content: '3 CONTENTS.',
            imageUrl: 'https://via.placeholder.com/150',
            profileImageUrl: 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg',
        },
        {
            seq: 4,
            userName: 'user4',
            title: 'TITLE4',
            content: '4 CONTENTS.',
            imageUrl: 'https://via.placeholder.com/150',
            profileImageUrl: 'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg',
        },
    ];

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.title}
            style={styles.container}
            renderItem={({ item }) => {
                return <FeedSection item={item} />;
            }}
        />
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
