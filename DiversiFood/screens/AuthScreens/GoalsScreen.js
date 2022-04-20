import React from 'react';
import { StyleSheet, 
        Text, 
        View, 
        ScrollView,
        FlatList,
        TouchableOpacity,
        Image,
        ImageBackground,
        Dimensions

        } from 'react-native';


export default function App() {

    return (
        <ScrollView>
          <View style={{flex: 1, paddingBottom: 130}}>
            {renderHeader()}
            {renderMore()}
            {renderCalorieGraph()}
          </View>
        </ScrollView>
      );

    }