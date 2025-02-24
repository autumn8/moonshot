import { useCurrencies } from '@/app/hooks/useTokens';
import React from 'react';
import {
  ActivityIndicatorComponent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FlatList } from 'react-native-reanimated/src/Animated';
import TokenListItem from './token-list-item';

const TokenList = () => {
  const { error, loading, currencies } = useCurrencies('crypto');
  if (error) return <h1>Error</h1>; //TODO: add actual error handler
  if (loading) return <ActivityIndicatorComponent />;

  return (
    <>
      <FlatList
        style={styles.list}
        data={currencies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TokenListItem item={item} />}
      />
    </>
  );
};

export default TokenList;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    width: '100%',
  },
  currency: {},
});
