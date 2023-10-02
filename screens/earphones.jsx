import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import Text from '../components/text/text';
import {selectEarphones} from '../store/productSlice';

import BannerTitle from '../components/banner-title';
import Button from '../components/button';
import CategoryTitle from '../components/category-title';
import Footer from '../components/footer';
import {colors, spacing} from '../theme';

export default function Earphones({navigation}) {
    const earphones = useSelector(selectEarphones);

    const onPressProduct = (id) => {
        navigation.navigate('Details', {id: id});
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <BannerTitle />
                <CategoryTitle title="earphones" />
                <View style={{margin: spacing[5]}}>
                    {earphones.map((earphone) => {
                        return (
                            <View
                                key={earphone.name}
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
                                        source={earphone.featuredImage.source}
                                    />
                                </View>

                                <View style={{marginTop: spacing[5]}}>
                                    <Text preset="h4" centered>
                                        {earphone.name}
                                    </Text>
                                    <Text preset="h4" centered uppercase>
                                        earphones
                                    </Text>
                                    <Text
                                        textColor="#919191"
                                        centered
                                        style={{
                                            marginTop: spacing[5],
                                            marginHorizontal: spacing[7],
                                        }}>
                                        {earphone.description}
                                    </Text>
                                </View>

                                <Button
                                    style={{
                                        alignSelf: 'center',
                                        marginTop: spacing[5],
                                    }}
                                    title="SEE PRODUCT"
                                    onPress={() => onPressProduct(earphone.id)}
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
