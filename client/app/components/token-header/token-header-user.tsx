import { StyleSheet, Text, View } from 'react-native';

export default function TokenHeaderUser() {
  return (
    <View style={styles.container}>
      <View style={styles.initialContainer}>
        <Text>D</Text>
      </View>
      <Text style={styles.username}>@degen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  initialContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: '50%',
    borderColor: 'grey',
    borderWidth: 1,
  },
  username: {
    marginLeft: 10,
  },
});
