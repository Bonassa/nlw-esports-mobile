
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity, Image, ScrollView, FlatList, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import apiAxios from '../../services/apiBackend';

import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';
import { THEME } from '../../theme';

import { GameParams } from '../../@types/navigation';
import { DuoCardProps } from '../../components/DuoCard';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';
import { DuoMatchModal } from '../../components/DuoMatchModal';

export function Game(){
  const [ads, setAds] = useState<DuoCardProps[]>([]);
  const [modalDiscord, setModalDiscord] = useState<string>('');

  const route = useRoute(); //Hook useRoute para resgatar os valores passados por parâmetro no navigation
  const game = route.params as GameParams;
  const navigation = useNavigation();

  useEffect(() => {
    async function loadGames(){
      await apiAxios.get(`games/${game.id}/ads`)
      .then((response) => {
        setAds(response.data);
      })
    }

    loadGames();
  }, []);

  function handleGoBack(){
    navigation.goBack();
  }

  async function handleGetDiscord(adId: string){
    await apiAxios.get(`ads/${adId}/discord`)
    .then((response) => {
      setModalDiscord(response.data.discord);
    })
  }

  return (
    <Background>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name='chevron-thin-left' size={20} color={THEME.COLORS.CAPTION_300}  />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.rightSpace} />
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode='cover' />
          </View>

          <Heading title={game.title} subtitle='Conecte-se e comece a jogar' />

          <FlatList 
            contentContainerStyle={[ads.length > 0 ? styles.adsList : styles.emptyListContent]}
            data={ads}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <DuoCard
                key={item.id}
                hourEnd={item.hourEnd}
                hourStart={item.hourStart}
                id={item.id}
                name={item.name}
                useVoiceChannel={item.useVoiceChannel}
                weekDays={item.weekDays}
                yearsPlaying={item.yearsPlaying}

                onConnect={() => handleGetDiscord(item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Ainda não há anúncios para esse game.
              </Text>
            )}
          />
        </ScrollView>

        <DuoMatchModal
          visible={modalDiscord.length !== 0}
          discord={modalDiscord}
          onClose={() => setModalDiscord('')}
        />
      </SafeAreaView> 
    </Background>
  );
}