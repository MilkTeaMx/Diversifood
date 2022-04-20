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

import {BarChart} from 'react-native-chart-kit'

const data = [
  {
    name: "name1",
    id: 1,
    image: require('../../images/exFood.jpg'),
    flag: require('../../images/americanFlag.jpg')

  },
  {
    name: "name2",
    id: 2,
    image: require('../../images/exFood.jpg'),
    flag: require('../../images/americanFlag.jpg')

  },
  {
    name: "name3",
    id: 3,
    image: require('../../images/exFood.jpg'),
    flag: require('../../images/americanFlag.jpg')

  },
]

const calorieData = {
  labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [1600, 2100, 1900, 3200, 1200, 2000, 1900],
    },
  ],
};
export default function App({navigation}) {

  const [popular, setPopular] = React.useState(popular)

  function renderHeader() {

    const renderItem = ({item, index}) => (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: 10,
          paddingHorizontal: 15,
          marginLeft: index == 0 ? 12 : 0,
          marginRight: 30,
          borderRadius: 10,
          backgroundColor: '#FFF',

        }}>

        <View style={{flexDirection: 'row'}}>
          <View>
           
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                marginTop: 3,
                width: 30,
                height: 30,
              }} />
              
          </View>

          <View style={{ marginLeft: 10}}> 
              <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, fontFamily: "Avenir"}}> Pancakes </Text>
              <Text> Cuisine: Western </Text>
          </View>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>

        <Image
              source={item.flag}
              resizeMode="cover"
              style={{

                marginTop: 3,
                width: 80,
                height: 50,
                
              }} />
        </View>
 
      </TouchableOpacity>

    )


    return (
      <View style={{width: "100%", height: 290, shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4,}}>
        <ImageBackground 
          source={require('../../images/greenWallpaper1.png')} 
          style={{flex: 1, alignItems: 'center'}}>

            {/* Header */}
            <View style={{marginTop: 10, width: '100%', alignItems: "flex-end", paddingHorizontal: 5}}>
              <TouchableOpacity onPress={() => navigation.navigate('Goals Screen')}
                                style={{width: 35, height: 35, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../images/to-do-list.png')} resizeMode="contain" style={{flex: 1}}/>
              </TouchableOpacity> 
            </View>
            
            {/* Balance */}
            <View
              style={{alignItems: 'center',
                      justifyContent: 'center'}}>
              <Text style={{ color: "#FFF", fontWeight: "bold"}}>- Explore the Cuisines of the World -</Text>
              <Text style={{ color: "#FFF", fontSize: 50, fontWeight: "bold", marginTop: 10}}> # OF DISHES? </Text>
              <Text style={{ color: "#FFF", fontSize: 10, fontWeight: "bold"}}> Dishes Experienced </Text>
            </View>

            {/* Popular Dishes */}
            <View
              style={{position: 'absolute', bottom: "-18%"}}>
              <Text style={{ marginLeft: 10, color: "#FFF", fontSize: 20, fontWeight: "bold", }}> Popular </Text>
              <FlatList
                contentContainerStyle={{marginTop: 20}}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}>

              </FlatList>

            </View>


        </ImageBackground>


      </View>
    )
  }

  function renderMore() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 70,
          
          marginHorizontal: 10, 
          paddingVertical: 10,
          backgroundColor: "#FFF",
          borderRadius: 10,
          ...styles.shadow
        }}>
        <Image source={require('../../images/leafLogo.png')} style={{marginLeft: 10, width:50, height: 50}}/>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "bold", fontFamily: "Avenir-Oblique"}}>See more healthy options</Text>
          <Text style={{marginLeft: 10, fontSize: 12, fontFamily: "Avenir"}} >Try some dishes created by fellow users!</Text>
        </View>
        <Image source={require('../../images/rightArrow.png')} style={{width: 35, height: 35, left: 60}}/>
      </TouchableOpacity>
    )
  }

  function renderCalorieGraph() {
    return (
      <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          
          marginHorizontal: 5, 
          paddingVertical: 10,
          backgroundColor: "#FFF",
          borderRadius: 10,
          ...styles.shadow
        }}>
          <View>

            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: "bold", fontFamily: "Avenir", marginBottom: 5}}>
              - Your Calorie Tracker -
            </Text>

            <BarChart
            data={calorieData}
            width={Dimensions.get("window").width * 0.98}
            height={200}
            yAxisLabel={'Cal '}
            chartConfig={{
              backgroundColor: '#357342',
              backgroundGradientFrom: '#7ea821',
              backgroundGradientTo: '#5bd93c',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 1,
            }
          }}/>
          </View>

      

      </View>
      
    )
 
  }

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
  }

});


/* <View style={styles.container}>
<Text>My Home Screen!</Text>
<StatusBar style="auto" />
</View> */