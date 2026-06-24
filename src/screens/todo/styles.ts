import { StyleSheet } from 'react-native';
import { colors, paddings, margins, fontSize } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddings.m,
    flex: 1,
  },
  header: {
    fontSize: fontSize.xxl,
    color: colors.primary,
    fontWeight: '800',
    marginBottom: margins.xs,
  },
});
