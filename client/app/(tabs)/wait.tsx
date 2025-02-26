import { Image, StyleSheet, Text, View } from 'react-native';

export default function WaitScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hire This Guy!</Text>
      <Image
        source={require('../../assets/images/hire-this-guy.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40,
    marginBottom: 30,
  },
  image: {
    height: 200,
    width: 200,
  },
  info: {},
});
