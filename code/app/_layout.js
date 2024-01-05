import {Stack } from 'expo-router';
import { useCallback } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Layout = () =>{
    const fetchFonts = async () =>
        await Font.loadAsync({
            'DMSans-Bold' : require('../assets/fonts/DMSans-Bold.ttf'),
            'DMSans-Medium' : require('../assets/fonts/DMSans-Medium.ttf'),
            'DMSans-Regular' : require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        try {
          await fetchFonts();
          await SplashScreen.hideAsync();
        } catch (error) {
          console.error('Error loading fonts or hiding splash screen', error);
        }
      }, []);
    
      // useEffect to trigger onLayoutRootView when the component mounts
      useEffect(() => {
        onLayoutRootView();
      }, [onLayoutRootView]);
    

    return <Stack onLayout={onLayoutRootView}/>;
}



export default Layout;