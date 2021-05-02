import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import GroupItemComponent from '../GroupItem/GroupItem.component'


export default function HorizontalScrollPreviewComponent({
    items = [1, 2, 3, 4],
    onItemPress,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text h4 style={styles.text}>Lorem, ipsum.</Text>

                <Text style={styles.seeAll}>See all</Text>
            </View>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {items.map((_, i) => (
                    <GroupItemComponent
                        key={i}
                        onPress={onItemPress}
                    />
                ))}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    text: {
        marginBottom: 5
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    seeAll: {
        fontSize: 17,

    }
})

