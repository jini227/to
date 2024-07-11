import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';

const Rank = ({ navigation }) => {
    const [favoriteResults, setFavoriteResults] = useState([
        { id: 1, userName: 'aaa--', profileImageUrl: 'https://via.placeholder.com/150', count: 46846 },
        { id: 2, userName: 'aaaa-', profileImageUrl: 'https://via.placeholder.com/150', count: 16514 },
        { id: 3, userName: 'aaaaa', profileImageUrl: 'https://via.placeholder.com/150', count: 8512 },
        { id: 4, userName: '44444', profileImageUrl: 'https://via.placeholder.com/150', count: 852 },
        { id: 3, userName: '55555', profileImageUrl: 'https://via.placeholder.com/150', count: 812 },
        // Add more mock data as needed
    ]);
    const [likeResults, setLiteResults] = useState([
        {
            id: 1,
            userName: 'sss--',
            title: '책상이 어쩌구 저쩌구rrr',
            profileImageUrl: 'https://via.placeholder.com/150',
            imageUrl: 'https://via.placeholder.com/150',
            content: 'asdfsdf34545sdf',
            count: 651313,
        },
        {
            id: 2,
            userName: 'ssss-',
            title: '좋아요 2위 피드',
            profileImageUrl: 'https://via.placeholder.com/150',
            imageUrl: 'https://via.placeholder.com/150',
            content: 'asdfsdf34545sdf',
            count: 14312,
        },
        {
            id: 3,
            userName: 'sssss',
            title: '좋아요 3위 피드',
            profileImageUrl: 'https://via.placeholder.com/150',
            imageUrl: 'https://via.placeholder.com/150',
            content: 'asdfsdf34545sdf',
            count: 1236,
        },
        {
            id: 4,
            userName: '444444',
            title: '좋아요 4위 피드',
            profileImageUrl: 'https://via.placeholder.com/150',
            imageUrl: 'https://via.placeholder.com/150',
            content: 'asdfsdf34545sdf',
            count: 236,
        },
        {
            id: 5,
            userName: '55555555',
            title: '좋아요 5위 피드',
            profileImageUrl: 'https://via.placeholder.com/150',
            imageUrl: 'https://via.placeholder.com/150',
            content: 'asdfsdf34545sdf',
            count: 136,
        },
        // Add more mock data as needed
    ]);

    const [activeTab, setActiveTab] = useState('favorites'); // 현재 활성 탭 상태
    const [expandedId, setExpandedId] = useState(null); // 펼쳐진 아이템의 id

    // LayoutAnimation 설정 (Android에서 사용하기 위해 필요)
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // expandedId 상태가 변경될 때마다 LayoutAnimation 적용
    React.useEffect(() => {
        LayoutAnimation.easeInEaseOut();
    }, [expandedId]);

    const toggleExpand = id => {
        setExpandedId(expandedId === id ? null : id);
    };

    const setFavoriteItem = ({ item, index }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Detail', { item })}>
            <View style={styles.rankContainer}>
                <Text style={[styles.rank, index === 0 ? styles.gold : index === 1 ? styles.silver : null]}>{index + 1}</Text>
            </View>
            <Image source={{ uri: item.profileImageUrl }} style={styles.profileImage} />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.userName}</Text>
                <Text style={styles.count}>{formatNumber(item.count)}</Text>
            </View>
        </TouchableOpacity>
    );

    const setLikeItem = ({ item, index }) => (
        <View>
            <TouchableOpacity style={styles.itemContainer} onPress={() => toggleExpand(item.id)}>
                <View style={styles.rankContainer}>
                    <Text style={[styles.rank, index === 0 ? styles.gold : index === 1 ? styles.silver : null]}>{index + 1}</Text>
                </View>
                <Image source={{ uri: item.profileImageUrl }} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.title} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text style={styles.count}>{formatNumber(item.count)}</Text>
                </View>
            </TouchableOpacity>
            {expandedId === item.id && (
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: item.imageUrl }} />
                </View>
            )}
        </View>
    );

    // 숫자를 천 단위로 구분하는 포맷으로 변환하는 함수
    const formatNumber = number => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={[styles.tab, activeTab === 'favorites' && styles.activeTab]} onPress={() => setActiveTab('favorites')}>
                    <Text style={[styles.tabText, activeTab === 'favorites' && styles.activeTabText]}>즐겨찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, activeTab === 'likes' && styles.activeTab]} onPress={() => setActiveTab('likes')}>
                    <Text style={[styles.tabText, activeTab === 'likes' && styles.activeTabText]}>좋아요</Text>
                </TouchableOpacity>
            </View>
            {activeTab === 'favorites' ? (
                <FlatList data={favoriteResults} renderItem={setFavoriteItem} keyExtractor={item => item.id.toString()} />
            ) : (
                <FlatList data={likeResults} renderItem={setLikeItem} keyExtractor={item => item.id.toString()} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // borderRadius: 5,
        // borderWidth: 1,
        // borderColor: '#ddd',
        // marginBottom: 10,
        padding: 5,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        marginBottom: 10,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007AFF',
    },
    tabText: {
        fontSize: 16,
        color: '#888888',
    },
    activeTabText: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    rankContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        marginRight: 10,
    },
    rank: {
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 18,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        // marginTop: 10,
        marginBottom: 10,
    },
    count: {
        fontSize: 14,
        color: '#666666',
        paddingRight: 20,
    },
    gold: {
        color: '#FFD700', // 금색
        fontSize: 28,
    },
    silver: {
        color: '#C0C0C0', // 은색
        fontSize: 28,
    },
});

export default Rank;
