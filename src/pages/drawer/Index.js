/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../../pages/home/Index';
import DrawerContents from './DrawerContents';
import Manual from './Information/Manual';
import Rule from './Information/Rule';
import FAQ from './service/faq/Index';
import Notice from './service/notice/Index';
import QNA from './service/qna/Index';
import Alarm from './settiong/Alarm';
import Privacy from './terms/Privacy';
import Service from './terms/Service';
import DeleteAccount from './DeleteAccount';
import SignOut from './SignOut';
import MainTabs from '../../navigation/Tab';


const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      screenOptions={() => ({
        headerTransparent: true,
        headerBackVisible: false,
        headerShown: false,
      })}>      
      {/* tab */}
      <Drawer.Screen name="MainTabs" component={MainTabs} />
      {/* Information */}
      <Drawer.Screen name="Manual" component={Manual} />
      <Drawer.Screen name="Rule" component={Rule} />
      {/* Service */}
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Notice" component={Notice} />
      <Drawer.Screen name="QNA" component={QNA} />
      {/* Settiong */}
      <Drawer.Screen name="Alarm" component={Alarm} />
      {/* terms */}
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="Service" component={Service} />
      {/* etc */}
      <Drawer.Screen name="DeleteAccount" component={DeleteAccount} />
      <Drawer.Screen name="SignOut" component={SignOut} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
