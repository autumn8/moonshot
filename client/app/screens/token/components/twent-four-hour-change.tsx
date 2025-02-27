import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

type TwentyFourHourChangeProps = {
  twentyFourHourChange: number;
};

const TwentyFourHourChange: React.FC<TwentyFourHourChangeProps> = ({
  twentyFourHourChange,
}) => {
  const GreenArrow = <Ionicons name="caret-up" size={11} color="green" />;
  const RedArrow = <Ionicons name="caret-down" size={11} color="red" />;
  const renderArrow = twentyFourHourChange >= 0 ? GreenArrow : RedArrow;

  const arrowStyle =
    twentyFourHourChange >= 0 ? styles.positive : styles.negative;

  return (
    <View style={styles.twentyFourHourPriceChangeContainer}>
      {renderArrow}
      <Text style={arrowStyle}>{twentyFourHourChange.toFixed(2)}%</Text>
    </View>
  );
};

export default TwentyFourHourChange;

const styles = StyleSheet.create({
  twentyFourHourPriceChangeContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  negative: {
    color: 'red',
  },
  positive: {
    color: 'green',
  },
});
