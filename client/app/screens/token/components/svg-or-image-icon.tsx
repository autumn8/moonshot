import { Image, Text, StyleSheet, Pressable } from 'react-native';
import { SvgUri } from 'react-native-svg';

type SvgOrImageIconProps = {
  fileName: string;
};

const SvgOrImageIcon: React.FC<SvgOrImageIconProps> = ({ fileName }) => {
  const isSvg = fileName.toLowerCase().endsWith('.svg');
  if (isSvg)
    return <SvgUri width="40" height="40" uri={fileName} style={styles.icon} />;

  return <Image source={{ uri: fileName }} style={styles.icon} />;
};

export default SvgOrImageIcon;

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
