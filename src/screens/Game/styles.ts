import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    paddingHorizontal: 32,
    justifyContent: 'space-between'
  },

  logo: {
    width: 70,
    height: 40
  },

  rightSpace: {
    width: 20,
    height: 20
  },

  content: {
    paddingHorizontal: 32,
    paddingTop: 32
  },

  cover: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },

  adsList: {
    paddingLeft: 32,
    paddingRight: 64,
    marginBottom: 64,
    alignItems: 'flex-start'
  },

  scrollContainer: {
    marginBottom: 64
  },

  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },

  emptyListContent: {
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});