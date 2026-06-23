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
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    marginRight: 16,
  },
  dotCompleted: {
    backgroundColor: colors.grey1,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: colors.black1,
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    color: colors.grey1,
  },
  removeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
  },
  removeText: {
    color: colors.grey1,
    fontWeight: '700',
  },
});