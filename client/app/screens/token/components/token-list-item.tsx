import { View } from 'react-native-reanimated/src/Animated';
import { Image, Text, StyleSheet, Pressable } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Token } from '@/app/services/tokens.types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

interface TokenListItemProps {
  item: Token;
}

const TokenListItem: React.FC<TokenListItemProps> = ({ item }) => {
  const isSvg = item.icon.toLowerCase().endsWith('.svg');
  const router = useRouter();

  const renderIcon = isSvg ? (
    <SvgUri width="36" height="36" uri={item.icon} style={styles.icon} />
  ) : (
    <Image source={{ uri: item.icon }} style={styles.icon} />
  );

  const renderArrow =
    item.twentyFourHourChange >= 0 ? (
      <Ionicons name="caret-up" size={11} color="green" />
    ) : (
      <Ionicons name="caret-down" size={11} color="red" />
    );

  const tokenDisplayCode = item.code.split('_')[0].toUpperCase();
  const capitalizedNetworkCode = item.networkCode
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const priceFormatter = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  });

  const onPress = () => {
    router.push(`/token/${item.id}`);
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
      unstable_pressDelay={20}
    >
      <View style={styles.iconContainer}>{renderIcon}</View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{priceFormatter.format(item.price)}</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.codeAndNetworkContainer}>
            <Text style={styles.code}>{tokenDisplayCode}</Text>
            <Text style={styles.seperator}>•</Text>
            <Text>{capitalizedNetworkCode}</Text>
          </View>

          {item.twentyFourHourChange && (
            <View style={styles.twentyFourHourPriceChangeContainer}>
              {renderArrow}
              <Text
                style={{
                  ...(item.twentyFourHourChange >= 0
                    ? styles.positive
                    : styles.negative),
                }}
              >
                {item.twentyFourHourChange.toFixed(2)}%
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
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
    borderRadius: 18,
    width: 36,
    height: 36,
    marginRight: 12,
    overflow: 'hidden',
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
  pressed: {
    backgroundColor: 'rgb(236 234 234)',
    borderRadius: 10,
    opacity: 0.9,
  },
  price: {
    marginLeft: 'auto',
    fontWeight: '600',
  },
  seperator: {
    marginLeft: 2,
    marginRight: 2,
  },
  twentyFourHourPriceChangeContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TokenListItem;
