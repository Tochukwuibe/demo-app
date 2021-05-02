import React from 'react'
import FeedPage from '../../pages/Feed/Feed.page'

export default function FeedContainer({
    navigation
}) {

    const onItemPress = () => {
        navigation.navigate("Group")
    }


    return (
        <FeedPage 
            onItemPress={onItemPress}
        />
    )
}
