import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const incrementAfterDelay = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 2000);
    };
    const incrementTwice = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    const correctIncrementTwice = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    return (
        <View style={styles.container}>
            <Text>Count: {count}</Text>
            <Button title="Increment:" onPress={increment} />
            <Button title="Increment After Delay:" onPress={incrementAfterDelay} />
            <Button title="Increment Twice:" onPress={incrementTwice} />
            <Button title="Correct Increment Twice:" onPress={correctIncrementTwice} />
        </View>
    )
}

 const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default Counter;