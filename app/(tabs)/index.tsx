import { Image, StyleSheet, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface ListItem {
  key: string;
}

const itemsDonation: ListItem[] = [
  { key: 'cesta básica' },
  { key: 'cobertores' },
  { key: 'roupas íntimas novas (masculinas e femininas)' },
  { key: 'meias' },
  { key: 'água sanitária' },
  { key: 'sabão em pó' },
  { key: 'escova e pasta de dente' },
  { key: 'desodorante' },
  { key: 'xampu' },
];

const renderItem = ({ item }: { item: ListItem }) => (
  <ThemedView>
    <ThemedText>{'\u2022 ' + item.key}</ThemedText>
  </ThemedView>
);

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/rs-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <HelloWave />
        <ThemedText type="title">Doações</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Centro Logístico da Defesa Civil Estadual</ThemedText>
        <ThemedText>
          Avenida Joaquim Porto Villanova, 101, bairro Jardim Carvalho - Porto Alegre.
        </ThemedText>
        <ThemedText>
          Telefone: (51) 3210 4255. Horário de funcionamento: das 8h30 às 17h, de segunda a sexta-feira.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O que doar</ThemedText>
        <FlatList
          data={itemsDonation}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Empresas e grupos</ThemedText>
        <ThemedText>
          Empresas, grupos de serviço e organizações que desejarem enviar doações deverão contatar previamente a Defesa Civil do Estado no telefone (51) 3120-4255 para tratativas envolvendo a logística do material.
        </ThemedText>
        <ThemedText>
          Também é possível buscar informações sobre doações com as prefeituras e defesas civis municipais.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
