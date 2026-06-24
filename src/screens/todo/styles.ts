import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: '800',
    marginBottom: 8,
  },
});
