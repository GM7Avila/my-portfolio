import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.secondary",
        border: "none",
      }}
    >
      <IconButton
        sx={{
          border: "none",
          outline: "none",
          "&:focus": { outline: "none" },
          "&:focusVisible": { outline: "none" },
          "&:active": { border: "none" },
        }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default NightModeToggle;
