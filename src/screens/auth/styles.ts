import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 12,
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: colors.black1,
    textAlign: 'center',
    fontWeight: '500',
  },
  subText: {
    color: colors.grey1,
    textAlign: 'center',
  },
  primaryButton: {
    alignSelf: 'center',
    minWidth: 260,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
