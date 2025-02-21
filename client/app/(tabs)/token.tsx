import { StyleSheet, Text, View } from 'react-native';
import TokenHeader from '../screens/token/components/token-header';
import TokenSearch from '../screens/token/components/token-search';

export default function TokenScreen() {
  return (
    <View style={styles.container}>
      <TokenHeader />
      <TokenSearch />
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
