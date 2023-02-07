import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state,  count: state.count + 1 }
        case 'decrement':
            return { ...state,  count: state.count - 1}
        default:
            return { count: state.count }
    }

}

const CounterScreen = () => {
   const [ state, dispatch ] = useReducer(reducer, {count: 0} )
    return (
        <View>
            <Button 
                title='Increase'
                onPress={() => dispatch({ type: 'increment' })}
            />
            <Button 
                title='Decrease'
                onPress={() => dispatch({ type: 'decrement'})}
            />
            <Text>Current Count: { state.count } </Text>
        </View>
    ) 
}

const styles = StyleSheet.create({});

export default CounterScreen;