import { StyleSheet, Text, View } from 'react-native';
import TokenHeader from '../screens/token/components/token-header';
import TokenFilter from '../screens/token/components/token-filter';
import TokenList from '../screens/token/components/token-list';
import { useState } from 'react';

export default function TokenScreen() {
  const [filterTerm, setFilterTerm] = useState('');
  return (
    <View style={styles.container}>
      <TokenHeader />
      <TokenFilter onChange={setFilterTerm} />
      <TokenList filterTerm={filterTerm} />
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
