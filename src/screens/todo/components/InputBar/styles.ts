import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme';

export const styles = StyleSheet.create({
  inputWrap: {
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    color: colors.black1,
  },
  addBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    minWidth: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
