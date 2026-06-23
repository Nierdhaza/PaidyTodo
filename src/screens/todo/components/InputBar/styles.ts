import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../../../theme';

export const styles = StyleSheet.create({
  inputWrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: Platform.OS === 'ios' ? 18 : 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: colors.black1,
  },
  addBtn: {
    marginLeft: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    minWidth: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnDisabled: {
    opacity: 0.6,
  },
  addText: {
    color: colors.primaryText,
    fontWeight: '700',
    fontSize: 16,
  },
});