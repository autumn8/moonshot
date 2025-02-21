import { StyleSheet, Text, View } from 'react-native';
import TokenHeaderUser from './token-header-user';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TokenHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <TokenHeaderUser />
        <Ionicons name="settings" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
