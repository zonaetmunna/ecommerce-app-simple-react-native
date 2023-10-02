import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import Text from '../components/text/text';
import {selectSpeakers} from '../store/productSlice';

import BannerTitle from '../components/banner-title';
import Button from '../components/button';
import CategoryTitle from '../components/category-title';
import Footer from '../components/footer';
import {colors, spacing} from '../theme';

export default function Speakers({navigation}) {
    const speakers = useSelector(selectSpeakers);
    const onPressProduct = (id) => {
        navigation.navigate('Details', {id: id});
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <BannerTitle />
                <CategoryTitle title="speakers" />
                <View style={{margin: spacing[5]}}>
                    {speakers.map((speaker) => {
                        return (
                            <View key={speaker.name} style={{marginBottom: 60}}>
                                <View
                                    style={{
                                        backgroundColor: colors.grey,
                                        borderRadius: 16,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingVertical: spacing[5],
                                    }}>
                                    <Image
                                        source={speaker.featuredImage.source}
                                    />
                                </View>

                                <View style={{marginTop: spacing[5]}}>
                                    <Text preset="h4" centered>
                                        {speaker.name}
                                    </Text>
                                    <Text preset="h4" centered uppercase>
                                        speakers
                                    </Text>
                                    <Text
                                        textColor="#919191"
                                        centered
                                        style={{
                                            marginTop: spacing[5],
                                            marginHorizontal: spacing[7],
                                        }}>
                                        {speaker.description}
                                    </Text>
                                </View>

                                <Button
                                    style={{
                                        alignSelf: 'center',
                                        marginTop: spacing[5],
                                    }}
                                    title="SEE PRODUCT"
                                    onPress={() => onPressProduct(speaker.id)}
                                />
                            </View>
                        );
                    })}
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
