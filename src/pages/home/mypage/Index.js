import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const MyPage = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([
    { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
    // Add more mock data as needed
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <FastImage source={{ uri: item.imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
  
  // 하드코딩된 사용자 데이터
  const user = {
    username: 'User123',
    profileImageUrl: 'https://via.placeholder.com/150', // 프로필 이미지 URL
    posts: 100,
    followers: 200,
    following: 150,
  };
  

  return (
    <View style={styles.container}>
      {/* 상단 프로필 정보 */}
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: user.profileImageUrl }}
        />
        <View style={styles.profileText}>
          <Text style={styles.username}>{user.username}</Text>
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
        <Text style={styles.sectionTitle}>소개</Text>
        <Text style={styles.sectionContent}>
          안녕하세요! 반갑습니다. 저는 React Native를 공부하고 있는 개발자입니다.
        </Text>
        {/* 다른 섹션 추가 */}
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3} // 여러 열로 표시
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
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
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  statContainer: {
    alignItems: 'center',
  },
  stat: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20
  },
  statLabel: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  extraInfo: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC', // 선의 색상=
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
    marginVertical: -4
  },
  image: {
    width: '100%',
    aspectRatio: 1, // 사진을 정사각형으로 설정
    borderRadius: 5,
  },
});

export default MyPage;
