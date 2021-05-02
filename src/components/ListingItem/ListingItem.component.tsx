import React from 'react'
import { TouchableOpacity, View, } from 'react-native'
import { Card, Text, Icon } from 'react-native-elements'
const img = "https://picsum.photos/100/180"


export default function ListingItemComponent() {
    return (
        <Card

            containerStyle={{
                width: 170,
                height: 240,
                margin: 5,
                padding: 0,
                borderRadius: 15,
                backgroundColor: "#F9F9F9"
            }}
            wrapperStyle={{ padding: 0, borderRadius: 15, backgroundColor: "#F9F9F9" }}
        >

            <Card.Image source={{ uri: img }} style={{
                borderRadius: 7,

            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'white',
                        borderRadius: 30,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        position: 'absolute',
                        right: 5,
                        marginTop: 5,
                        opacity: 0.8
                    }}
                >
                    <Icon
                        type="ionicon"
                        name="star-outline"
                        size={25}
                        color="#37352F"
                    />
                </TouchableOpacity>

            </Card.Image>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Item Name</Text>
                <Text style={{ fontSize: 17 }}>Brand name</Text>
                <Text style={{ fontSize: 15 }}>Jane Doe</Text>
            </View>


        </Card>

    )
}
