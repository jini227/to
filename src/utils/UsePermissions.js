import { Platform } from 'react-native';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import DeviceInfo from 'react-native-device-info';

/* 
    갤러리 && 카메라 접근 권한 요청    
*/
const PermissionsCamera = async () => {
    try {
        if (Platform.OS === 'android') {
            const grantedAndroidCheck = Number(DeviceInfo.getSystemVersion()) <= 12 ? await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE) : await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
            const grantedAndroidCameraCheck = await check(PERMISSIONS.ANDROID.CAMERA);
            if (grantedAndroidCheck === RESULTS.DENIED || grantedAndroidCameraCheck === RESULTS.DENIED) {
                const androidValueStorage =
                    Number(DeviceInfo.getSystemVersion()) <= 12 ? await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE) : await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
                const androidValueCamera = await request(PERMISSIONS.ANDROID.CAMERA);
                if (androidValueStorage === RESULTS.GRANTED && androidValueCamera === RESULTS.GRANTED) {
                    return true;
                }
                return false;
            }
            if (grantedAndroidCheck === RESULTS.GRANTED && grantedAndroidCameraCheck === RESULTS.GRANTED) {
                return true;
            }
            console.log('android permisson requestable ::: ', grantedAndroidCheck, grantedAndroidCameraCheck);
        }

        if (Platform.OS === 'ios') {
            const grantedIosCheck = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
            const grantedIosCameraCheck = await check(PERMISSIONS.IOS.CAMERA);

            if (grantedIosCheck === RESULTS.DENIED || grantedIosCameraCheck === RESULTS.DENIED) {
                const iosValue = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
                const iosValueCamera = await request(PERMISSIONS.IOS.CAMERA);

                if (iosValue === RESULTS.GRANTED && iosValueCamera === RESULTS.GRANTED) {
                    return true;
                }
                return false;
            }
            if (grantedIosCheck === RESULTS.GRANTED && grantedIosCameraCheck === RESULTS.GRANTED) {
                return true;
            }
            console.log('ios permisson requestable ::: ', grantedIosCheck, grantedIosCameraCheck);
        }
    } catch (e) {
        console.log('camera permmission error ::: ', e);
        return false;
    }
};

export default PermissionsCamera;
