import { View } from 'react-native-reanimated/src/Animated';
import { Text, StyleSheet, Pressable } from 'react-native';

import { useRouter } from 'expo-router';
import { TokenListItemProps } from './token-list-item.types';
import {
  getCapitalizedNetworkCode,
  getTokenDisplayCode,
  priceFormatter,
} from './token-list-item.utils';
import SvgOrImageIcon from './svg-or-image-icon';
import TwentyFourHourChange from './twent-four-hour-change';

const TokenListItem: React.FC<TokenListItemProps> = ({ item }) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/token/${item.id}`);
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
      unstable_pressDelay={20}
    >
      <View style={styles.iconContainer}>
        <SvgOrImageIcon fileName={item.icon} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{priceFormatter.format(item.price)}</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.codeAndNetworkContainer}>
            <Text style={styles.code}>{getTokenDisplayCode(item.code)}</Text>
            <Text style={styles.seperator}>•</Text>
            <Text>{getCapitalizedNetworkCode(item.code)}</Text>
          </View>

          {item.twentyFourHourChange && (
            <TwentyFourHourChange
              twentyFourHourChange={item.twentyFourHourChange}
            />
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
    width: 40,
    height: 40,
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
  name: {
    fontWeight: 600,
    fontSize: 16,
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
});

export default TokenListItem;
