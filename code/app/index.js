import { useState } from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import { Stack,useRouter } from 'expo-router';

import {COLORS, icons,images,SIZES } from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';

const Home = () =>{
    return (
        <SafeAreaView style={{flex:1,backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={
                {
                    headerStyle : {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible : false,
                    headerLeft:()=>(
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%"></ScreenHeaderBtn>
                    )
                    ,headerRight:()=>(
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%"></ScreenHeaderBtn>
                    ),
                    headerTitle:""
                }
            }/>

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                styles = {{
                    flex:1,
                    padding : SIZES.medium
                }}
                >
                    <Welcome>  </Welcome>
                    <Popularjobs></Popularjobs>
                    <Nearbyjobs></Nearbyjobs>


                </View>
            </ScrollView>

            
        </SafeAreaView>
    )
}

export default Home;    