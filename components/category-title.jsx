import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, spacing} from '../theme';
import Text from './text/text';

export default function CategoryTitle({title}) {
    return (
        <View style={styles.container}>
            <Text uppercase white preset="h4">
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing[3],
        borderTopWidth: 0.5,
        borderTopColor: '#979797',
    },
});
