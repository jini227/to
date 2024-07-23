import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const MyPage = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([
        { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
        { id: 5, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
        { id: 6, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
        { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
        { id: 5, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
        { id: 6, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
        { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
        { id: 5, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
        { id: 6, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
        // Add more mock data as needed
    ]);

    // 하드코딩된 사용자 데이터와 공개 여부 플래그
    const user = {
        username: 'user1',
        profileImageUrl: 'https://via.placeholder.com/150', // 프로필 이미지 URL
        posts: 165,
        followers: 2624,
        following: 1138,
        job: '백엔드 개발자',
        company: '삼성물산',
        team: '혁신개발팀',
        address: '강남구 어저구 저쩌구 354-1. 22층',
        jobVisible: true,
        companyVisible: true,
        teamVisible: true,
        addressVisible: true,
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <FastImage source={{ uri: item.imageUrl }} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* 상단 프로필 정보 */}
            <View style={styles.profileInfo}>
                <Image style={styles.profileImage} source={{ uri: user.profileImageUrl }} />
                <View style={styles.profileText}>
                    {/* <Text style={styles.username}>{user.username}</Text> */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statContainer}>
                            <Text style={styles.stat}>{user.posts}</Text>
                            <Text style={styles.statLabel}>게시물</Text>
                        </View>
                        <View style={styles.statContainer}>
                            <Text style={styles.stat}>{user.followers}</Text>
                            <Text style={styles.statLabel}>팔로워</Text>
                        </View>
                        <View style={styles.statContainer}>
                            <Text style={styles.stat}>{user.following}</Text>
                            <Text style={styles.statLabel}>팔로잉</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* 추가적인 마이페이지 정보 */}
            <View style={styles.extraInfo}>
                {user.jobVisible && <Text style={styles.sectionContent}>직업: {user.job}</Text>}
                {user.companyVisible && <Text style={styles.sectionContent}>회사: {user.company}</Text>}
                {user.teamVisible && <Text style={styles.sectionContent}>소속팀: {user.team}</Text>}
                {user.addressVisible && <Text style={styles.sectionContent}>직장주소: {user.address}</Text>}
            </View>
            <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={3} // 여러 열로 표시
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.flatListContainer}
            />
            {/* + 아이콘 */}
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddPost')}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
        position: 'relative', // 부모 컨테이너에 relative 포지션 추가
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileText: {
        marginLeft: 20,
        flex: 1, // 텍스트 영역이 남은 공간을 차지하도록 설정
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    statContainer: {
        alignItems: 'center',
        flex: 1, // 각 stat 컨테이너가 동일한 너비를 가지도록 설정
    },
    stat: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 16,
        color: '#666666',
        marginTop: 5,
    },
    extraInfo: {
        marginBottom: 20,
    },
    sectionContent: {
        fontSize: 16,
        marginBottom: 10, // 항목 사이에 간격 추가
    },
    flatListContainer: {
        paddingVertical: 5,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 1,
        alignItems: 'center',
        marginVertical: -4,
    },
    image: {
        width: '100%',
        aspectRatio: 1, // 사진을 정사각형으로 설정
        borderRadius: 5,
    },
    addButton: {
        position: 'absolute', // 절대 위치 설정
        bottom: 20, // 하단으로부터 20 포인트 떨어진 위치
        left: 20, // 왼쪽으로부터 20 포인트 떨어진 위치
        backgroundColor: '#007AFF',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // 안드로이드 그림자 효과
        zIndex: 100, // 다른 요소 위에 표시되도록 zIndex 설정
    },
    addButtonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default MyPage;
