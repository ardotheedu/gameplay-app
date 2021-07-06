import React from 'react';
import {Fontisto} from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

import {
    FlatList,
    ImageBackground,
    Text,
    View
} from 'react-native';

import BannerImg from '../../assets/banner.png'
import { styles } from './styles'

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url:'https://github.com/rodrigorgtic.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url:'https://github.com/rodrigorgtic.png',
            status: 'online'
        }
    ]
    return (
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader 
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}