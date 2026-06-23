import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export default function TodoScreen() {

  return (
    <View style={[styles.center, styles.background]}>
      <Text style={[styles.text]}>TODO screen</Text>
    </View>
  );
}
