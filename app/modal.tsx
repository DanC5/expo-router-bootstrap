import { StyleSheet, Text, View } from 'react-native';

const ModalScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
    </View>
  );
};

export default ModalScreen;

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
