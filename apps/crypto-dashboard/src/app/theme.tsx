import type { theme } from '@types';
import { DARK_THEME_KEY, LIGHT_THEME_KEY } from '@constants';

const commonStyles = {
  navigationBar: {
    height: '72px'
  },
  logo: {
    img: 'assets/img/meta.png',
    height: '32px'
  },
  icon: {
    opacity: 0.7
  },
  borderRadius: '4px',
  color: {
    blue: 'rgb(63,121,246)'
  }
};

const lightTheme = {
  ...commonStyles,
  color: {
    fontColor: 'rgb(83, 83, 83)',
    mainColor: 'rgb(235, 240, 245)', // 243, 243, 243, 0.67
    secondaryColor: 'rgb(245, 247, 250)',
    tertiaryColor: 'rgb(255, 255, 255)',
    iconColor: 'rgba(83, 83, 83, .7)',
    activeIconColor: commonStyles.color.blue,
    activeIconBackgroundColor: 'rgba(63, 121, 246, .1)',
    borderColor: 'rgb(206, 206, 206)',
    tagBackgroundColor: commonStyles.color.blue,
    tagFontColor: 'rgba(255, 255, 255, .8)',
    sidebarColor: 'rgb(255, 255, 255)',
    sidebarIconColor: 'rgba(83, 83, 83, .7)',
    ...commonStyles.color
  }
};

const darkTheme = {
  ...commonStyles,
  color: {
    fontColor: 'rgba(255, 255, 255, .8)',
    mainColor: 'rgb(45, 45, 45)',
    secondaryColor: 'rgb(23, 23, 23)',
    tertiaryColor: 'rgb(30, 30, 30)',
    iconColor: 'rgba(255, 255, 255, .7)',
    activeIconColor: commonStyles.color.blue,
    activeIconBackgroundColor: 'rgba(63, 121, 246, .1)',
    borderColor: 'rgb(53, 53, 53)',
    tagBackgroundColor: 'rgb(35, 39, 51)',
    tagFontColor: commonStyles.color.blue,
    sidebarColor: 'rgb(30, 30, 30)',
    sidebarIconColor: 'rgba(255, 255, 255, .7)',
    ...commonStyles.color
  }
};

const themeObj: theme = {
  [LIGHT_THEME_KEY]: lightTheme,
  [DARK_THEME_KEY]: darkTheme
};

export default themeObj;
