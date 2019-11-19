import React from 'react';
import { View, StyleSheet,Text, Button } from 'react-native';


const CategoriesMealScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>The Categories Meal Screen!</Text>
            <Button title="Go Back to Categories" onPress={ () => {
                props.navigation.navigate({
                    routeName:'MealDetail'
                })
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoriesMealScreen;