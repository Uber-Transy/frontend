import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import AsyncStorage from "@react-native-async-storage/async-storage";


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';




// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });


  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Authentication" options={{headerShown: false}}/>
        <Stack.Screen name="Signup" options={{headerShown: false}} />
        <Stack.Screen name="Login" options={{headerShown: false}} />
          <Stack.Screen name="Forgot-Password" options={{headerShown: false}}/>
      </Stack>
  );
}
