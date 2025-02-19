import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NightModeToggle from "./NightModeToggle";
import { useThemeContext } from "../theme/ThemeContextProvider";
import { Link } from "@mui/material";

export default function Header() {
  const { theme } = useThemeContext();

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "10vh",
        py: { xs: "0.8em", sm: "1.5em", md: "2em" },
        height: "10vh",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            "&.MuiToolbar-root": {
              bgcolor: "transparent !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: "0px",
            },
          }}
        >
          {/* Logo @GM7Avia */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Zilla Slab Highlight",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#E5E5E5" : "#5F5F5F",
                color: theme.palette.mode === "dark" ? "#212121" : "#fff",
                fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.4rem" },
                px: "0.5rem",
              }}
            >
              @GM7Avila
            </Typography>
          </Box>
          {/* Desktop Navbar - sm+ */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: "3em", md: "6em" },
              alignItems: "center",
              fontSize: { sm: "0.8rem", md: "1rem" },
            }}
          >
            <Link
              sx={{
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "mate-regular", color: "text.secondary" }}
              >
                About
              </Typography>
            </Link>

            <Link
              sx={{
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "mate-regular", color: "text.secondary" }}
              >
                Portifolio
              </Typography>
            </Link>

            <Link
              sx={{
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "mate-regular",
                  color: "text.secondary",
                }}
              >
                Contact
              </Typography>
            </Link>
            <NightModeToggle />
          </Box>
          {/* Mobile - xs */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: "2em" }}>
            <NightModeToggle />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "#5F5F5F",
                scale: "1.1",
                border: "none",
                outline: "none",
                "&:focus": { outline: "none" },
                "&:focusVisible": { outline: "none" },
                "&:active": { border: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
