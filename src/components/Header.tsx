import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NightModeToggle from "./NightModeToggle";
import { useThemeContext } from "../theme/ThemeContextProvider";
import {
  Divider,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const menuItems = ["About", "Portfolio", "Contact"];

export default function Header() {
  const { theme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          backdropFilter: "blur(10px)",
          width: "100%",
          top: 0,
          zIndex: theme.zIndex.drawer + 1,
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
          {/* Logo */}
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

          {/* Desktop Navbar */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: "3em", md: "6em" },
              alignItems: "center",
              fontSize: { sm: "0.8rem", md: "1rem" },
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item}
                sx={{
                  color: "inherit",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "mate-regular", color: "text.secondary" }}
                >
                  {item}
                </Typography>
              </Link>
            ))}
            <NightModeToggle />
          </Box>

          {/* Mobile Navbar */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: "2em" }}>
            <NightModeToggle />
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                color: "#5F5F5F",
                scale: "1.1",
                border: "none",
                outline: "none",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            height: "32vh",
            paddingTop: "6em",
            backgroundColor: theme.palette.background.default,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
