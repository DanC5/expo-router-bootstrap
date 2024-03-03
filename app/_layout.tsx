import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export { ErrorBoundary } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const router = useRouter();
  const segments = useSegments();

  // TODO - add actual checks if loaded and logged in
  const isAuthLoaded = false;
  const isLoggedIn = false;

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  useEffect(() => {
    if (!isAuthLoaded) return;

    const inTabsGroup = segments[0] === '(tabs)';

    if (isLoggedIn && !inTabsGroup) {
      router.replace('/(tabs)/one');
    } else if (!isLoggedIn) {
      router.replace('/');
    }
  }, [isAuthLoaded, isLoggedIn]);

  if (!loaded) return <View />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return <InitialLayout />;
}
