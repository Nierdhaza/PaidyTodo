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
  listContent: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTodosText: {
    fontSize: fontSize.m,
    color: colors.grey1,
  },
});
