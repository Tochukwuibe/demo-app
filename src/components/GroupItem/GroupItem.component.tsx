import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon, Image, Text, Avatar } from 'react-native-elements'

const img = "https://picsum.photos/200/300"
const avatar = "https://picsum.photos/50/50"



const avatars = [1, 2, 3, 4]


export default function GroupItemComponent({
    onPress
}) {
    return (
        <TouchableOpacity onPress={onPress}>


            <Card containerStyle={styles.container} wrapperStyle={styles.container}>
                <Image
                    source={{ uri: img }}
                    style={styles.img}
                />
                <View style={styles.textcontainer}>
                    <Text h4 style={styles.title} >Lorem, ipsum dolor.</Text>
                    <Text style={styles.description} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ducimus!
                </Text>


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


                        <TouchableOpacity
                            onPress={() => null}
                        >
                            <View style={[styles.avatar, {
                                marginLeft: 80,
                                borderColor: 'grey',
                                borderRadius: 20,
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                backgroundColor: "#EAEAEB"
                            }]}>
                                <Icon
                                    type="ionicon"
                                    name="ellipsis-horizontal"
                                    size={20}
                                    color="#54C0BC"
                                />
                            </View>

                        </TouchableOpacity>

                    </View>




                </View>

            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        flexDirection: 'row',
        padding: 0,
        marginTop: 0
    },
    flex: {
        flexDirection: 'row',
        flex: 1,
        height: "100%",

    },
    textcontainer: {
        height: 150,
        padding: 10,
        flexDirection: 'column',
        width: 250
    },
    img: { width: 130, height: 150 },
    title: {
        fontWeight: 'bold'
    },
    description: {
        flexWrap: 'wrap',
        flexShrink: 1,
        marginBottom: 15
    },
    avatarContainer: {
        flexDirection: "row",
        position: 'relative'
    },
    avatar: {
        position: 'absolute',
    }
})
