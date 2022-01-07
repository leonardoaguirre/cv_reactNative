import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Linking } from 'react-native';
import foto from './assets/profile.jpg'
import Icon from 'react-native-vector-icons/Feather';

const App = () => {
    return (
        <>
            <ScrollView style={style.page}>
                <View style={style.container_header}>
                    <Image source={foto} style={style.foto} />
                    <View style={style.funcao}>
                        <Text style={style.nome}>Leonardo Vinicius Aguirre</Text>
                        <Text>Software Engineer Jr</Text>
                        <Text>21 anos, solteiro</Text>
                        <Text>Poá, São Paulo</Text>
                    </View>
                    <View style={style.redes_sociais}>
                        <Icon name='github' size={30} onPress={() => Linking.openURL("https://github.com/leonardoaguirre")} />
                        <Icon name='linkedin' size={30} onPress={() => Linking.openURL("https://linkedin.com/in/leonardo-vinicius-aguirre/")} />
                        <Icon name='mail' size={30} onPress={() => Linking.openURL("mailto:leonardo.aguirre.dev@gmail.com")} />
                    </View>
                </View>
                <View style={style.card_container}>
                    <View style={style.card}>
                        <View style={style.card_header}>
                            <Text style={style.card_header_text}>Experiência Profissional</Text>
                        </View>
                        <View style={style.card_content}>
                            <Text style={style.card_content_text}>Experiência 1</Text>
                            <Text style={style.card_content_text}>Experiência 1</Text>
                            <Text style={style.card_content_text}>Experiência 1</Text>
                        </View>
                    </View>
                </View>
                <View style={style.card_container}>
                    <View style={style.card}>
                        <View style={style.card_header}>
                            <Text style={style.card_header_text}>Formação Academica</Text>
                        </View>
                        <View style={style.card_content}>
                            <Text style={style.card_content_text}>Formação 1</Text>
                            <Text style={style.card_content_text}>Formação 2</Text>
                            <Text style={style.card_content_text}>Formação 3</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    page: {
        backgroundColor: '#E7E7E7',
        flex: 1,
        paddingStart: 50,
        paddingEnd: 50,
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    container_header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '50%',
        marginTop: 20,
    },
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: '#FFF'
    },
    card_header: {

    },
    card_content: {
        marginTop: 20,
    },
    card_header_text: {
        marginBottom: 10,
        color: '#939393',
        fontWeight: 'bold',
        color: '#000'
    },
    card_content_text: {
        marginBottom: 10,
        color: '#939393'
    }
});
export default App;
