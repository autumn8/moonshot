import { Currency } from '@/app/services/currencies.types';
import { View } from 'react-native-reanimated/src/Animated';
import { Image, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

interface TokenListItemProps {
  item: Currency;
}

const TokenListItem: React.FC<TokenListItemProps> = ({ item }) => {
  const isSvg = item.icon.toLowerCase().endsWith('.svg');

  const renderIcon = () => {
    if (isSvg)
      return (
        <SvgUri width="36" height="36" uri={item.icon} style={styles.icon} />
      );
    return <Image source={{ uri: item.icon }} style={styles.icon} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{renderIcon()}</View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  icon: {
    width: 36,
    height: 36,
  },
  name: {
    fontSize: 16,
  },
});

export default TokenListItem;
