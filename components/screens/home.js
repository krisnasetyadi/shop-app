import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { COLOURS, Items } from '../database/database'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = ({navigation}) => {
    const [products, setProducts] = useState([])
    const [accessory, setAccessory] = useState([])

    useEffect(() => {
        const unsubcribe = navigation.addListener('focus', () => {
            getData()
        })
        return unsubcribe
    }, [navigation])

    const getData = () => {
        let productLIst = []
        let accesoryList = []

        for(let i = 0; i < Items.length; i++) {
            if(Items[i].category === 'product') {
                productLIst.push(Items[i])
            } else if (Items[i].category === 'accessory') {
                accesoryList.push(Items[i])
            }
        }
    }
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white
        }}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
 
                <View 
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 16
                  }}>
                      <TouchableOpacity>
                        <MaterialCommunityIcons name="cart" style={{
                            fontSize: 18,
                            color: COLOURS.backgroundMedium,
                            padding: 12,
                            borderRadius: 10,
                            backgroundColor: COLOURS.backgroundLight
                        }}>
                        </MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="shopping-bag" style={{
                            fontSize: 18,
                            color: COLOURS.backgroundMedium,
                            padding: 12,
                            borderRadius: 10,
                            borderWidth: 1,
                            backgroundColor: COLOURS.backgroundLight
                        }}>
                        </Entypo>
                    </TouchableOpacity>
                    </View>
                    <View style={{
                        marginBottom: 10,
                        padding: 16
                    }}>
                        <Text style={{
                            fontSize: 26,
                            color: COLOURS.black,
                            fontWeight: 500,
                            letterSpacing: 1,
                            marginBottom: 10
                        }}>
                            K Shop &amp; Service
                        </Text>
                        <Text style={{
                            fontSize: 26,
                            color: COLOURS.black,
                            fontWeight: 500,
                            letterSpacing: 1,
                            marginBottom: 10
                        }}>
                           Audio shop on West Jakarta
                        </Text>
                    </View>
                    <View style={{
                        padding: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                color: COLOURS.black,
                                fontWeight: 500,
                                letterSpacing: 1
                            }}>
                                Products
                            </Text> 
                            <Text style={{
                                fontSize: 14,
                                color: COLOURS.black,
                                fontWeight: 400,
                                opacity: 0.5,
                                marginLeft: 10
                            }}>
                                41
                            </Text>   
                        </View>
                        
                        <Text style={{
                            fontSize: 14,
                            color: COLOURS.blue,
                            fontWeight: 400,
                        }}>
                            seeAll
                        </Text>
                    </View>
                    <View>
                        {}
                    </View>
            </ScrollView>
        </View>
    )
}

export default Home