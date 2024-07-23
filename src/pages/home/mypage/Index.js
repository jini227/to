import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Platform, Linking, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';
import DeviceInfo from 'react-native-device-info';
import ActionSheet from '../../../components/ActionSheet';

const MyPage = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [actionSheet, setActionSheet] = React.useState(false);
    const [searchResults, setSearchResults] = useState([
        { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
        { id: 5, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
        { id: 6, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
        { id: 7, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 8, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 9, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 10, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
        { id: 11, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
        { id: 12, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
        { id: 13, username: 'user1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 14, username: 'user2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 15, username: 'user3', imageUrl: 'https://via.placeholder.com/150' },
        { id: 16, username: 'user4', imageUrl: 'https://via.placeholder.com/150' },
        { id: 17, username: 'user5', imageUrl: 'https://via.placeholder.com/150' },
        { id: 18, username: 'user6', imageUrl: 'https://via.placeholder.com/150' },
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

    const closeActionSheet = () => setActionSheet(false);

    const actionItems = [
        {
            id: 1,
            label: '카메라',
            onPress: async () => {
                try {
                    let permission;
                    if (Platform.OS === 'ios') {
                        const result = await request(PERMISSIONS.IOS.CAMERA);
                        permission = result === RESULTS.GRANTED;
                    }
                    if (Platform.OS === 'android') {
                        const result = await request(PERMISSIONS.ANDROID.CAMERA);
                        permission = result === RESULTS.GRANTED;
                    }
                    if (permission) {
                        onCamera();
                        return;
                    }
                    Alert.alert('이 앱은 카메라 접근 권한 허용이 필요합니다.', '앱 설정 화면을 열어서 권한을 확인해주세요.', [
                        {
                            text: '네',
                            onPress: () => Linking.openSettings(),
                        },
                        {
                            text: '아니오',
                            onPress: () => closeActionSheet(),
                            style: 'cancel',
                        },
                    ]);
                } catch (e) {
                    console.log('permission error ::: ', e);
                }
            },
        },
        {
            id: 2,
            label: '앨범',
            onPress: async () => {
                try {
                    let permission;
                    if (Platform.OS === 'ios') {
                        const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
                        permission = result === RESULTS.GRANTED;
                    }
                    if (Platform.OS === 'android') {
                        const result = Number(DeviceInfo.getSystemVersion()) <= 12 ? await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE) : await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
                        permission = result === RESULTS.GRANTED;
                    }
                    if (permission) {
                        onGallery();
                        return;
                    }
                    Alert.alert('이 앱은 앨범 접근 권한 허용이 필요합니다.', '앱 설정 화면을 열어서 권한을 확인해주세요.', [
                        {
                            text: '네',
                            onPress: () => Linking.openSettings(),
                        },
                        {
                            text: '아니오',
                            onPress: () => closeActionSheet(),
                            style: 'cancel',
                        },
                    ]);
                } catch (e) {
                    console.log('permission error ::: ', e);
                }
            },
        },
    ];

    const onResponseCamera = async response => {
        try {
            const resizedImage = await ImageResizer.createResizedImage(response.path, 1280, 720, response.mime.includes('jp') ? 'JPEG' : 'PNG', 100, 0);
            const name = response.path.split('/').pop();
            const obj = {
                name: name,
                type: response.mime,
                uri: Platform.OS === 'android' ? resizedImage.uri : resizedImage.uri.replace('file://', ''),
            };
            navigation.navigate('AddPost', { obj });
        } catch (error) {
            console.error('Error processing image', error);
        }
    };

    const onResponseGallery = async response => {
        const uploadPromises = response.map(async item => {
            try {
                const parts = item.path.split('/');
                const name = parts[parts.length - 1];
                const resizedImage = await ImageResizer.createResizedImage(item.path, 1280, 720, item.mime.includes('jp') ? 'JPEG' : 'PNG', 100, 0);

                const obj = {
                    name: name,
                    type: item.mime,
                    uri: Platform.OS === 'android' ? resizedImage.uri : resizedImage.uri.replace('file://', ''),
                };
                navigation.navigate('AddPost', { obj });
            } catch (error) {
                console.error('Error processing image', error);
            }
        });

        await Promise.all(uploadPromises);
    };

    const onCamera = () => {
        ImagePicker.openCamera({ mediaType: 'photo', includeBase64: true }).then(response => {
            onResponseCamera(response);
            closeActionSheet();
        });
    };

    const onGallery = () => {
        ImagePicker.openPicker({ multiple: true, mediaType: 'photo', includeBase64: true }).then(response => {
            onResponseGallery(response);
            closeActionSheet();
        });
    };

    return (
        <View style={styles.container}>
            <Modal
                statusBarTranslucent
                isVisible={actionSheet}
                style={styles.bottomModal}
                useNativeDriver
                hideModalContentWhileAnimating
                onBackdropPress={closeActionSheet}
                onBackButtonPress={closeActionSheet}
            >
                <ActionSheet actionItems={actionItems} onCancel={closeActionSheet} />
            </Modal>

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
            <TouchableOpacity style={styles.addButton} onPress={() => setActionSheet(true)}>
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
    bottomModal: { margin: 0, justifyContent: 'flex-end' },
});

export default MyPage;
