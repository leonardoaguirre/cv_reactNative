import React from 'react';
import { Image, View, Text, ScrollView, Linking } from 'react-native';
import foto from './assets/profile.jpg'
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/card';
import { style } from "./style";

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
                        <Icon name='github'
                            color={'#171515'}
                            size={30}
                            onPress={() => Linking.openURL("https://github.com/leonardoaguirre")}>
                            <Text style={style.redes_sociais_text}>Github</Text>
                        </Icon>
                        <Icon name='linkedin'
                            color={'#0e76a8'}
                            size={30}
                            onPress={() => Linking.openURL("https://linkedin.com/in/leonardo-vinicius-aguirre/")}>
                            <Text style={style.redes_sociais_text}>Linkedin</Text>
                        </Icon>
                        <Icon name='mail'
                            color={'#db4a39'}
                            size={30}
                            onPress={() => Linking.openURL("mailto:leonardo.aguirre.dev@gmail.com")}>
                            <Text style={style.redes_sociais_text}>Gmail</Text>
                        </Icon>
                    </View>
                </View>
                <View style={style.body}>
                    <Card title={"Objetivo"}>
                        <Text style={style.card_content_text}>Desenvolvedor/Programação/Análise de Sistemas/Sistemas de informação</Text>
                    </Card>
                    <Card title={"Resumo"}>
                        <Text style={style.card_content_title}>Desenvolvedor, Profissional de TI, Designer e Estudante</Text>
                        <Text style={style.card_content_text}>Graduado em curso de informática e atualmente cursando
                            ensino superior na área de tecnologia da informação (sistemas de informação) e freelance de Design.
                            Amante da tecnologia e da internet em geral.
                        </Text>
                    </Card>
                    <Card title={"Conhecimentos e habilidades"}>
                        <Text style={style.card_content_title}>Linguagens de programação e frameworks:</Text>
                        <Text style={style.card_content_text}>
                            Java, PHP, C#, JavaScript, SQL, CSS, HTML, Typescript, NodeJs, NextJs, ReactJS,Material UI, Bootstrap.
                        </Text>

                        <Text style={style.card_content_title}>Softwares:</Text>
                        <Text style={style.card_content_text}>
                            Visual Studio, Visual Code, NetBeans, Eclipse, Postmaan, Insomnia, Photoshop, After Efects, Premiere Pro, Media Encoder
                        </Text>

                        <Text style={style.card_content_title}>Base de dados e Serviços:</Text>
                        <Text style={style.card_content_text}>
                            PostgresSQL, MySQL, WampServer, XAMP, SQL Server, WorkBench, MongoDB ,ORMs.
                        </Text>

                        <Text style={style.card_content_title}>Softwares úteis:</Text>
                        <Text style={style.card_content_text}>
                            Microsfot Word, Google Docs, Microsoft Excel, Google Sheets, Prezi, Microsoft PowerPoint, Google Slides, Google Forms.
                        </Text>
                    </Card>
                    <Card title={"Formação"}>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>2012 - 2013 :</Text> Curso de computação completa e web design - Brasil Treina Poá
                        </Text>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>2014 - 2018 :</Text> Curso de inglês avançado completo - Reward Idiomas Poá
                        </Text>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>2015 - 2017 :</Text> Ensino médio completo - Escola Estadual Padre Simon Switzar
                        </Text>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>2016 - 2017 :</Text> Ensino técnico Análise e Desenvolvimento de Sistemas (sistemas web e desktop) completo - ETEC Poá
                        </Text>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>2018 - 2021 :</Text> Bacharelado em Sistemas de Informação - Universidade Mogi das Cruzes
                        </Text>
                    </Card>
                    <Card title={"Idiomas"}>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>Idioma Nativo :</Text> Português do Brasil
                        </Text>
                        <Text style={style.card_content_text}>
                            <Text style={style.card_content_text_strong}>Idioma Secundário :</Text> Inglês nível avançado
                        </Text>
                    </Card>
                    <Card title={"Experiência Profissional"}>
                        <Text style={style.card_content_title}>
                            Freelancer - 2020~Atualmente
                        </Text>
                        <Text style={style.card_content_text}>
                            Designer e criador de conteúdo de redes e mídias sociais. Dono da <Text
                                onPress={() => Linking.openURL("https://www.instagram.com/lemondesigners/")}
                                style={style.card_content_link}>
                                Lemon Designers
                            </Text>
                            (perfil no Instagram)
                        </Text>
                    </Card>
                </View>
            </ScrollView>
        </>
    );
};

export default App;
