import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Link href="/(tabs)/one/details" asChild>
        <Button title="Go to details page" />
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
