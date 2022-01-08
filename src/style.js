import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1,
        paddingStart: 30,
        paddingEnd: 30,
        paddingTop : 50,
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderStyle : "solid",
        borderColor : '#db4a39',
        borderWidth : 3,
    },
    container_header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body :{
        marginBottom : 100
    },
    nome: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    funcao: {
        color: '#939393',
        alignItems: 'center',
        marginBottom: 10,
    },
    redes_sociais: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : "center",
        width: '90%',
        marginTop: 20,
    },
    redes_sociais_text: {
        marginRight : 10,
        fontSize : 14,
    },
    card_content_text: {
        marginBottom: 10,
        color: '#939393',
        fontSize : 18,
    },
    card_content_text_strong: {
        fontWeight : "500",
        color : '#000'
    },
    card_content_title: {
        color: '#000',
        fontSize : 20,
        fontWeight: "600",
    },
    card_content_link: {
        color: '#28C76F',
        fontWeight: "600",
    }
});