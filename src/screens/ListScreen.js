import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 20 },
        { name: 'Friend 2', age: 45 },
        { name: 'Friend 3', age: 32 },
        { name: 'Friend 4', age: 27 },
        { name: 'Friend 5', age: 53 },
        { name: 'Friend 6', age: 60 },
        { name: 'Friend 7', age: 30 }
    ]

    return (
        <FlatList
          data={friends}
          keyExtractor={(friend) => friend.name}
          renderItem={({item}) => {
            return <Text style={styles.textStyles}>{item.name} - Age {item.age}</Text>
          }}
        />
    )
}

const styles = StyleSheet.create({
    textStyles: {
        marginVertical: 50
    }
})

export default ListScreen;