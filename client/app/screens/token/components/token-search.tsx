import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TokenSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={20} />
      </View>

      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        onChangeText={setSearchTerm}
        value={searchTerm}
        clearTextOnFocus
      ></TextInput>
      <Text>{searchTerm}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
