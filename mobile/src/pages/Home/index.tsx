import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'


const Home = () => {
    return (
        <ImageBackground
            source={require('../../assets/home-background.png')}
        >
            <RectButton style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    },

    button: {
        backgroundColor: '#2EB536',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
    },

});

export default Home;