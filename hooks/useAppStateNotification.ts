import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import * as Notifications from 'expo-notifications';

// Configure le comportement des notifications quand l'app est au premier plan
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function useAppStateNotification() {
  const appState = useRef(AppState.currentState);
  const notificationId = useRef<string | null>(null);

  useEffect(() => {
    // Demande les permissions au montage
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Notification permissions not granted');
      }
    };
    requestPermissions();

    const subscription = AppState.addEventListener('change', async (nextAppState: AppStateStatus) => {
      // L'utilisateur quitte l'app (passe en arrière-plan)
      if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
        // Programme une notification dans 5 secondes
        notificationId.current = await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Hey ! 👋',
            body: 'Viens finir ton action !',
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 5,
          },
        });
      }

      // L'utilisateur revient dans l'app - annule la notification programmée
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        if (notificationId.current) {
          await Notifications.cancelScheduledNotificationAsync(notificationId.current);
          notificationId.current = null;
        }
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
      // Annule la notification si le composant est démonté
      if (notificationId.current) {
        Notifications.cancelScheduledNotificationAsync(notificationId.current);
      }
    };
  }, []);
}
