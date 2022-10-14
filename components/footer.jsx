import React from 'react';
import {View, Image} from 'react-native';
import {colors, spacing} from '../theme';
import Text from './text/text';

export default function Footer() {
    return (
        <View style={{padding: spacing[5], alignItems: 'center'}}>
            <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/images/man-with-hp.png')}
            />

            <View style={{paddingVertical: spacing[5]}}>
                <Text centered preset="h4" style={{textTransform: 'uppercase'}}>
                    Bringing you the
                </Text>
                <Text centered preset="h4" style={{textTransform: 'uppercase'}}>
                    <Text preset="h4" textColor={colors.primary}>
                        best
                    </Text>{' '}
                    audio gear
                </Text>
            </View>

            <Text textColor="#c3c3c3" centered>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
            </Text>
        </View>
    );
}
