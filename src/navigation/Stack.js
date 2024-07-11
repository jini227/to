/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home/Index';
import Account from '../pages/home/Account/Index';
import Info from '../pages/home/Account/info/Index';
import Record from '../pages/home/Account/\brecord/Index';
import RecordDetail from '../pages/home/Account/\brecord/Detail';
import Payment from '../pages/home/payment/Index';
import Search from '../pages/home/search/Index';
import SearchDetail from '../pages/home/search/Detail';
import SmartHub from '../pages/home/smartHub/Index';
import QR from '../pages/home/smartHub/qr/Index';
import QRInput from '../pages/home/smartHub/qr/Input';
import User from '../pages/user/Index';
import PhoneAuthConfirm from '../pages/user/PhoneAuthConfirm';
import PhoneAuthRequest from '../pages/user/PhoneAuthRequest';
import SignIn from '../pages/user/SignIn';
import SignUp from '../pages/user/SignUp';
import Terms from '../pages/user/Terms';
import MainDrawer from '../pages/drawer/Index';
import FAQDetail from '../pages/drawer/service/faq/Detail';
import NoticeDetail from '../pages/drawer/service/notice/Detail';
import QNADetail from '../pages/drawer/service/qna/Detail';
import QNARegist from '../pages/drawer/service/qna/Regist';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }} initialRouteName='Home'>
            {/* Drawer */}
            <Stack.Screen name="MainDrawer" component={MainDrawer} />
            <Stack.Screen name="FAQDetail" component={FAQDetail} />
            <Stack.Screen name="NoticeDetail" component={NoticeDetail} />
            <Stack.Screen name="QNADetail" component={QNADetail} />
            <Stack.Screen name="QNARegist" component={QNARegist} />
            {/* Home */}
            <Stack.Screen name="Home" component={Home} />
            {/* Account */}
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Record" component={Record} />
            <Stack.Screen name="RecordDetail" component={RecordDetail} />
            {/* Payment */}
            <Stack.Screen name="Payment" component={Payment} />
            {/* Search */}
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SearchDetail" component={SearchDetail} />
            {/* SmartHub */}
            <Stack.Screen name="SmartHub" component={SmartHub} />
            <Stack.Screen name="QR" component={QR} />
            <Stack.Screen name="QRInput" component={QRInput} />
            {/* User */}
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="PhoneAuthConfirm" component={PhoneAuthConfirm} />
            <Stack.Screen name="PhoneAuthRequest" component={PhoneAuthRequest} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Terms" component={Terms} />
        </Stack.Navigator>
    );
};

export default MainStack;
