import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Search = () => {
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

  const handleSearch = () => {
    // Perform search logic here (e.g., fetch data from server)
    // For simplicity, we'll just filter mock data based on searchText
    const filteredResults = searchResults.filter(item =>
      item.username.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
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
    padding: 5,
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center', // 수평 중앙 정렬
  },
  searchInput: {
    height: 30,
    width: '95%', // 검색창 가로 길이를 90%로 설정
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
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

export default Search;
