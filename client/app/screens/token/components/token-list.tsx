import { useTokens } from '@/app/hooks/useTokens';
import React from 'react';
import {
  ActivityIndicatorComponent,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-reanimated/src/Animated';
import TokenListItem from './token-list-item';

type TokenListProps = {
  filterTerm: string;
};

const TokenList: React.FC<TokenListProps> = ({ filterTerm }) => {
  const { error, loading, tokens } = useTokens();
  if (error) return <Text>Error</Text>; //TODO: add actual error handler
  if (loading) return <ActivityIndicatorComponent />;
  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <>
      <FlatList
        style={styles.list}
        data={filteredTokens}
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
