import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        height: '100%',
        color: '#212121',
      },
      html: {
        height: '100%',
      },
      '#root': {
        height: '100%',
      },
    },
  },
  fonts: {
    heading: 'lato',
    body: 'lato',
  },
  colors: {
    custom: {
      pulpbg: '#F6F6F6',
      pulpTextGrey: '#9FA2B4',
      pulpTextBlack: '#252733',
      pulpOffWhite: '#F2F9FF',
      pulpDropShadowRed: 'rgba(194, 96, 114, 0.56)',
    },
    progressBar: {
      500: '#259BE9',
      bg: '#EFEFEF',
    },
    slider: {
      filledTrack: '#FDDA05',
      track: '#FDDA0566',
    },
    input: {
      gray: '#999999',
      textGray: '#808080',
    },
    reference: {
      statusBrownBg: '#EFEFEF',
      textGray: '#808080',
      textBrown: '#3A5519',
      statusGreenBg: '#9BDF46',
      containerBg: '#CBCBCB',
      lightYellow: '#FAF8EC',
      checkboxTick: '#51DACF',
    },
  },
  textStyles: {
    heading1: {
      fontFamily: 'Raleway',
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '38px',
    },
    heading2: {
      fontFamily: 'Raleway',
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '28px',
    },
    heading3: {
      fontFamily: 'Raleway',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    dashboardMatcherTitle: {
      fontFamily: 'Raleway',
      fontSize: '48px',
      lineHeight: '60.2px',
      fontWeight: 700,
    },
    dashboardLeagueNumber: {
      fontFamily: 'Raleway',
      fontSize: '180px',
      lineHeight: '200.2px',
      fontWeight: 800,
    },
    dashboardStatNumber: {
      fontFamily: 'mulish',
      fontSize: '40px',
      lineHeight: '50.2px',
      fontWeight: 700,
    },
    landingPageHeading: {
      fontFamily: 'Raleway',
      fontSize: '72px',
      lineHeight: '114px',
      fontWeight: 700,
      color: '#646464',
    },
    subtitle: {
      fontFamily: 'lato',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '29px',
    },
    body: {
      fontFamily: 'lato',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '19px',
      letterSpacing: '0.02em',
    },
    small: {
      fontFamily: 'lato',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16.8px',
      letterSpacing: '0.05em',
    },
    preTitle: {
      fontFamily: 'lato',
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '14px',
      letterSpacing: '0.03em',
    },
    notification: {
      fontFamily: 'lato',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '19.2px',
      color: 'custom.levoBlack',
    },
    userProfileName: {
      fontFamily: 'montserrat',
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '39.01px',
      color: 'custom.levoBlue',
    },
    userProfileText: {
      fontFamily: 'montserrat',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '14.63px',
      color: 'custom.levoBlack',
    },
    userProfileNumber: {
      fontFamily: 'montserrat',
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '14.63px',
      color: 'custom.pulpTextBlack',
    },
    text1: {
      fontWeight: 500,
      fontFamily: 'lato',
      fontSize: '18px',
      lineHeight: '21.6px',
      color: 'custom.pulpTextGrey',
    },
    text4: {
      fontWeight: 500,
      fontFamily: 'lato',
      fontSize: '10px',
      lineHeight: '12px',
      color: 'custom.levoBlack',
    },
  },
});
export { theme };
