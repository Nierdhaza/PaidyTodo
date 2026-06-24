import { StyleSheet } from 'react-native';
import { colors, borderRadius, paddings, fontSize } from '../../../../theme';

export const styles = StyleSheet.create({
  inputWrap: {
    height: 64,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: paddings.ms,
  },
  input: {
    flex: 1,
    paddingHorizontal: paddings.xs,
    fontSize: fontSize.m,
    color: colors.black1,
  },
  addBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: paddings.l,
    paddingVertical: paddings.xs,
    borderRadius: borderRadius.l,
    minWidth: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.m,
  },
});
