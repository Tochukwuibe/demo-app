import React from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Image, Card, Text, Avatar, ListItem, Button, Icon } from 'react-native-elements'
import ListingItemComponent from '../../components/ListingItem/ListingItem.component'


const img = "https://picsum.photos/200/300"
const avatar = "https://picsum.photos/50/50"


const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]


export default function GroupPage() {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Image
                source={{ uri: img }}
                style={{ width: "100%", height: 280 }}
            />



            <View style={styles.cardContainer}>
                <Card containerStyle={styles.card}>
                    <Text h3 style={styles.title}>Some Group</Text>
                    <Text style={styles.subTitle}>PRIVATE GROUP. 122 MEMBERS</Text>

                    <View style={styles.avatarContainer}>
                        {avatars.map((_, i) => (
                            <Avatar
                                key={i}
                                rounded
                                source={{
                                    uri: avatar,
                                }}
                                containerStyle={[styles.avatar, { marginLeft: i * 20 }]}
                            />
                        ))}
                    </View>
                </Card>
            </View>

            <View style={styles.content}>
                <ListItem containerStyle={{
                    width: 300,
                    padding: 5,
                    borderRadius: 10,
                    backgroundColor: '#E5E5E5'
                }} bottomDivider>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#54C0BC',
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                    >
                        <Icon
                            type="ionicon"
                            name="add"
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <ListItem.Content>
                        <ListItem.Title> Add an Item</ListItem.Title>

                    </ListItem.Content>
                </ListItem>

            </View>

            <View style={{
                paddingHorizontal: 16,
                flex: 1,

                flexGrow: 1
            }}>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginVertical: 10,

                }}> In Your Group</Text>

                <FlatList
                    data={items}
                    renderItem={() => <ListingItemComponent />}
                    numColumns={2}
                    keyExtractor={(_, i) => i.toString()}
                    columnWrapperStyle={{ justifyContent: 'space-between', width: "100%" }}
                    contentContainerStyle={{
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexGrow: 1
                    }}
                    style={{
                        flexGrow: 1
                    }}
                />


            </View>
            <SafeAreaView />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: "100%",
        flex: 1
    },
    card: {
        width: "100%",
        height: 140,
        borderRadius: 15,
        alignItems: 'center'
    },
    cardContainer: {
        position: 'absolute',
        top: 240,
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: '500'
    },
    avatar: {
        position: 'absolute',
    },
    avatarContainer: {
        flexDirection: "row",
        position: 'relative',
    },
    content: {
        marginTop: 100,
        alignItems: 'center'
    }
})
