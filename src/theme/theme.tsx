import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: grey,
  },
  typography: {
    fontFamily: '"Mate", serif',
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: grey,
          divider: grey[200],
          text: {
            primary: grey[800],
            secondary: grey[700],
          },
          cardBackground: "#f9f9f9",
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[400],
          },
          cardBackground: "#42414c",
        }),
  },
  typography: {
    fontFamily: '"Mate", serif',
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
        "*": {
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    cardBackground: string;
  }
  interface PaletteOptions {
    cardBackground: string;
  }
}

export default theme;
