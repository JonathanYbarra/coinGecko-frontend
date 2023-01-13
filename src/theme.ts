import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    grey: {
      50: string;
    };
  }
}

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#00DEA3',
      },
      grey: {
        50: '#fafafa',
      },
    },
  },
);

export default theme;
