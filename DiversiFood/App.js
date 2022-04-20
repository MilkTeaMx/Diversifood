import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import HomeScreen from "./screens/AuthScreens/HomeScreen";
import SplashScreen from "./screens/AuthScreens/SplashScreen";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import IngredientsScreen from './screens/MainScreens/IngredientsScreen'
import Firebasekeys from "./config";
// import * as firebase from "firebase";
// import "firebase/firestore";
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

let firebaseConfig = Firebasekeys;

if (!firebase.apps.length) {
  const firebaseApp = initializeApp(firebaseConfig);
}

const inactiveColor = '#8E8E8E'
const themecolor = '#357342'
const tabcolor = '#fff'
const Tab = createMaterialBottomTabNavigator();
const Auth = createStackNavigator();
const Home = createStackNavigator();
const Ingredients = createStackNavigator();

const IngredientsScreenNavigator = ({ navigation }) => {
  return (
    <Home.Navigator
      screenOptions={{
          headerShown:false
        }}
      
      initialRouteName="Ingredients"
    > 
      <Home.Screen name="Ingredients Screen" component={IngredientsScreen}
      options={{
        title: 'Home',
        headerShown: true,
          headerStyle: {
            backgroundColor: `${themecolor}`
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff'
          },
          headerBackTitleStyle: {
            color: `${inactiveColor}`
          },
          headerTintColor: `${inactiveColor}`,
        }}
       />
      <Home.Screen name="Pollen Heatmap" component={IngredientsScreen} options={{
          title: 'Heatmap',
          headerShown: true,
            headerStyle: {
              backgroundColor: `${themecolor}`
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff'
            },
            headerBackTitleStyle: {
              color: `${inactiveColor}`
            },
            headerTintColor: `${inactiveColor}`,
          }}/>
    </Home.Navigator>
  );
};

const HomeScreenNavigator = ({ navigation }) => {
  return (
    <Home.Navigator
      screenOptions={{
          headerShown:false
        }}
      
      initialRouteName="Home Screen"
    >
      <Home.Screen name="Home Screen" component={HomeScreen}
      options={{
        title: 'Home',
        headerShown: true,
          headerStyle: {
            backgroundColor: `${themecolor}`
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff'
          },
          headerBackTitleStyle: {
            color: `${inactiveColor}`
          },
          headerTintColor: `${inactiveColor}`,
        }}
       />
      <Home.Screen name="Pollen Heatmap" component={IngredientsScreen} options={{
          title: 'Heatmap',
          headerShown: true,
            headerStyle: {
              backgroundColor: `${themecolor}`
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff'
            },
            headerBackTitleStyle: {
              color: `${inactiveColor}`
            },
            headerTintColor: `${inactiveColor}`,
          }}/>
    </Home.Navigator>
  );
};

function MainTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        sceneAnimationEnabled="true"
        activeColor={tabcolor}
        inactiveColor={inactiveColor}
        barStyle={{ backgroundColor: `${themecolor}`, bottomPadding: 10 }}
        shifting={true}
      >
        <Tab.Screen
          name="Dashboard"
          component={HomeScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                size={26}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Ingredients Screen"
          component={IngredientsScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="bell"
                size={24}
                color={focused ? tabcolor : inactiveColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function AuthNavigator() {
  return (
    <NavigationContainer>
      <Auth.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="Splash" component={SplashScreen} options={{}} />
        <Auth.Screen name="Login" component={LoginScreen} options={{}} />
        <Auth.Screen name="Register" component={RegisterScreen} options={{}} />
        {/* <Auth.Screen name="MainTabs" component={MainTabs}
       options={{
         headerTitle: "Complaint Form Submission",
       }}
    /> */}
      </Auth.Navigator>
    </NavigationContainer>
  );
}

export default function App2() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(); // Handle user state changes
  const [app, setApp] = useState();
  const [subscriber, setSubscriber] =  useState();

  function onAuthStateChangedCentral(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      const firebaseApp = initializeApp(firebaseConfig);
      setApp(firebaseApp)
    }
    const auth = getAuth(app);
    onAuthStateChanged(auth, user=>{
      const sub = onAuthStateChangedCentral(user)
      setSubscriber(sub)
    });
    return subscriber
  }, [])
  if (initializing) return null;
  console.log(user)
  if (!user) {
    return <AuthNavigator />;
  }

  return <MainTabs />;
}