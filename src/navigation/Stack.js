/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mypage from '../pages/home/mypage/Index';
import Search from '../pages/home/search/Index';
import SearchDetail from '../pages/home/search/Detail';
import User from '../pages/user/Index';
import PhoneAuthConfirm from '../pages/user/PhoneAuthConfirm';
import PhoneAuthRequest from '../pages/user/PhoneAuthRequest';
import SignIn from '../pages/user/SignIn';
import SignUp from '../pages/user/SignUp';
import Terms from '../pages/user/Terms';
import MainDrawer from '../pages/drawer/Index';
import AddPost from '../pages/home/mypage/AddPost';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }} initialRouteName="Home">
            {/* Drawer */}
            <Stack.Screen name="MainDrawer" component={MainDrawer} />
            {/* Mypage */}
            <Stack.Screen name="Mypage" component={Mypage} />
            {/* Search */}
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SearchDetail" component={SearchDetail} />
            {/* User */}
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="PhoneAuthConfirm" component={PhoneAuthConfirm} />
            <Stack.Screen name="PhoneAuthRequest" component={PhoneAuthRequest} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="AddPost" component={AddPost} />
        </Stack.Navigator>
    );
};

export default MainStack;
