import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="information-circle-outline" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre</ThemedText>
      </ThemedView>
      <ThemedText>
        Este projeto visa criar um aplicativo para ajudar na coordenação e distribuição de alimentos para as vítimas da inundação do Lago Guaíba em maio de 2024, que desabrigou mais de 100 mil pessoas. O aplicativo utiliza o framework React Native para fornecer informações centralizadas sobre pontos de coleta e doação.
      </ThemedText>
      <ThemedText>
        A experiência proporcionou a oportunidade de aplicar conhecimentos técnicos em um contexto crítico, destacando a importância da comunicação clara e da simplicidade nas interfaces para atender às necessidades emergenciais da comunidade.
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
