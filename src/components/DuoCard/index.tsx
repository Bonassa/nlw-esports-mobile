
import { View, TouchableOpacity, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { styles } from './styles';

import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';

export interface DuoCardProps {
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;

  onConnect: () => void;
}

export function DuoCard(props: DuoCardProps){
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={props.name} />

      <DuoInfo label='Tempo de jogo' value={`${props.yearsPlaying} ${props.yearsPlaying < 2 ? 'ano' : 'anos' }`} />
      
      <DuoInfo 
        label='Disponibilidade' 
        value={`${props.weekDays.length} dias \u2022 ${props.hourStart} às ${props.hourEnd}`} 
      />

      <DuoInfo
        label='Chamada de áudio'
        value={props.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={props.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={props.onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}