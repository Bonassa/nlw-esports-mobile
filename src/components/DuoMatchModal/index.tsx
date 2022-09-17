
import { useState } from 'react';
import { View, Modal, Text, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';

import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';

import { Heading } from '../Heading';

interface DuoMatchModalProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatchModal({ discord, onClose, ...rest } : DuoMatchModalProps){
  const [loading, setLoading] = useState(false);

  async function handleCopyDiscordToClipboard(){
    setLoading(true);

    await Clipboard.setStringAsync(discord)
    .then(() => {
      Alert.alert('Discord Copiado!', 'Usuário do Discord copiado para área de transferência');
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <Modal
      animationType='fade'
      statusBarTranslucent
      transparent
      {...rest} 
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.closeIcon} 
            onPress={onClose}
          >
            <MaterialIcons 
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle 
            style={styles.checkIcon}
            color={THEME.COLORS.SUCCESS}
            size={64}
            weight='fill'
          />

          <Heading 
            title="Let's Play!"
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginVertical: 16 }}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity 
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={loading}
          >
            <Text style={styles.discord}>
              {loading ? <ActivityIndicator /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}