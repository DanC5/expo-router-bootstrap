import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Link href={'/(tabs)/one'} replace asChild>
        <Button title="Go to Tabs" />
      </Link>
    </View>
  );
};

export default Login;
