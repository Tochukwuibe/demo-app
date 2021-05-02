import React from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import HorizontalScrollPreviewComponent from '../../components/HorizontalScrollPreview/HorizontalScrollPreview.component'

export default function FeedPage({
    onItemPress
}) {
    const items = [1, 2, 3, 4]



    return (
        <View>
            <SafeAreaView />
            <ScrollView>
                {items.map((_, i) => (
                    <HorizontalScrollPreviewComponent
                        key={i}
                        onItemPress={onItemPress}
                    />
                ))}
            </ScrollView>
        </View>
    )
}
