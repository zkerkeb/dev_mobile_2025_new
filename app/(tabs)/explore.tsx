import { Image } from 'expo-image';
import * as Notifications from 'expo-notifications';
import { Alert, Button, Linking, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { CounterDisplay } from '@/components/counter/CounterDisplay';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

// Configure comment les notifs s'affichent quand l'app est ouverte
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabTwoScreen() {
  const { t } = useTranslation();

  // Fonction pour envoyer une notification locale
  async function sendNotification() {
    // Demander la permission
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(t('notifications.permissionDenied'), t('notifications.enableInSettings'));
      return;
    }

    // Envoyer la notif
    await Notifications.scheduleNotificationAsync({
      content: {
        title: t('notifications.testTitle'),
        body: t('notifications.testBody'),
      },
      trigger: null, // null = immédiat
    });
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
        <CounterDisplay/>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          {t('explore.title')}
        </ThemedText>
      </ThemedView>
      <ThemedText>{t('explore.description')}</ThemedText>


      <Button title={t('explore.goToSettings')} onPress={()=>{
    Linking.openURL('devmobile2025new://')

      }}></Button>
      {/* Bouton Notification */}


      <TouchableOpacity
        style={styles.notifButton}
        onPress={sendNotification}
      >
        <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>
          {t('explore.sendNotification')}
        </ThemedText>
      </TouchableOpacity>
      <Collapsible title={t('explore.fileRouting.title')}>
        <ThemedText>
          {t('explore.fileRouting.description')}{' '}
          <ThemedText type="defaultSemiBold">{t('explore.fileRouting.screen1')}</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">{t('explore.fileRouting.screen2')}</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">{t('explore.fileRouting.layoutFile')}</ThemedText>{' '}
          {t('explore.fileRouting.layoutDescription')}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">{t('explore.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore.platformSupport.title')}>
        <ThemedText>
          {t('explore.platformSupport.description')}{' '}
          <ThemedText type="defaultSemiBold">{t('explore.platformSupport.key')}</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title={t('explore.images.title')}>
        <ThemedText>
          {t('explore.images.description')} <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> {t('explore.images.suffixes')}
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">{t('explore.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore.darkMode.title')}>
        <ThemedText>
          {t('explore.darkMode.description')}{' '}
          <ThemedText type="defaultSemiBold">{t('explore.darkMode.hook')}</ThemedText> {t('explore.darkMode.hookDescription')}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">{t('explore.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore.animations.title')}>
        <ThemedText>
          {t('explore.animations.description')}{' '}
          <ThemedText type="defaultSemiBold">{t('explore.animations.component')}</ThemedText> component uses
          the powerful{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            {t('explore.animations.library')}
          </ThemedText>{' '}
          {t('explore.animations.libraryDescription')}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              {t('explore.animations.parallax')} <ThemedText type="defaultSemiBold">{t('explore.animations.parallaxComponent')}</ThemedText>{' '}
              {t('explore.animations.parallaxDescription')}
            </ThemedText>
          ),
        })}
      </Collapsible>
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
  notifButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
});
