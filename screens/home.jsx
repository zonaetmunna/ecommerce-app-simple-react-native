import {AntDesign} from '@expo/vector-icons';
import React, {useEffect} from 'react';
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    View,
    useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import BannerTitle from '../components/banner-title';
import Button from '../components/button';
import Text from '../components/text/text';
import {
    fetchProducts,
    selectFeaturedProducts,
    selectStatus,
} from '../store/productSlice';
import {colors, spacing} from '../theme';

const CategoryBox = ({title, image, onPress}) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                marginVertical: spacing[8],
                marginHorizontal: spacing[5],
                borderRadius: spacing[4],
                backgroundColor: colors.grey,
                alignItems: 'center',
                padding: spacing[5],
            }}>
            <Image source={image} style={{top: -60}} />
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: -20,
                }}>
                <Text preset="h6">{title}</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: spacing[4],
                }}>
                <Text
                    preset="subtitle"
                    textColor="#7c7c7c"
                    centered
                    style={{marginRight: spacing[4]}}>
                    SHOP
                </Text>
                <AntDesign name="right" color={colors.primary} size={14} />
            </View>
        </Pressable>
    );
};

const FeaturedProduct = ({name, category, image}) => {
    const {width, height} = useWindowDimensions();
    return (
        <View
            style={{
                marginVertical: spacing[5],
                backgroundColor: colors.primary,
                borderRadius: spacing[4],
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <View
                style={{
                    borderWidth: 1,
                    borderColor: '#d8d8d8',
                    borderRadius: 400,
                    height: 320,
                    width: width - 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#d8d8d8',
                        borderRadius: 400,
                        height: 280,
                        width: width - 80,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Image
                        style={{height: 172, width: 180}}
                        resizeMode="contain"
                        source={image.source}
                    />
                </View>
            </View>

            <View style={{paddingBottom: spacing[8], marginTop: -spacing[7]}}>
                <Text preset="h3" centered uppercase white>
                    {name}
                </Text>
                <Text preset="h3" centered uppercase white>
                    {category}
                </Text>
                <Text
                    centered
                    style={{width: 250, marginTop: spacing[4]}}
                    white>
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </Text>

                <Button
                    title={'SEE PRODUCT'}
                    style={{
                        backgroundColor: colors.black,
                        alignSelf: 'center',
                        marginTop: spacing[5],
                    }}
                />
            </View>
        </View>
    );
};

export default function Home({navigation}) {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const featuredProducts = useSelector(selectFeaturedProducts);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, []);

    if (status === 'loading') {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <BannerTitle />
                <View style={{backgroundColor: colors.black}}>
                    <Image
                        style={{alignSelf: 'center', width: '100%'}}
                        resizeMode="cover"
                        source={require('../assets/images/home-banner.png')}
                    />
                    <View
                        style={{position: 'absolute', width: '100%', top: 200}}>
                        <Text white preset="h2" centered>
                            WELCOME
                        </Text>
                        <Text
                            textColor={colors.grey}
                            centered
                            style={{
                                width: width - 20,
                                alignSelf: 'center',
                                marginTop: spacing[5],
                            }}>
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </Text>
                    </View>
                </View>

                <View style={{paddingVertical: spacing[8]}}>
                    <CategoryBox
                        title="HEADPHONES"
                        image={require('../assets/images/home-headphone.png')}
                        onPress={() => {
                            navigation.navigate('HeadphonesTab');
                        }}
                    />
                    <CategoryBox
                        title="SPEAKERS"
                        image={require('../assets/images/home-speaker.png')}
                        onPress={() => {
                            navigation.navigate('SpeakersTab');
                        }}
                    />
                    <CategoryBox
                        title="EARPHONES"
                        image={require('../assets/images/home-earphone.png')}
                        onPress={() => {
                            navigation.navigate('EarphonesTab');
                        }}
                    />
                </View>
                <View
                    style={{
                        paddingVertical: spacing[8],
                        paddingHorizontal: spacing[4],
                    }}>
                    {featuredProducts.map((product) => (
                        <FeaturedProduct
                            key={product.id}
                            name={product.name}
                            category={product.category}
                            image={product.featuredImage}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
