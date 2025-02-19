import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./components/Home";
import { useThemeContext } from "./theme/ThemeContextProvider";
import "./App.css";

function App() {
  const { theme } = useThemeContext();

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </Box>
  );
}

export default App;
