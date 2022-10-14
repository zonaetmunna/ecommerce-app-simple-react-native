import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import {useDispatch, useSelector} from 'react-redux';
import {selectHeadphones} from '../store/productSlice';

import BannerTitle from '../components/banner-title';
import CategoryTitle from '../components/category-title';
import {spacing, colors} from '../theme';
import Button from '../components/button';
import Footer from '../components/footer';

export default function Headphones({navigation}) {
    const headphones = useSelector(selectHeadphones);
    const onPressProduct = (id) => {
        navigation.navigate('Details', {id: id});
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <BannerTitle />
                <CategoryTitle title="Headphones" />
                <View style={{margin: spacing[5]}}>
                    {headphones.map((headphone) => {
                        return (
                            <View
                                key={headphone.name}
                                style={{marginBottom: 60}}>
                                <View
                                    style={{
                                        backgroundColor: colors.grey,
                                        borderRadius: 16,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingVertical: spacing[5],
                                    }}>
                                    <Image
                                        source={headphone.featuredImage.source}
                                    />
                                </View>

                                <View style={{marginTop: spacing[5]}}>
                                    <Text preset="h4" centered>
                                        {headphone.name}
                                    </Text>
                                    <Text preset="h4" centered uppercase>
                                        headphones
                                    </Text>
                                    <Text
                                        textColor="#919191"
                                        centered
                                        style={{
                                            marginTop: spacing[5],
                                            marginHorizontal: spacing[7],
                                        }}>
                                        {headphone.description}
                                    </Text>
                                </View>

                                <Button
                                    style={{
                                        alignSelf: 'center',
                                        marginTop: spacing[5],
                                    }}
                                    title="SEE PRODUCT"
                                    onPress={() => onPressProduct(headphone.id)}
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
