import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {colors} from '../theme';
import Text from './text/text';

export default function CounterButton({style, setAmount, initialVal}) {
    const [count, setCount] = useState(initialVal || 0);
    const onIncrement = () => {
        setCount((prev) => prev + 1);
        setAmount(count + 1);
    };
    const onDecrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
            setAmount(count - 1);
        }
    };
    return (
        <View style={[styles.wrapper, style]}>
            <Pressable onPress={onDecrement} style={styles.counterBtn}>
                <Text style={styles.btnText} textColor="#c4c4c4">
                    -
                </Text>
            </Pressable>
            <Text>{count}</Text>
            <Pressable onPress={onIncrement} style={styles.counterBtn}>
                <Text style={styles.btnText} textColor="#c4c4c4">
                    +
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        width: 120,
        height: 48,
        flexDirection: 'row',
        backgroundColor: colors.grey,
        borderRadius: 4,
    },
    counterBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
    },
});
