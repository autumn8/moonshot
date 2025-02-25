import { Currency } from '@/app/services/currencies.types';
import { View } from 'react-native-reanimated/src/Animated';
import { Image, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Token } from '@/app/services/tokens.types';

interface TokenListItemProps {
  item: Token;
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

  const tokenDisplayCode = item.code.split('_')[0].toUpperCase();
  const capitalizedNetworkCode = item.networkCode
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{renderIcon()}</View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>R4.60</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.codeAndNetworkContainer}>
            <Text style={styles.code}>{tokenDisplayCode}</Text>
            <Text style={styles.seperator}>•</Text>
            <Text style={styles.network}>{capitalizedNetworkCode}</Text>
          </View>
          <Text
            style={{
              ...styles.twentyFourHourPriceChange,
              ...(false ? styles.positive : styles.negative),
            }}
          >
            -3.71%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  code: {},
  codeAndNetworkContainer: {
    flexDirection: 'row',
  },
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
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    width: 36,
    height: 36,
  },
  name: {
    fontWeight: 600,
    fontSize: 16,
  },
  negative: {
    color: 'red',
  },
  positive: {
    color: 'green',
  },
  price: {
    marginLeft: 'auto',
    fontWeight: '600',
  },
  twentyFourHourPriceChange: {
    marginLeft: 'auto',
  },
});

export default TokenListItem;
