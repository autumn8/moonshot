import { StyleSheet, Text, View } from 'react-native';
import TokenHeader from '../components/token-header/token-header';

export default function TokenScreen() {
  return (
    <View style={styles.container}>
      <TokenHeader />
      <Text style={styles.text}>Token screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  tokenHeaderContainer: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: '#fff',
  },
});
