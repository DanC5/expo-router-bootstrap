import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

const LoginScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Link href={'/(tabs)/one'} replace asChild>
        <Button title="Go to Tabs" />
      </Link>
    </View>
  );
};

export default LoginScreen;
