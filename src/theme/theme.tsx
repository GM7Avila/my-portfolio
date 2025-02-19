import { PaletteMode } from "@mui/material";
import { grey, red } from "@mui/material/colors";

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
        }),
  },
  typography: {
    fontFamily: '"Mate", serif',
    fontSize: 14,
  },
});

export default theme;
