import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors  from '../constants/Colors';
import { Platform } from '@unimodules/core';
import CategoryGridTitle  from '../components/CategoryGridTitle';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTitle 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() =>{
                props.navigation.navigate({
                    routeName :'CategoryMeals',
                    params:{
                        categoryId: itemData.item.id
                    }
                });
            }} />
        )
    }


    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>
        </FlatList>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150
    }
});


export default CategoriesScreen;