import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image, ImageBackground } from 'react-native';
//import Button from {} 

export default function Home() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

        <ImageBackground source={require('../../images/diversifood.png')} style={styles.backgroundImage} />
        
    </View>
  );
}

const styles = StyleSheet.create({
    backgroundImage:{
        width: 600,
        height: 500,
        left: 7,
        display: 'flex'
        

    },
    container: {
        
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: 'relative',
      backgroundColor: '#357342'
      
    },
    image: {
      flex: 1,
     
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });