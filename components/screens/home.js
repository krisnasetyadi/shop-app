import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native'
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
        let productList = []
        let accesoryList = []

        for(let i = 0; i < Items.length; i++) {
            if(Items[i].category === 'product') {
                productList.push(Items[i])
            } else if (Items[i].category === 'accessory') {
                accesoryList.push(Items[i])
            }
        }
        setProducts(productList)
        setAccessory(accesoryList)
    }

    const ProductCard  = ({data}) => {
        return (
            <TouchableOpacity style={{
                width: '48%',
                marginVertical: 14
            }}> 
              <View style={{
                width: '100%',
                height: 100,
                borderRadius: 100,
                position: 'relative',
                backgroundColor: COLOURS.backgroundLight,
                alignItems: 'center',
                marginBottom: 8
              }}>
                { data.isOff ? (
                    <View style={{
                        position: 'absolute',
                        width: '20%',
                        height: '24%',
                        backgroundColor: COLOURS.green,
                        top:0,
                        left:0,
                        borderTopLeftRadius:10,
                        borderTopEndRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                      <Text>{data.offPercentage}</Text>
                    </View>   
                )
                : null }
         
                <Image 
                  source={data.productImage} 
                  style={{
                    width:"80%",
                    height: "80%",
                    resizeMode: 'contain'
                  }}
                />
              </View>
            </TouchableOpacity>
        )
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
              }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons 
                  name="cart" 
                  style={{
                    fontSize: 18,
                    color: COLOURS.backgroundMedium,
                    padding: 12,
                    borderRadius: 10,
                    backgroundColor: COLOURS.backgroundLight
                }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="shopping-bag" style={{
                    fontSize: 18,
                    color: COLOURS.backgroundMedium,
                    padding: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    backgroundColor: COLOURS.backgroundLight
                }} />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 10, padding: 16 }}>
              <Text 
               style={{
                fontSize: 26,
                color: COLOURS.black,
                fontWeight: 500,
                letterSpacing: 1,
                marginBottom: 10
               }}
              >
                K Shop &amp; Service
              </Text>
              <Text 
               style={{
                    fontSize: 26,
                    color: COLOURS.black,
                    fontWeight: 500,
                    letterSpacing: 1,
                    marginBottom: 10
                }}
                >
                    Audio shop on West Jakarta
              </Text>
            </View>
            <View 
             style={{
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
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

                {products?.map(data => {
                return (
                   <ProductCard key={data.id} data={data} />
                )
            })}
            </View>
          </ScrollView>
        </View>
    )
}

export default Home