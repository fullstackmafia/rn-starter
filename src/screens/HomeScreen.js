import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello There</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Component Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button 
        onPress={() => { navigation.navigate('Square')}}
        title="Go to Square Demo"
      />
      <Button 
        onPress={() => { navigation.navigate('Text')}}
        title="Go to Text Demo"
      />
       <Button 
        onPress={() => { navigation.navigate('Box')}}
        title="Go to Box Demo"
      />
    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;