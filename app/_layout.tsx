import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '@/i18n';

import { CounterProvider } from '@/context/CounterContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAppStateNotification } from '@/hooks/useAppStateNotification';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useAppStateNotification();

  return (
    <CounterProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: true, headerStyle: { backgroundColor: '#f5f5f5' } }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          <Stack.Screen name="/articles/[id]" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </CounterProvider>
  );
}
