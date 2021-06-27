import React, {useState} from 'react';
import { View, FlatList } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { ListDivider } from '../../components/ListDivider';
import {CategorySelect} from '../../components/CategorySelect';
import {Profile} from '../../components/Profile';
import {ListHeader} from '../../components/ListHeader';
import {Appointment} from '../../components/Appointment';
import {Background} from '../../components/Background'

import {styles} from './styles';

export function Home() {
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos chegar ao challenge sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
                // Vai passar a função para se chamada pelo componente category
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    )
}