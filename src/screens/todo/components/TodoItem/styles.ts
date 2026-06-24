import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    marginVertical: 8,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    marginRight: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  removeBtn: {
    paddingHorizontal: 12,
  },
  removeText: {
    color: colors.grey1,
  },
});
