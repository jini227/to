/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/Index';
import Rank from '../pages/home/rank/Index'
import Search from '../pages/home/search/Index';
import Mypage from '../pages/home/mypage/Index';

const Tab = createBottomTabNavigator();

const MainTabs= () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true, animation: 'none' }} initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Rank" component={Rank} />
      <Tab.Screen name="Mypage" component={Mypage} />
    </Tab.Navigator>
  );
}

export default MainTabs;
