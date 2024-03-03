import { Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Layout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={24}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="details" options={{ headerTitle: 'Details' }} />
    </Stack>
  );
};

export default Layout;
