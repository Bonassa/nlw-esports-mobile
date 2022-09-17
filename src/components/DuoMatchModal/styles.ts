import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },

  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
  },

  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },

  checkIcon: {
    marginTop: -16,
  },

  label: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    marginTop: 16,
    marginBottom: 8
  },

  discordButton: {
    width: '80%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    marginBottom: 24,
  },

  discord: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  }
});