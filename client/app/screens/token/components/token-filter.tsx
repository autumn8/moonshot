import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type TokenFilterProps = {
  onChange: (value: string) => void;
};

const TokenFilter: React.FC<TokenFilterProps> = ({ onChange }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onChangeText = (value: string) => {
    setFilterTerm(value);
    onChange(value);
  };

  const clearFilterTerm = () => {
    setFilterTerm('');
    onChange('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={20} />
      </View>
      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        onChangeText={onChangeText}
        value={filterTerm}
        clearTextOnFocus
      ></TextInput>
      {filterTerm.length !== 0 && (
        <View style={styles.clearContainer} onTouchStart={clearFilterTerm}>
          <Ionicons name="close-circle" size={30} />
        </View>
      )}
    </View>
  );
};

export default TokenFilter;

const styles = StyleSheet.create({
  clearContainer: {
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    marginTop: 15,
    marginBottom: 15,
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  searchBar: {
    padding: 15,
    paddingLeft: 40,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
  },
});
