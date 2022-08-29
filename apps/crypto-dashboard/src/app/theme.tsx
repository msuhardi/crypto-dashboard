import type { theme } from '@types';
import { DARK_THEME_KEY, LIGHT_THEME_KEY } from '@constants';

const X_MULTIPLIERS = 4;
const Y_MULTIPLIERS = 4;

const COLORS = {
  blue: 'rgb(63, 121, 246)',
  darkModeWhite: 'rgb(255, 255, 255, .8)',
  white: 'rgb(255, 255, 255)',
  lightGrey: 'rgb(66, 66, 66)',
  grey: 'rgb(45, 45, 45)',
  lightBlack: 'rgb(30, 30, 30)',
  black: 'rgb(23, 23, 23)',
  red: 'rgb(224, 76, 76)'
};

const commonStyles = {
  navigationBar: {
    height: `${18 * Y_MULTIPLIERS}px`
  },
  sidebar: {
    width: `${15 * X_MULTIPLIERS}px`
  },
  input: {
    height: `${12 * Y_MULTIPLIERS}px`
  },
  logo: {
    img: 'assets/img/meta.png',
    height: `${8 * Y_MULTIPLIERS}px`
  },
  icon: {
    activeColor: COLORS.blue,
    activeBackgroundColor: 'rgba(63, 121, 246, .1)',
    hoveredBackgroundColor: 'rgba(63, 121, 246, .1)'
  },
  borderRadius: '10px',
  color: COLORS,
  font: {
    family: "'Noto Sans', sans-serif"
  },
  gutter: {
    horizontal: X_MULTIPLIERS,
    vertical: Y_MULTIPLIERS
  }
};

const lightTheme = {
  ...commonStyles,
  icon: {
    ...commonStyles.icon,
    color: 'rgba(66, 66, 66, .7)'
  },
  sidebar: {
    ...commonStyles.sidebar,
    backgroundColor: COLORS.white
  },
  font: {
    ...commonStyles.font,
    color: COLORS.lightGrey
  },
  input: {
    ...commonStyles.input,
    placeholderColor: 'rgb(161, 161, 161)'
  },
  tag: {
    backgroundColor: commonStyles.color.blue,
    color: COLORS.white
  },
  borderColor: 'rgb(206, 206, 206)',
  color: {
    ...commonStyles.color,
    mainColor: 'rgb(235, 240, 245)',
    secondaryColor: 'rgb(245, 247, 250)',
    tertiaryColor: COLORS.white
  }
};

const darkTheme = {
  ...commonStyles,
  icon: {
    ...commonStyles.icon,
    color: 'rgba(255, 255, 255, .7)'
  },
  sidebar: {
    ...commonStyles.sidebar,
    backgroundColor: COLORS.lightBlack
  },
  font: {
    ...commonStyles.font,
    color: COLORS.darkModeWhite
  },
  input: {
    ...commonStyles.input,
    placeholderColor: 'rgb(94, 94, 94)'
  },
  tag: {
    backgroundColor: 'rgb(35, 39, 51)',
    color: COLORS.blue
  },
  borderColor: 'rgb(53, 53, 53)',
  color: {
    ...commonStyles.color,
    mainColor: commonStyles.color.grey,
    secondaryColor: commonStyles.color.black,
    tertiaryColor: commonStyles.color.lightBlack
  }
};

const themeObj: theme = {
  [LIGHT_THEME_KEY]: lightTheme,
  [DARK_THEME_KEY]: darkTheme
};

export default themeObj;
