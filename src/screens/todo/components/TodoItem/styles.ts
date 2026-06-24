import { StyleSheet } from 'react-native';
import { colors, paddings, borderRadius, fontSize, margins } from '../../../../theme';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: paddings.m,
    paddingHorizontal: paddings.l,
    borderRadius: borderRadius.m,
    marginVertical: margins.xs,
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: '50%',
    backgroundColor: colors.primary,
    marginRight: margins.m,
  },
  itemText: {
    flex: 1,
    fontSize: fontSize.m,
  },
  removeBtn: {
    paddingHorizontal: paddings.s,
  },
  removeText: {
    color: colors.grey1,
  },
});
