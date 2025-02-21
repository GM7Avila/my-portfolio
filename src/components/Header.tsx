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
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        backdropFilter: "blur(10px)",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["background-color", "color"], {
          duration: 300,
          easing: "ease-in-out",
        }),
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: "1rem", md: "2rem", lg: "4rem", xl: "14rem" },
          minHeight: { xs: "10vh !important", md: "12vh !important" },
        }}
      >
        {/* Logo @GM7Avia */}
        <Box sx={{ position: "relative" }}>
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
              Portfolio
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
  );
}
