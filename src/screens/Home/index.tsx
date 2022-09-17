
import { useState, useEffect } from 'react';
import { Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import apiAxios from '../../services/apiBackend';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { Background } from '../../components/Background';

import { GameCardProps } from '../../components/GameCard'

export function Home(){
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadGames(){
      await apiAxios.get('games')
      .then((json) => setGames(json.data))
    }

    loadGames();
  }, [])

  function handleGame({ bannerUrl, id, title }: GameCardProps){
    // Por conta do typescript temos que criar uma tipagem para nossas rotas no @types
    navigation.navigate('game', {id, title, bannerUrl});
  }

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <Image source={logoImg} style={styles.logo} />

          <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

          <FlatList
            data={games}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
            renderItem={({item}) => (
              <GameCard data={item} onPress={() => handleGame(item)} />
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
}